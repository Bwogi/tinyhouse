"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5700;
const one = 1;
const two = 2;
const three = 'three';
const four = true;
const five = null;
const six = undefined;
const seven = {};
app.get('/', (_req, res) => res.send(`1 + 2 = ${one + two}`));
app.get('/new', (_req, res) => res.send('New route created...'));
app.get('/irs', (req, res) => res.send('Welcome to the IRS...'));
app.listen(PORT, () => console.log(`[app]:http://localhost:${PORT}`));
