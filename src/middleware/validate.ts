import { Request, Response, NextFunction } from 'express'
import httpStatus from 'http-status'
import {
  isEmptyObject,
  isMandatoryFieldsConditionMet,
} from '../helpers/helpers'

/**
 * This middleware validates the request body to ensure
 * that the request body exists, is not empty and has the property/object payload
 *
 * @param {object} req
 * @param {object} res
 * @param {function} next
 */
const validationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (
    !req.body ||
    isEmptyObject(req.body) ||
    !req.body.hasOwnProperty('payload') ||
    !isMandatoryFieldsConditionMet(req.body.payload)
  ) {
    res.statusCode = httpStatus.BAD_REQUEST
    return res.json({
      error: 'Could not decode request: JSON parsing failed',
    })
  }

  next()
}

export default validationMiddleware
