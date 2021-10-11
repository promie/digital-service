import express, { Application, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import { ShowRoute } from './routes'
import httpStatus from 'http-status'

const app: Application = express()

app.use(express.json())
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
  if (err) {
    return res.status(httpStatus.BAD_REQUEST).json({
      error: 'Could not decode request: JSON parsing failed',
    })
  } else {
    next()
  }
})
app.use(cors())

app.use(ShowRoute)

// Handling Unhandled Routes
app.all('*', (req: Request, res: Response, _next: NextFunction) => {
  return res.status(httpStatus.NOT_FOUND).json({
    error: `Can't find ${req.originalUrl} on this server`,
  })
})

export default app
