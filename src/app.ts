// Trouxemos todas as configs que estavam em server.ts para cá para separar mais o código. Com isso, podemos realizar testes
// sem executar o servidor real, por exemplo. 

import 'reflect-metadata';
import express, { response } from 'express';
import createConnection from './database'
import { router } from "./routes";

createConnection();
const app = express();

app.use(express.json());
app.use(router);

export { app };