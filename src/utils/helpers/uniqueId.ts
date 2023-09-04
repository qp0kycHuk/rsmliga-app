import uniqid from 'uniqid'

/**
 * generate random id with crypto API
 *
 * @export
 * @returns {string}
 */
export function getRandomUUID(): string {
  return uniqid()
}
