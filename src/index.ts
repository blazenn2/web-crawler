import express, { Request, Response, Express } from 'express';
import dotenv from 'dotenv';
import puppeteer, { Browser, Page } from 'puppeteer';

dotenv.config();

const app: Express = express();
const port: Number = Number(process.env.PORT) || 3000;

let website: string = "https://bookme.pk/book-flights-online";
let browser: Browser;
let page: Page;

app.use(express.json());

app.post("/get_tickets", async (req: Request, res: Response) => {
    try {
        const { from, to, depDate, returnDate } = req.body;
        console.log("/get_page API called! Method: POST");
        browser = await puppeteer.launch();
        console.log("Browser launched successfully!");
        page = await browser.newPage();

        await page.goto(website, { timeout: 0 });
        console.log(`Directed to ${website}`);
        // await page.waitForNavigation({ waitUntil: 'networkidle0', timeout: 0 });
        // console.log("Navigation completed!");

        await page.type('input[name="from"]', from);
        await page.type('input[name="to"]', to);

        await page.type('input[name="dep_date"]', depDate);
        await page.type('input[name="return_date"]', returnDate);
        await page.evaluate(() => {
            const buttons = document.querySelectorAll('button');
            buttons.forEach((button: any) => {
                if (button.textContent.includes('BOOKME')) {
                    button.click();
                    return;
                }
            });
        });
        console.log("Submit button clicked!");

        // const searchResultSelector: string = 'button[type="submit"]';
        // await page.waitForSelector(searchResultSelector, { timeout: 0 });
        // const buttonDom = await page.$("//button[contains(., 'BOOKME')]");
        // const bookMeButton = await page.evaluate(() => {
        //     const buttons = Array.from(document.querySelectorAll('button'));
        //     return buttons.find((button: any) => button.textContent.includes('BOOKME'));
        // });
        // const [bookMeButton]:any = await page.$x("//button[contains(., 'BOOKME')]");
        // console.log(bookMeButton);

        // if (bookMeButton !== undefined) {
        //     console.log("Clicking on submit button")
        //     await bookMeButton.click();
        // } else {
        //     console.log('Button not found');
        // }

        await page.waitForNavigation({ waitUntil: 'networkidle0', timeout: 0 });
        console.log('Navigation finished');

        // let flightDom = await page.evaluate((sel) => {
        //     let elements = Array.from(document.querySelectorAll(sel));
        //     let links = elements.map((element: any) => {
        //         return element?.href
        //     })
        //     return links;
        // }, '.flight-item');
        // let dom = await page.content();
        // let flightItemArr: any;
        // await page.evaluate(() => {
        //     const flightDom = [...document.querySelectorAll('.flight-item')];
        //     flightItemArr = flightDom;
        // });
        let flightDom = await page.$$eval('.flight-item', elements => elements.map(element => element.textContent));
        await page.screenshot({ path: 'ss.png' });
        console.log(flightDom)
        res.status(200).json({ success: true, dom: flightDom });
    } catch (err: any) {
        // await browser.close();
        await page.screenshot({ path: 'ss.png' });
        console.log(err);
        res.status(400).json({ success: false, message: err.message });
    } finally {
        console.log("Browser closed successfully");
        await browser.close();
    }
});


app.listen(port, () => console.log(`listening on port ${port}`));