import express, { Request, Response, Express } from 'express';
import dotenv from 'dotenv';
import puppeteer, { Browser, Page } from 'puppeteer';
import { formatAMPM } from './functions'

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

        await page.waitForNavigation({ waitUntil: 'networkidle0', timeout: 0 });
        console.log('Navigation finished');

        let airlinesDom: string = await page.$eval('#toggleAirlines', element => element.textContent?.trim()) as string;
        const airLineObject: any = {};
        if (!airlinesDom) return res.status(200).json({ success: true, message: "No tickets available!" });
        while (airlinesDom.indexOf("(") !== -1) {
            const extractedAirline: string = airlinesDom.substring(0, airlinesDom.indexOf("(")).trim().split(" ").join("_");
            const airlineStringToDelete: string = airlinesDom.substring(0, airlinesDom.indexOf(")") + 1);
            airLineObject[`${extractedAirline}`] = [];
            airlinesDom = airlinesDom.replace(airlineStringToDelete, "");
        };
        await page.screenshot({ path: 'ss.png' });
        await page.exposeFunction("formatAMPM", formatAMPM);
        const result: any = await page.$$eval('.flight-item', (elements: any) => elements.map((element: any) => {
            // Departure details

            // Scrapping airline information
            const cardHeaderElement: Element = (element.querySelector(".card-header")) as Element;
            const airline: string[] = cardHeaderElement?.querySelector("h6")?.textContent?.split(",") || ["null", "null"];
            const isRefundable: string = cardHeaderElement?.querySelector("span")?.textContent || "";

            // Scrapping timing information
            const tripInfo: Element[] = [...element.querySelectorAll(".col-sm-2")];
            const startTripDate: Element[] = [...tripInfo[1].querySelectorAll("small")];
            const tripInfo1SpanElement: Element = tripInfo[1].querySelector("span") as Element;
            const tripInfo2SpanElement: Element = tripInfo[2].querySelector("span") as Element;
            const startTripTime: string = tripInfo1SpanElement?.textContent || "";
            const endTripTime: string = tripInfo2SpanElement?.textContent || "";
            const endTripInfo: Element[] = [...tripInfo[2].querySelectorAll("small")];

            // Scrapping stops information
            const stopsInfoCard: Element = (element.querySelector(".col-sm-6")) as Element;
            const stopsInfo: string = stopsInfoCard?.querySelector(".text-primary")?.textContent || "";
            const upperContent: Element = (stopsInfoCard?.querySelector(".upper-content")) as Element;
            const stopLayoverTime: Element[] = [...upperContent.childNodes] as Element[];
            const lowerContent: Element = (stopsInfoCard?.querySelector(".lower-content")) as Element;
            const stopLocations: Element[] = [...lowerContent.childNodes] as Element[];


            // Destination Trip Information
            const destinationObject: any = {
                airlineName: airline[0],
                fromLocation: startTripDate[1].textContent || "",
                toLocation: endTripInfo[1].textContent || "",
                startDate: startTripDate[0].textContent || "",
                startTime: startTripTime,
                endDate: endTripInfo[0].textContent || "",
                endTime: endTripTime,
                isRefundable: isRefundable
            };

            if (stopsInfo) {
                if (stopsInfo === "Non-Stop") destinationObject["numberOfStops"] = "0";
                else {
                    destinationObject["numberOfStops"] = stopsInfo.split(" ")[0].toString();
                    const stopLocationArray: string[] = stopLocations.map((element: Element) => element.textContent || "");
                    stopLayoverTime.forEach((element: Element, i: number) => {
                        const stopDepatureTime = (element as HTMLElement)?.title;
                        const layoverTime: string = element.textContent || "";
                        const stop: string = stopLocationArray[i];

                        const stopDepartDateTime: Date = new Date(stopDepatureTime);

                        let totalMinutes: number = 0;
                        layoverTime.split(" ").forEach((time: string, i: number) => {
                            const numberTimeArray: string[] = time.split("");
                            numberTimeArray.pop();
                            const numberTime: number = Number(numberTimeArray.join(""));
                            if (i === 0) return totalMinutes += (numberTime * 60);
                            else return totalMinutes += numberTime;
                        });
                        const newDate: Date = new Date(stopDepartDateTime.getTime() - (totalMinutes * 60000));
                        const stopDepartureTime: string = formatAMPM(newDate);
                        const stopDepatureDate: string = `${newDate.getDate()}-${newDate.toLocaleString('default', { month: 'long' })}`;

                        destinationObject[`stopNo${i + 1}`] = stop;
                        destinationObject[`${stop}ArivalDate`] = stopDepatureDate;
                        destinationObject[`${stop}ArivalTime`] = stopDepartureTime;
                        destinationObject[`${stop}LayoverTime`] = layoverTime;
                        destinationObject[`${stop}DepatureDateTime`] = stopDepatureTime;
                    });
                };
            };


            return destinationObject;
            // tripObject.airlineName = airline[0];
            // tripObject.fromLocation = [...tripTimeAndStopInfo[0].querySelectorAll("small")][1].textContent || "";
            // return tripTimeAndStopInfo

        }, formatAMPM)) as any;
        console.log("Data scrapped successfully!");

        // const cleanedDataArray: string[][] = (flightDom.map(element => element.split("  ").filter(value => value !== "")));
        // cleanedDataArray.forEach(data => {
        //     // First airway information
        //     const firstAirwayInfo: string[] = data[0].split(",");
        //     const firstStartTimeInfo: string[] = data[1].split(" ");
        //     const firstCostInfo: string[] = data[data.length - 1].split(" ");
        //     const firstEndTimeInfo: string[] = data[2].split(" ");
        //     const firstEndTimeInfoLength: number = firstEndTimeInfo.length;
        //     const firstAirwayObject: any = {
        //         airline: firstAirwayInfo[0],
        //         price: `${firstCostInfo[1]} ${firstCostInfo[2]}`,
        //         from: firstStartTimeInfo[3],
        //         to: firstEndTimeInfo[firstEndTimeInfoLength - 1],
        //         startDateAndTime: `${firstStartTimeInfo[2]} ${firstStartTimeInfo[0]} ${firstStartTimeInfo[1]}`,
        //         endDateAndTime: `${firstEndTimeInfo[firstEndTimeInfoLength - 2]} ${firstEndTimeInfo[firstEndTimeInfoLength - 4]} ${firstEndTimeInfo[firstEndTimeInfoLength - 3]}`,
        //         isTicketRefundable: firstAirwayInfo[1].split(" ")[firstAirwayInfo[1].split(" ").length - 1],
        //     };
        //     if (data[2].split(' ')[0] === "Non-Stop") {
        //         firstAirwayObject.numberOfStops = "0";
        //     } else {
        //         firstAirwayObject.numberOfStops = data[2].split(' ')[1];
        //         const layoverPlaces: string = data[2].split(' ')[0];
        //         let layoverTime: string = firstStartTimeInfo.filter((_, i) => i > 3).join('');
        //         for (let i: number = 1; i <= Number(firstAirwayObject.numberOfStops); i++) {
        //             const subStringLayoverTime: string[] = layoverTime.substring(0, layoverTime.indexOf('M') + 1).split('');
        //             subStringLayoverTime.splice(subStringLayoverTime.indexOf('H') + 1, 0, " ");
        //             layoverTime = layoverTime.replace(subStringLayoverTime.join(''), "");
        //             firstAirwayObject[`stop${i}Location`] = layoverPlaces.split('').splice(((i - 1) * 3), (i * 3)).join('');
        //             firstAirwayObject[`stop${i}Layover`] = subStringLayoverTime.join('');
        //         };
        //     }
        //     airLineObject[`${firstAirwayInfo[0].split(" ").join("_")}`].push(firstAirwayObject);

        //     // Second airway information
        //     const secondAirwayInfo: string[] = firstAirwayInfo[1].trim().split(" ");
        //     const secondStartTimeInfo: string[] = data[3].split(" ");
        //     const secondEndTimeInfo: string[] = data[data.length - 2].split(" ");
        //     const secondEndTimeInfoLength: number = secondEndTimeInfo.length;
        //     const secondAirwayObject: any = {
        //         airline: secondAirwayInfo.splice(0, secondAirwayInfo.length - 1).join(" "),
        //         price: `${firstCostInfo[1]} ${firstCostInfo[2]}`,
        //         from: secondStartTimeInfo[3],
        //         to: secondEndTimeInfo[secondEndTimeInfoLength - 1],
        //         startDateAndTime: `${secondStartTimeInfo[2]} ${secondStartTimeInfo[0]} ${secondStartTimeInfo[1]}`,
        //         endDateAndTime: `${secondEndTimeInfo[secondEndTimeInfoLength - 2]} ${secondEndTimeInfo[secondEndTimeInfoLength - 4]} ${secondEndTimeInfo[secondEndTimeInfoLength - 3]}`,
        //         isTicketRefundable: firstAirwayInfo[1].split(" ")[firstAirwayInfo[1].split(" ").length - 1],
        //     };
        //     if (data[4].split(' ')[0] === "Non-Stop") {
        //         secondAirwayObject.numberOfStops = "0";
        //     } else {
        //         secondAirwayObject.numberOfStops = data[4].split(' ')[1];
        //         const layoverPlaces: string = data[4].split(' ')[0];
        //         let layoverTime: string = secondStartTimeInfo.filter((_, i) => i > 3).join('');
        //         for (let i: number = 1; i <= Number(secondAirwayObject.numberOfStops); i++) {
        //             const subStringLayoverTime: string[] = layoverTime.substring(0, layoverTime.indexOf('M') + 1).split('');
        //             subStringLayoverTime.splice(subStringLayoverTime.indexOf('H') + 1, 0, " ");
        //             layoverTime = layoverTime.replace(subStringLayoverTime.join(''), "");
        //             secondAirwayObject[`stop${i}Location`] = layoverPlaces.split('').splice(((i - 1) * 3), (i * 3)).join('');
        //             secondAirwayObject[`stop${i}Layover`] = subStringLayoverTime.join('');
        //         };
        //     }
        //     airLineObject[`${secondAirwayObject.airline.split(" ").join("_")}`].push(secondAirwayObject);

        // });
        console.log("Data cleaned successfully!");


        return res.status(200).json({ success: true, tripType: "Round Trip", totalAirlines: result, dom: result });
    } catch (err: any) {
        // await browser.close();
        // await page.screenshot({ path: 'ss.png' });
        console.log(err);
        res.status(400).json({ success: false, message: err.message });
    } finally {
        console.log("Browser closed successfully");
        await browser.close();
    }
});


app.listen(port, () => console.log(`listening on port ${port}`));