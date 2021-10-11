import express from 'express';
import connect from './config/db.js';
import Router from './routes/Route.js';
import cors from  'cors';

const PORT = 5000;
const app = express();
app.use(express.json());
app.use(cors());

app.use('/', Router)
app.listen(PORT, async () => {
    await connect();
    console.log(`Listening On Port ${PORT}`);
})