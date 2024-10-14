const { chromium } = require('playwright')

;(async () => {
    const browser = await chromium.launch()
    const page = await browser.newPage()
    await page.goto('https://www.apple.com/la/iphone/')
    await page.screenshot({path: 'apple-iphone.png'  })

    await browser.close()
})()