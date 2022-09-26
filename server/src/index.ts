import express from 'express'; // typescript specific
import { constants } from 'http2';
const app = express();
const port = 9000;

const one: number = 1;
const two: number = 2;
const three: boolean = true;
const four: string = 'four';
const five: null = null;
const six: undefined = undefined;
const seven: any = true; // here you can specify any type

app.get('/', (req, res) => res.send(`${one} + ${two} = ${one + two}`));
app.listen(port);
console.log(`[app]: http://localhost:${port}`);
