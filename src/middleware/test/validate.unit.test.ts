import { Request, Response, NextFunction } from 'express'
import validationMiddleware from '../validate'

describe('Validation middleware', () => {
  let mockRequest: Partial<Request>
  let mockResponse: Partial<Response>
  let nextFunction: NextFunction = jest.fn()

  beforeEach(() => {
    mockRequest = {}
    mockResponse = {
      json: jest.fn(),
    }
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('returns the error response if there is request body is undefined', () => {
    mockRequest = {
      body: undefined,
    }

    const expectedResponse = {
      error: 'Could not decode request: JSON parsing failed',
    }

    validationMiddleware(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction as NextFunction,
    )

    expect(mockResponse.json).toBeCalledWith(expectedResponse)
  })

  it('returns the error response if the req.body is empty', () => {
    mockRequest = {
      body: {},
    }

    const expectedResponse = {
      error: 'Could not decode request: JSON parsing failed',
    }

    validationMiddleware(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction as NextFunction,
    )

    expect(mockResponse.json).toBeCalledWith(expectedResponse)
  })

  it('returns the error response if the req.body does not have the payload object', () => {
    mockRequest = {
      body: {
        field1: 'test 1',
        field2: 'test 2',
      },
    }

    const expectedResponse = {
      error: 'Could not decode request: JSON parsing failed',
    }

    validationMiddleware(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction as NextFunction,
    )

    expect(mockResponse.json).toBeCalledWith(expectedResponse)
  })

  it('returns the error response if the req.body has the payload object but incorrect fields', () => {
    mockRequest = {
      body: {
        payload: [
          {
            name: 'promie',
          },
          {
            lastName: 'yutasane',
          },
        ],
      },
    }

    const expectedResponse = {
      error: 'Could not decode request: JSON parsing failed',
    }

    validationMiddleware(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction as NextFunction,
    )

    expect(mockResponse.json).toBeCalledWith(expectedResponse)
  })

  it('calls the next function if the payload has all the mandatory fields (image, title, slug)', () => {
    mockRequest = {
      body: {
        payload: [
          {
            image: {
              showImage: '/sampleimageurl',
            },
          },
          {
            slug: 'show/sluggy',
            title: 'legend',
          },
          {
            country: 'Australia',
            slug: 'show/awesome',
          },
        ],
      },
    }

    validationMiddleware(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction as NextFunction,
    )

    expect(nextFunction).toBeCalledTimes(1)
  })

  it('calls the next function if all fields are valid', () => {
    mockRequest = {
      body: {
        payload: [
          {
            country: 'UK',
            description:
              "What's life like when you have enough children to field your own football team?",
            drm: true,
            episodeCount: 3,
            genre: 'Reality',
            language: 'English',
            nextEpisode: null,
            primaryColour: '#ff7800',
            image: {
              showImage: 'imageurl',
            },
            title: 'Family Guy',
            slug: 'show/familyguy',
          },
        ],
      },
    }

    validationMiddleware(
      mockRequest as Request,
      mockResponse as Response,
      nextFunction as NextFunction,
    )

    expect(nextFunction).toBeCalledTimes(1)
  })
})
