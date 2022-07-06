import express from 'express';
const app = express();
import { listings } from './listings';
import bodyParser from 'body-parser';
const PORT = process.env.PORT || 9000;

// const one: number = 1;
// const two: number = 2;
// app.get('/', (_req, res) => res.send(`1 + 2 = ${one + two}`));

// listings route
app.get('/listings', (_req, res) => res.send(listings));

app.get('/irs', (_req, res) => res.send('Welcome to the IRS...'));

// delete listing route
app.use(bodyParser.json());
app.post('/delete-listing', (req, res) => {
	const id: string = req.body.id;

	for (let i = 0; i < listings.length; i++) {
		if (listings[i].id === id) {
			return res.send(listings.splice(i, 1)); // splice method deletes an item and then returns it
		}
	}
	return res.send('failed to delete listing');
});

app.listen(PORT, () => console.log(`[app]:http://localhost:${PORT}`));
