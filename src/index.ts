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

app.post("/get-airline-tickets", async (req: Request, res: Response) => {
    try {
        const { from, to, depDate, returnDate, adults, kids, infants, typeOfFlight, areDatesFlexible } = req.body;
        console.log("/get-airline-tickets API called! Method: POST");
        browser = await puppeteer.launch();
        console.log("Browser launched successfully!");
        page = await browser.newPage();

        await page.goto(website, { timeout: 0 });
        console.log(`Directed to ${website}`);

        await page.type('input[name="from"]', from);
        await page.type('input[name="to"]', to);

        await page.type('input[name="dep_date"]', depDate);
        if (typeOfFlight.flightType === "1") await page.type('input[name="return_date"]', returnDate);

        await page.evaluate((data) => {
            const { adults, kids, infants, typeOfFlight, areDatesFlexible } = data;
            const { flightClass, flightType } = typeOfFlight;

            const roundTrip: HTMLInputElement = document.getElementById("oneway") as HTMLInputElement;
            const oneWay: HTMLInputElement = document.getElementById("oneway") as HTMLInputElement;
            const multiCity: HTMLInputElement = document.getElementById("multicity") as HTMLInputElement;

            if (flightType === "0") {
                roundTrip.checked = false;
                multiCity.checked = false;
                oneWay.checked = true;
            } else if (flightType === "2") {
                roundTrip.checked = false;
                multiCity.checked = true;
                oneWay.checked = false;
            } else if (flightType === "1") {
                roundTrip.checked = true;
                multiCity.checked = false;
                oneWay.checked = false;
            }

            const numberOfAdultsInput: HTMLInputElement = [...document.getElementsByName('no_of_adults')][0] as HTMLInputElement;
            if (numberOfAdultsInput) numberOfAdultsInput.value = adults.toString();

            const numberOfChildrenInput: HTMLInputElement = [...document.getElementsByName('no_of_children')][0] as HTMLInputElement;
            if (numberOfChildrenInput) numberOfChildrenInput.value = kids.toString();

            const numberOfInfantsInput: HTMLInputElement = [...document.getElementsByName('no_of_infants')][0] as HTMLInputElement;
            if (numberOfInfantsInput) numberOfInfantsInput.value = infants.toString();


            const premiumEconomy: HTMLInputElement = document.getElementById("checkbox-PremiumEconomy") as HTMLInputElement;
            const business: HTMLInputElement = document.getElementById("checkbox-Business") as HTMLInputElement;
            const economy: HTMLInputElement = document.getElementById("checkbox-Economy") as HTMLInputElement;

            if (flightClass === "1") {
                if (premiumEconomy) premiumEconomy.checked = true;
                if (business) business.checked = false;
                if (economy) economy.checked = false;
            } else if (flightClass === "2") {
                if (business) business.checked = true;
                if (premiumEconomy) premiumEconomy.checked = false;
                if (economy) economy.checked = false;
            }

            const datesFlexible: HTMLInputElement = document.getElementById("flexible_dates") as HTMLInputElement;
            if (areDatesFlexible) datesFlexible.checked = true;

            const buttons: Element[] = [...document.querySelectorAll('button')];
            buttons.forEach((button: any) => {
                if (button.textContent.includes('BOOKME')) {
                    button.click();
                    return;
                }
            });
        }, req.body);
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
        const resultCount = await page.$eval('.text-sm-left', (element: Element) => element.querySelector("span")?.textContent);
        // const currentPageURL = await page.evaluate("", () => window.location.href);
        const result: any = await page.$$eval('.flight-item', (elements: Element[]) => {
            function formatAMPM(date: Date) {
                let hours: number | string = date.getHours();
                let minutes: number | string = date.getMinutes();
                let ampm: string = hours >= 12 ? 'PM' : 'AM';
                hours = hours % 12;
                hours = hours ? (hours < 10 ? `0${hours}` : hours) : 12; // the hour '0' should be '12'
                minutes = minutes < 10 ? '0' + minutes : minutes;
                const strTime: string = hours + ':' + minutes + ' ' + ampm;
                return strTime;
            }

            return elements.map((element: Element) => {
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
                };

                // Destination Trip Stops Logic
                if (stopsInfo) {
                    if (stopsInfo === "Non-Stop") destinationObject["numberOfStops"] = "0";
                    else {
                        destinationObject["numberOfStops"] = stopsInfo.split(" ")[0].toString();
                        const stopLocationArray: string[] = stopLocations.map((element: Element) => element.textContent || "");
                        stopLayoverTime.forEach((element: Element, i: number) => {
                            const stopDepartDateTimeFromElement = (element as HTMLElement)?.title;
                            const stopDepatureSplitted = stopDepartDateTimeFromElement.split(" ");
                            const stopDepartureDate = stopDepatureSplitted[1];
                            const stopDepartureTime = stopDepatureSplitted[2] + " " + stopDepatureSplitted[3];
                            const layoverTime: string = element.textContent || "";
                            const stop: string = stopLocationArray[i];

                            const stopDepartDateTime: Date = new Date(stopDepartDateTimeFromElement);

                            let totalMinutes: number = 0;
                            layoverTime.split(" ").forEach((time: string, i: number) => {
                                const numberTimeArray: string[] = time.split("");
                                numberTimeArray.pop();
                                const numberTime: number = Number(numberTimeArray.join(""));
                                if (i === 0) return totalMinutes += (numberTime * 60);
                                else return totalMinutes += numberTime;
                            });
                            const newDate: Date = new Date(stopDepartDateTime.getTime() - (totalMinutes * 60000));
                            const stopArivalTime: string = formatAMPM(newDate);
                            const stopArivalDate: string = `${newDate.getDate()}-${newDate.toLocaleString('default', { month: 'long' })}`;

                            destinationObject[`stopNo${i + 1}`] = stop;
                            destinationObject[`${stop}ArivalDate`] = stopArivalDate;
                            destinationObject[`${stop}ArivalTime`] = stopArivalTime;
                            destinationObject[`${stop}LayoverTime`] = layoverTime;
                            destinationObject[`${stop}DepatureDate`] = stopDepartureDate;
                            destinationObject[`${stop}DepatureTime`] = stopDepartureTime;
                        });
                    };
                };

                // Return Details

                // Scrapping Timing Information
                const returnTripStartDate: Element[] = [...tripInfo[tripInfo.length - 2].querySelectorAll("small")];
                const tripInfo2ndLastSpanElement: Element = tripInfo[tripInfo.length - 2].querySelector("span") as Element; // 
                const tripInfoLastSpanElement: Element = tripInfo[tripInfo.length - 1].querySelector("span") as Element;
                const returnTripStartTime: string = tripInfo2ndLastSpanElement?.textContent || "";
                const returnTripEndTime: string = tripInfoLastSpanElement?.textContent || "";
                const returnTripEndInfo: Element[] = [...tripInfo[tripInfo.length - 1].querySelectorAll("small")];

                // Scrapping stops information
                const returnStopsInfoCard: Element[] = ([...element.querySelectorAll(".col-sm-6")]) as Element[];
                const returnStopsInfo: string = returnStopsInfoCard[returnStopsInfoCard.length - 1]?.querySelector(".text-primary")?.textContent || "";

                const cardUpperContent: Element = (returnStopsInfoCard[returnStopsInfoCard.length - 1]?.querySelector(".upper-content")) as Element;
                const returnStopLayoverTime: Element[] = [...cardUpperContent.childNodes] as Element[];
                const cardLowerContent: Element = (returnStopsInfoCard[returnStopsInfoCard.length - 1]?.querySelector(".lower-content")) as Element;
                const returnStopLocations: Element[] = [...cardLowerContent.childNodes] as Element[];

                const returnObject: any = {
                    airlineName: airline[0],
                    fromLocation: endTripInfo[1].textContent || "",
                    toLocation: startTripDate[1].textContent || "",
                    startDate: returnTripStartDate[0].textContent || "",
                    startTime: returnTripStartTime,
                    endDate: returnTripEndInfo[0].textContent || "",
                    endTime: returnTripEndTime,
                };

                if (returnStopsInfo) {
                    if (returnStopsInfo === "Non-Stop") returnObject["numberOfStops"] = "0";
                    else {
                        returnObject["numberOfStops"] = stopsInfo.split(" ")[0].toString();
                        const stopLocationArray: string[] = returnStopLocations.map((element: Element) => element.textContent || "");
                        returnStopLayoverTime.forEach((element: Element, i: number) => {
                            const stopDepartDateTimeFromElement = (element as HTMLElement)?.title;
                            const stopDepatureSplitted = stopDepartDateTimeFromElement.split(" ");
                            const stopDepartureDate = stopDepatureSplitted[1];
                            const stopDepartureTime = stopDepatureSplitted[2] + " " + stopDepatureSplitted[3];
                            const layoverTime: string = element.textContent || "";
                            const stop: string = stopLocationArray[i];

                            const stopDepartDateTime: Date = new Date(stopDepartDateTimeFromElement);

                            let totalMinutes: number = 0;
                            layoverTime.split(" ").forEach((time: string, i: number) => {
                                const numberTimeArray: string[] = time.split("");
                                numberTimeArray.pop();
                                const numberTime: number = Number(numberTimeArray.join(""));
                                if (i === 0) return totalMinutes += (numberTime * 60);
                                else return totalMinutes += numberTime;
                            });
                            const newDate: Date = new Date(stopDepartDateTime.getTime() - (totalMinutes * 60000));
                            const stopArivalTime: string = formatAMPM(newDate);
                            const stopArivalDate: string = `${newDate.getDate()}-${newDate.toLocaleString('default', { month: 'long' })}`;

                            returnObject[`stopNo${i + 1}`] = stop;
                            returnObject[`${stop}ArivalDate`] = stopArivalDate;
                            returnObject[`${stop}ArivalTime`] = stopArivalTime;
                            returnObject[`${stop}LayoverTime`] = layoverTime;
                            returnObject[`${stop}DepatureDate`] = stopDepartureDate;
                            returnObject[`${stop}DepatureTime`] = stopDepartureTime;
                        });
                    };
                };

                return { isRefundable: isRefundable, startTripData: destinationObject, returnTripData: returnObject };
            })
        }) as any;
        console.log("Data scrapped successfully!");

        const typeOfTrip = typeOfFlight.flightType === "0" ? "One Way" : typeOfFlight.flightType === "1" ? "Round Trip" : "Multi City";
        const flightClass = typeOfFlight.flightClass === "0" ? "Economy" : typeOfFlight.flightClass === "2" ? "Premium Economy" : "Business";

        return res.status(200).json({ success: true, tripType: typeOfTrip, tripClass: flightClass, areDatesFlexible: areDatesFlexible, passengersInformation: { numberOfPassengers: `${Number(adults) + Number(kids) + Number(infants)}`, adultsCount: adults, kidsCount: kids, infantsCount: infants }, totalResult: resultCount, ticketsInformation: result });
    } catch (err: any) {
        console.log(err);
        res.status(400).json({ success: false, message: err.message });
    } finally {
        await browser.close();
        console.log("Browser closed successfully");
    }
});


app.listen(port, () => console.log(`listening on port ${port}`));