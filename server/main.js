import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';


// configurations
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(helmet.crossOriginResourcePolicy({ policy: 'same-origin' }))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('common'));