const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 2
    });
    const page = await browser.newPage();
    await page.goto('https://sd.122.gov.cn/m/login?t=2');
    await page.type('#login2 #inputId', '199999999')
    await page.type('#login2 #inputPassword', '11111111')
    await console.log("当前的时间", new Date())
    await page.waitForSelector('#login2 #csessionid2')
    await console.log("当前的时间", new Date())
    await page.click('#login2 #csessionid2')
    const imgSrc2 = await page.$eval('#dom_id2 img', el => el.src)

    console.log(imgSrc2)
    // console.log(result)
    await page.screenshot({path: 'example.png'});

    // await browser.close();
})();

// dropped code
// const result = await page.evaluate(imgSrc2 => {
//     function image2Base64(imgSrc) {
//         console.log("测试")
//         console.log(imgSrc)
//         const img = new Image();
//         img.src = imgSrc;
//         const canvas = document.createElement("canvas");
//         canvas.width = img.width;
//         canvas.height = img.height;
//         const ctx = canvas.getContext("2d");
//         ctx.drawImage(img, 0, 0, img.width, img.height);
//         return canvas.toDataURL("image/png");
//     }
//
//     return Promise.resolve(image2Base64(imgSrc2));
// }, imgSrc2);
