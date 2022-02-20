import express from 'express';
import connection from './connection/db.js';
import defaultData from './default.js';
import Route from './routes/route.js';
import cors from 'cors';
import bodyParser, { urlencoded } from 'body-parser';

const app = express();
const PORT = 8000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

app.use('/', Route);

connection();

app.listen(PORT, () =>{
  console.log(`server is listening successfully on port ${PORT}`);
})

defaultData();