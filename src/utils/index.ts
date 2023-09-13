export { isTouchDevice } from './helpers/isTouchDevice'
export { getRandomUUID } from './helpers/uniqueId'
export { arrayRandomEl } from './helpers/arrayRandomEl'
export { getUnmaskedPhoneValue, getMaskedPhoneValue, isPhoneComplete } from './helpers/phoneMask'

export const SERVER_URL = import.meta.env.DEV ? 'http://rsmliga.local/' : ''
