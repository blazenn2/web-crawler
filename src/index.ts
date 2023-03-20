import express, { Request, Response, Express } from 'express';
import dotenv from 'dotenv';
import puppeteer, { Page } from 'puppeteer';

dotenv.config();

const app: Express = express();
const port: Number = Number(process.env.PORT) || 3000;

let website: string = "https://bookme.pk/book-flights-online";
let browser: any;

app.post("/get_page", async (req: Request, res: Response) => {
    try {
        console.log("/get_page API called! Method: GET");
        browser = await puppeteer.launch();
        console.log("Browser launched successfully!");
        const page = await browser.newPage();

        await page.goto(website, { timeout: 0 });
        console.log(`Directed to ${website}`);
        // await page.waitForNavigation({ waitUntil: 'networkidle0', timeout: 0 });
        // console.log("Navigation completed!");

        await page.type('input[name="from"]', 'KARACHI (KHI)');
        await page.type('input[name="to"]', 'DUBAI (DXB)');

        await page.type('input[name="dep_date"]', '25-03-2023');
        await page.type('input[name="return_date"]', '30-03-2023');
        const searchResultSelector: string = 'div.col-lg-12 form-group';
        await page.waitForSelector(searchResultSelector);
        await page.click(searchResultSelector);



        await browser.close();
        console.log("Broweser closed successfully");
        res.status(200).json({ success: true });
    } catch (err: any) {
        await browser.close();
        console.log(err);
        res.status(400).json({ success: false, message: err.message });
    }
});


app.listen(port, () => console.log(`listening on port ${port}`));