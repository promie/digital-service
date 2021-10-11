import express from 'express'
import { ShowController } from '../controllers'
import validationMiddleware from '../middleware/validate'

const router = express.Router()

router.post('/', validationMiddleware, ShowController.transformShowsData)

export default router
