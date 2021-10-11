import request from 'supertest'
import httpStatus from 'http-status'
import app from '../../app'
import sampleRequest from '../data/sample_request.json'
import sampleResponse from '../data/sample_response.json'

describe('ShowController integration', () => {
  describe('transformShowsData endpoint', () => {
    it('returns the 200 OK when it successfully hits the endpoint with correct payload', async () => {
      await request(app).post('/').send(sampleRequest).expect(httpStatus.OK)
    })

    it('returns the correct response body when it successfully hits the endpoint with correct payload', async () => {
      const response = await request(app).post('/').send(sampleRequest)

      expect(response.body).toEqual(sampleResponse)
    })

    it('returns the 400 BAD REQUEST if the req.body is empty with the response error message', async () => {
      const response = await request(app).post('/').send({})

      expect(response.status).toBe(httpStatus.BAD_REQUEST)
      expect(response.text).toContain(
        'Could not decode request: JSON parsing failed',
      )
    })

    it('returns the 400 BAD REQUEST if the req.body field does not have a payload object', async () => {
      const response = await request(app).post('/').send({
        skip: 0,
        take: 10,
        totalRecords: 75,
      })

      expect(response.status).toBe(httpStatus.BAD_REQUEST)
    })

    it('returns the 400 BAD REQUEST if the req.body field is undefined', async () => {
      const response = await request(app).post('/').send(undefined)

      expect(response.status).toBe(httpStatus.BAD_REQUEST)
    })

    it('returns the 400 BAD REQUEST if the req.body has a payload but the mandatory fields (image, title, slug) conditions are not met', async () => {
      const response = await request(app)
        .post('/')
        .send({
          payload: [
            {
              name: 'Promie',
            },
            {
              lastName: 'Yutasane',
            },
          ],
        })

      expect(response.status).toBe(httpStatus.BAD_REQUEST)
    })

    it('returns the 400 BAD REQUEST if the payload is not a valid JSON object', async () => {
      const response = await request(app).post('/').send('plaintext')

      expect(response.status).toBe(httpStatus.BAD_REQUEST)
    })
  })
})
