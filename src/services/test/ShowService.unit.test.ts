import ShowService from '../ShowService'

describe('ShowService', () => {
  describe('transformShowsData()', () => {
    it('returns the filtered list of shows that have drm of true', () => {
      const payload = [
        {
          title: 'The Simpsons',
          country: 'USA',
          drm: true,
          slug: 'show/thesimpsons',
          episodeCount: 3,
          image: {
            showImage: '/img_url/thesimpsons',
          },
        },
        {
          title: 'Home and Away',
          country: 'Australia',
          slug: 'show/homeandaway',
          episodeCount: 0,
          image: {
            showImage: '/img_url/homeandaway',
          },
        },
        {
          title: 'Mr. Beans',
          country: 'UK',
          drm: true,
          slug: 'show/mrbeans',
          episodeCount: 1,
          image: {
            showImage: '/img_url/mrbeans',
          },
        },
      ]
      const response = [
        {
          image: '/img_url/thesimpsons',
          slug: 'show/thesimpsons',
          title: 'The Simpsons',
        },
        {
          image: '/img_url/mrbeans',
          slug: 'show/mrbeans',
          title: 'Mr. Beans',
        },
      ]

      expect(ShowService.transformShowsData(payload)).toEqual(response)
    })

    it('returns the filtered list of shows that have the episodeCount more than 0', () => {
      const payload = [
        {
          title: 'The Simpsons',
          country: 'USA',
          drm: true,
          slug: 'show/thesimpsons',
          episodeCount: 3,
          image: {
            showImage: '/img_url/thesimpsons',
          },
        },
        {
          title: 'Home and Away',
          country: 'Australia',
          slug: 'show/homeandaway',
          episodeCount: 0,
          image: {
            showImage: '/img_url/homeandaway',
          },
        },
        {
          title: 'Mr. Beans',
          country: 'UK',
          drm: true,
          episodeCount: 0,
          slug: 'show/mrbeans',
          image: {
            showImage: '/img_url/mrbeans',
          },
        },
      ]
      const response = [
        {
          image: '/img_url/thesimpsons',
          slug: 'show/thesimpsons',
          title: 'The Simpsons',
        },
      ]

      expect(ShowService.transformShowsData(payload)).toEqual(response)
    })

    it('returns the filtered list of shows when both drm is true and the episodeCount is more than 0', () => {
      const payload = [
        {
          title: 'The Simpsons',
          country: 'USA',
          drm: false,
          slug: 'show/thesimpsons',
          episodeCount: 3,
          image: {
            showImage: '/img_url/thesimpsons',
          },
        },
        {
          title: 'Home and Away',
          country: 'Australia',
          slug: 'show/homeandaway',
          episodeCount: 200,
          image: {
            showImage: '/img_url/homeandaway',
          },
        },
        {
          title: 'Mr. Beans',
          country: 'UK',
          drm: true,
          episodeCount: 500,
          slug: 'show/mrbeans',
          image: {
            showImage: '/img_url/mrbeans',
          },
        },
      ]
      const response = [
        {
          image: '/img_url/mrbeans',
          slug: 'show/mrbeans',
          title: 'Mr. Beans',
        },
      ]

      expect(ShowService.transformShowsData(payload)).toEqual(response)
    })

    it('returns an empty array when all the shows either have a drm is true or episodeCount is more than 0', () => {
      const payload = [
        {
          title: 'The Simpsons',
          country: 'USA',
          slug: 'show/thesimpsons',
          episodeCount: 3,
          image: {
            showImage: '/img_url/thesimpsons',
          },
        },
        {
          title: 'Home and Away',
          country: 'Australia',
          slug: 'show/homeandaway',
          episodeCount: 200,
          image: {
            showImage: '/img_url/homeandaway',
          },
        },
        {
          title: 'Mr. Beans',
          country: 'UK',
          drm: true,
          slug: 'show/mrbeans',
          image: {
            showImage: '/img_url/mrbeans',
          },
        },
      ]

      expect(ShowService.transformShowsData(payload)).toEqual([])
    })

    it('returns an empty array when a payload of an empty array is passed in', () => {
      expect(ShowService.transformShowsData([])).toEqual([])
    })

    it('returns an empty array when a payload has an undefined value', () => {
      expect(ShowService.transformShowsData(undefined)).toEqual([])
    })
  })
})
