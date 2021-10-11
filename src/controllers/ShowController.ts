import { Request, Response, NextFunction } from 'express'
import { ShowService } from '../services'
import httpStatus from 'http-status'
import { IShow } from '../types/show'

/**
 *  Returning the list of filtered shows as a response
 *
 * @param {object} req
 * @param {object} res
 * @param {function} _next
 * @returns IShow[]
 */
const transformShowsData = (
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const payload: IShow[] = req.body.payload

  const shows = ShowService.transformShowsData(payload)

  return res.status(httpStatus.OK).json({
    response: shows,
  })
}

export default {
  transformShowsData,
}
