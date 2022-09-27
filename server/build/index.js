"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // typescript specific
const listings_1 = require("./listings");
const app = (0, express_1.default)();
const port = 9000;
const one = 1;
const two = 2;
const three = true;
const four = 'four';
const five = null;
const six = undefined;
const seven = true; // here you can specify any type
app.get('/', (_req, res) => res.send(`${one} + ${two} = ${one + two}`));
// lets create a listings get route here
// but first import the listings array before you create this route.
app.get('/listings', (_req, res) => res.send(listings_1.listings));
app.listen(port);
console.log(`[app]: http://localhost:${port}`);
