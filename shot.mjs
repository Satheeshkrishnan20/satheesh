import { chromium } from 'playwright-core'

const URL = process.env.TEST_URL || 'http://localhost:4173/'
const browser = await chromium.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  args: ['--force-device-scale-factor=1'],
})
const page = await browser.newPage({ viewport: { width: 1280, height: 900 }, deviceScaleFactor: 1 })
await page.goto(URL, { waitUntil: 'networkidle' })

// Hero (dark, default)
await page.screenshot({ path: 'shots/01-hero-dark.png' })

// Scroll to contact (the section from the user's screenshot)
await page.evaluate(() => document.querySelector('#contact').scrollIntoView())
await page.waitForTimeout(400)
await page.screenshot({ path: 'shots/02-contact-dark.png' })

// Light mode hero
await page.evaluate(() => {
  localStorage.setItem('theme', 'light')
  document.documentElement.setAttribute('data-theme', 'light')
})
await page.evaluate(() => window.scrollTo(0, 0))
await page.waitForTimeout(300)
await page.screenshot({ path: 'shots/03-hero-light.png' })

// Footer (two-column) — step-scroll so reveal-grown sections settle first.
for (let i = 0; i < 6; i++) {
  await page.evaluate(() => window.scrollBy(0, window.innerHeight))
  await page.waitForTimeout(200)
}
await page.evaluate(() => document.querySelector('.footer').scrollIntoView({ block: 'end' }))
await page.waitForTimeout(400)
await page.screenshot({ path: 'shots/04-footer-light.png' })

await browser.close()
console.log('screenshots written to shots/')
