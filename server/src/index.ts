import express from 'express'; // typescript specific
import { listings } from './listings';
const app = express();
const port = 9000;

const one = 1;
const two = 2;
const three = true;
const four = 'four';
const five = null;
const six = undefined;
const seven: any = true; // here you can specify any type

app.get('/', (_req, res) => res.send(`${one} + ${two} = ${one + two}`));

// lets create a listings get route here
// but first import the listings array before you create this route.
app.get('/listings', (_req, res) => res.send(listings));

app.listen(port);
console.log(`[app]: http://localhost:${port}`);
