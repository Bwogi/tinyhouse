import express from 'express'; // typescript specific
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
app.listen(port);
console.log(`[app]: http://localhost:${port}`);
