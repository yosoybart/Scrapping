import { chromium } from 'playwright'

const browser = await chromium.launch(
    { headless: true }
)

const page = await browser.newPage()

await page.goto('https://us.shein.com/SHEIN-Attitoon-Casual-Street-Camo-Tree-Branch-Print-Hooded-Sweatshirt-Suitable-For-Autumn-Winter-p-43548374.html?src_identifier=on%3DIMAGE_COMPONENT%60cn%3Dshopbycate%60hz%3DhotZone_1%60ps%3D2_1%60jc%3Dreal_2030&src_module=All&src_tab_page_id=page_home1728681098991&mallCode=1&pageListType=4&imgRatio=3-4')

const product = await page.$$eval(
    '.s-card-container',
    (result) => (
        result.map((el) => {

            const tittle = el.querySelector('h2')
            ?.innerTex

            if (!tittle) return null

            const image = el
            .querySelector('img')
            .getAttribute('src')

            const price = el
            .querySelector('<p class="product-item__camecase-wrap" data-note="" data-v-700a8ab4=""><span>$9.29</span><!--[--><!--]--></p>')

            const link = el
            .querySelector('.a-link-normal')
            .getAttribute('href')

            return {
                tittle,
                image,
                price,
                link,
            }
        }
    )
)

console.log(product)
await browser.close()