import http from 'http';
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import logging from './config/logging';
import config from './config/congfig';
import morgan from 'morgan';
import cors from 'cors';
import * as dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import router from './router';
import { createConnection } from 'typeorm';
import databaseConfig from './config/database';

const NAMESPACE = 'server';
const host = process.env.HOST || '0.0.0.0';
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 5000;
const app = express();
app.use(express.json());
app.use(morgan('tiny'));
app.use(express.static('public'));
dotenv.config({ path: '.env' });
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(
    '/docs',
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: '/swagger.json'
        }
    })
);
app.use(router);
createConnection(databaseConfig)
    .then((_connection) => {
        app.listen(port, host, () => {
            console.log(`Server listen on port ${port} !!!`);
        });
    })
    .catch((err) => {
        console.log('Unable to connect to db', err);
        process.exit(1);
    });
