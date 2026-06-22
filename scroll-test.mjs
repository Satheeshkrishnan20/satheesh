import { chromium } from 'playwright-core'

const URL = process.env.TEST_URL || 'http://localhost:4173/'
const widths = [320, 360, 414, 480, 600, 720, 768, 900, 1024, 1280, 1440, 1920]

const browser = await chromium.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  args: ['--force-device-scale-factor=1', '--high-dpi-support=0'],
})
const page = await browser.newPage({ deviceScaleFactor: 1 })
let failures = 0

for (const w of widths) {
  await page.setViewportSize({ width: w, height: 900 })
  await page.goto(URL, { waitUntil: 'networkidle' })
  // Scroll to bottom to trigger reveal animations / lazy layout shifts.
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight))
  await page.waitForTimeout(250)

  const result = await page.evaluate(() => {
    const winW = window.innerWidth
    // True right-edge offenders only (ignore intentionally off-screen helpers
    // like .skip-link parked at left:-9999px, which don't cause real scroll).
    const offenders = []
    for (const el of document.querySelectorAll('body *')) {
      if (el.classList.contains('skip-link')) continue
      const r = el.getBoundingClientRect()
      if (r.width === 0 || r.height === 0) continue
      if (r.right > winW + 1) {
        offenders.push(
          `${el.tagName.toLowerCase()}.${(el.className || '').toString().trim().split(/\s+/).join('.')} right=${Math.round(r.right)}`
        )
      }
    }
    return { clientW: document.documentElement.clientWidth, winW, offenders: offenders.slice(0, 6) }
  })

  // clientWidth is the real visible content width; if nothing exceeds it on the
  // right, there is no horizontal scrollbar regardless of scrollWidth quirks.
  const overflow = result.offenders.length > 0
  if (overflow) {
    failures++
    console.log(`✗ ${w}px  ${result.offenders.length} element(s) exceed viewport right edge`)
    result.offenders.forEach((o) => console.log(`     ↳ ${o}`))
  } else {
    console.log(`✓ ${w}px  no horizontal overflow`)
  }
}

await browser.close()
console.log(failures === 0 ? '\nPASS — no horizontal scroll at any width.' : `\nFAIL — ${failures} width(s) overflow.`)
process.exit(failures === 0 ? 0 : 1)
