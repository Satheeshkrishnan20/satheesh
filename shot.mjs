import { chromium } from 'playwright-core'
const browser = await chromium.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
})
async function run(w, h, tag, dpr = 1.25) {
  const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: dpr })
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle' })
  await page.waitForTimeout(1700)
  await page.screenshot({ path: `shots/${tag}-hero.png` })
  for (let i = 0; i < 16; i++) {
    await page.evaluate(() => window.scrollBy(0, window.innerHeight))
    await page.waitForTimeout(120)
  }
  for (const id of ['impact', 'stack', 'work', 'services', 'trust', 'process', 'contact']) {
    try {
      await page.locator(`#${id}`).scrollIntoViewIfNeeded()
      await page.waitForTimeout(550)
      await page.locator(`#${id}`).screenshot({ path: `shots/${tag}-${id}.png` })
    } catch (e) { console.log('skip', id) }
  }
  await page.close()
}
await run(1280, 880, 'c')
await run(390, 800, 'cm', 2)
await browser.close()
console.log('ok')
