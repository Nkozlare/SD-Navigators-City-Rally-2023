import express from "express";
import path from "path";
import morgan from 'morgan';
import {fileURLToPath} from 'url';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

var app = express();
var port = 3000;

//middleware:
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../dist')))
app.use(express.json());


app.listen(port);
console.log(`Listening at http://localhost:${port}`);