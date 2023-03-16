import express, { Request, Response, Express } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port: Number = Number(process.env.PORT) || 3000;

let website: String = "https://www.sastaticket.pk/";

app.post("/get_page", (req: Request, res: Response) => {
    
});


app.listen(port, () => console.log(`listening on port ${port}`));