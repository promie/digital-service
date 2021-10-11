import { IShow } from '../types/show'

const isEmptyObject = (obj: Object): boolean => {
  return JSON.stringify(obj) === '{}'
}

const isMandatoryFieldsConditionMet = (payload: IShow[] | any): boolean => {
  const mandatoryFields = ['image', 'slug', 'title']

  const payloadKeys = [
    ...new Set(payload?.map((show: IShow) => Object.keys(show)).flat()),
  ]

  return mandatoryFields.every((field: string) => payloadKeys.includes(field))
}

export { isEmptyObject, isMandatoryFieldsConditionMet }
