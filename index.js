'use strict'

/**
 * Randomize the order of the elements in a given array
 * @param  {Array} array  The array to shuffle
 * @return {Array}        The shuffled copy of the array
 */
module.exports = function arrandomize(array) {
  if (!Array.isArray(array)) {
    throw new Error('Not an array')
  }

  const shuffled = [...array]

  let tmp
  let j
  let i = shuffled.length

  while (--i) {
    j = ~~(Math.random() * (i + 1))
    tmp = shuffled[i]
    shuffled[i] = shuffled[j]
    shuffled[j] = tmp
  }

  return shuffled
}
