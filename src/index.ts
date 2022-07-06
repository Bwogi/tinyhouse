import express from 'express';
const app = express();
import { listings } from './listings';
const PORT = process.env.PORT || 9000;

const one: number = 1;
const two: number = 2;

app.get('/', (_req, res) => res.send(`1 + 2 = ${one + two}`));
app.get('/listings', (_req, res) => res.send(listings));
app.get('/irs', (_req, res) => res.send('Welcome to the IRS...'));

// listings route
// delete listing route

app.listen(PORT, () => console.log(`[app]:http://localhost:${PORT}`));
