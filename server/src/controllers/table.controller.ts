import { Response, Request, NextFunction } from "express";

import { parseQueryParams } from "../utils";

import * as tableService from '../services/table.service';

export const get = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const queryParams = parseQueryParams(req.query);

    res.json(await tableService.getMultiply(queryParams));
  } catch (error) {
    console.error('Error while getting table data');
    next(error);

    res.json(null);
  }
};

export const init = async (_: Request, res: Response, next: NextFunction) => {
  try {
    const isSuccess = await tableService.initData();

    if (isSuccess) {
      res.send('Success init table and data');
      return;
    }

    res.send('Table already created and filled');
  } catch (error) {
    console.error(`Error while creating table`);
    next(error);
  }
};
