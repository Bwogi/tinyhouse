import express from 'express'; // typescript specific
import { listings } from './listings';
import bodyParser from 'body-parser';

const app = express();
const port = 9000;

// lets add a middleware
app.use(bodyParser.json());

// lets create a listings get route here
// but first import the listings array before you create this route.
app.get('/listings', (_req, res) => res.send(listings));

// we create a delete listing route
// but we need the body parser package to be able to send requests to the server via url body
// install the body parser package as a dependency(body-parser)
// then install its type declaration file as a dev dependency(@types/body-parser)
app.post('/delete-listing', (req, res) => {
	// we expect the id of the listing to be deleted to be part of the body
	const id: string = req.body.id;

	// lets locate the listing we need to delete
	for (let i = 0; i < listings.length; i++) {
		// iterate through the listings array
		if (listings[i].id === id) {
			// at any moment in time if that iterated listing item id is equal to the id our request body(req.body), do the following
			// we want to delete the listing but also we want to send that listing
			return res.send(listings.splice(i, 1));
			// array.splice() deletes an item but also returns it
		}
	}
	// in case we dont find the requested listing item
	res.send('failed to delete listing item');
});

// to test our post route using CURL we
// > curl -X POST http://localhost:9000/delete-listing -H 'Content-Type: application/json' -d '{"id":"001"}

// this is our restful api to interact with our mock data

app.listen(port);
console.log(`[app]: http://localhost:${port}`);
