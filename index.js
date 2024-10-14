const { chromium } = require('playwright')

;(async () => {
    const browser = await chromium.launch()
    const page = await browser.newPage()
    await page.goto('https://www.apple.com/shop/buy-iphone/iphone-15')
    const iPhone15precio =  await page.textContent('[class="nowrap"]')
    const iPhone15color = await page.textContent('[class="colornav-label"]')
    console.log({iPhone15precio, iPhone15color})

    await browser.close()
})()