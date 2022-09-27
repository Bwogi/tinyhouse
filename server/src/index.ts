import express from 'express'; // typescript specific
import { listings } from './listings';
import bodyParser from 'body-parser';

const app = express();
const port = 9000;

// lets add a middleware
app.use(bodyParser.json());

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

// we create a delete listing route
// but we need the body parser package to be able to send requests to the server via url parameters
// install the body parser package as a dependency(body-parser)
// then install its type declaration file as a dev dependency(@types/body-parser)

app.listen(port);
console.log(`[app]: http://localhost:${port}`);
