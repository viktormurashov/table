import express from 'express';

import * as tableController from '../controllers/table.controller';

const tableRouter = express.Router();

tableRouter.get('/', tableController.get);
tableRouter.get('/init', tableController.init);

export { tableRouter };
