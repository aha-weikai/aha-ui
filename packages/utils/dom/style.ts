import { isNumber, isString } from '../types'

export function addUnit(value?: string | number, defaultUnit = 'px') {
  if (!value) return ''

  if (isString(value)) {
    return value
  } else if (isNumber(value)) {
    return `${value}${defaultUnit}`
  }
}
