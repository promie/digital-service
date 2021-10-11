# Digital Service
Digital service is a small JSON-based web service where the JSON data is posted and the filtered data will be
returned as a response. This app is written in Node, Express (TypeScript), and Jest.

## Requirements
- Node 14.17.5 LTS
- NPM 6.x

## Installation
```bash
npm install
```

## How to run
### Heroku
This service is deployed to Heroku [https://digital-service-api.herokuapp.com/](https://digital-service-api.herokuapp.com/).
Please refer to instruction of usage below.

### Local
To run the app in development mode locally, run the below command on the root directory:
```bash
npm run dev
```
An express server will spin up on `http://localhost:5000/` and from there by you are hitting
the end point to post your payload. 

### Usage
**Please note that only the POST operation is implemented. Performing
other operations on the URL will result in a 404 unhandled routes error.**

An example payload below (ensure to have the payload in the request body as well as the mandatory fields: image, slug
and title. These fields are mandatory field because they return in the response if the filtering conditions are met):
```bash
{
    "payload": [
        {
            "country": "USA",
            "description": "Do you like cartoon?",
            "drm": true,
            "episodeCount": 3,
            "image": {
                "showImage": "/simpsons_url"
            },
            "language": "English",
            "slug": "show/thesimpsons",
            "title": "The Simpsons",
            "tvChannel": "FOX"
        }
    ],
}
```

The endpoint can be tested with [postman](https://www.postman.com/) or [insomnia](https://insomnia.rest/).

If you have posted a valid payload and the data meet all the filtering requirement, you should get see the below response.

```bash 
{
  "response": [
    {
      "image": "/simpsons_url",
      "slug": "show/thesimpsons",
      "title": "The Simpsons"
    }
  ]
}
```

In the case where the invalid payload is passed in, you will get the below error response.

```bash
{
  error: 'Could not decode request: JSON parsing failed'
}
```

## How to run tests
Run all tests (both unit and integration)
```bash
npm run test
```

Run unit tests
```bash
npm run test:unit
```

Run integration tests
```bash
npm run test:integration
```