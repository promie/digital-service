import { isEmptyObject, isMandatoryFieldsConditionMet } from '../helpers'
import { IShow } from '../../types/show'

describe('helpers', () => {
  describe('isEmptyObject()', () => {
    it('returns true if the object is empty', () => {
      const objInput = {}

      expect(isEmptyObject(objInput)).toBe(true)
    })

    it('returns false if the object is not empty', () => {
      const objInput = {
        test: 'test 1',
      }

      expect(isEmptyObject(objInput)).toBe(false)
    })
  })

  describe('isMandatoryFieldsConditionMet()', () => {
    it('returns true if the payload has all the mandatory fields (image, slug, title)', () => {
      const payload: IShow[] = [
        {
          image: {
            showImage: 'imageurl',
          },
        },
        {
          slug: 'show/slugshow',
        },
        {
          title: 'thisisthetitle',
        },
      ]

      expect(isMandatoryFieldsConditionMet(payload)).toBe(true)
    })

    it('returns false if the payload does not have all the mandatory fields', () => {
      const payload = [
        {
          invalid1: 'invalid1',
        },
        {
          invalid2: 'invalid2',
        },
      ]

      expect(isMandatoryFieldsConditionMet(payload)).toBe(false)
    })

    it('returns false if the payload is undefined', () => {
      const payload = undefined

      expect(isMandatoryFieldsConditionMet(payload)).toBe(false)
    })

    it('returns false if the payload is null', () => {
      const payload = null

      expect(isMandatoryFieldsConditionMet(payload)).toBe(false)
    })

    it('returns false if the payload is empty', () => {
      const payload: Object = []

      expect(isMandatoryFieldsConditionMet(payload)).toBe(false)
    })
  })
})
