import express from 'express';
import cors from 'cors';

import { tableRouter } from './src/routes/table.route';

const app = express();

app.use(cors());

app.use('/table', tableRouter)

app.listen(8080, () => console.log("Listening on port 8080!"));
