const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {

    test('returns an array', () => {
        let array = ['apple', 'pan', 'milk']
        let result = shuffleArray(array)
        expect(result).toHaveProperty('length')
    })

    test('returns an array of the same length as the argument sent in', () => {
        let array = ['apple', 'pan', 'milk']
        let result = shuffleArray(array)
        expect(result.length).toEqual(3)
    })

})