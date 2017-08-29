//  make sure you have jasmine by running npm i -g jasmine
// to run spec cd ./flatten and run 'jasmine flatten_test.spec.js'

var Flatten = require('./flatten');

describe('flatten', function() {
  describe('no arguments', function() {
    it('flattens an empty array', function() {
      expect(Flatten()).toEqual([])
    })

    it('flattens a single level array', function() {
      expect(Flatten([1, 2])).toEqual([1, 2])
    })

    it('flattens an array with 1 level nesting', function() {
      expect(Flatten([1, [2]])).toEqual([1, 2])
    })

    it('flattens the craziest nesting that we hope to never see IRL', function() {
      expect(Flatten([1, [2, [3, [4, [5]]]]])).toEqual([1, 2, 3, 4, 5])
    })
  })

  describe('declaring a level for flattening', function() {
    it('flattens the full array with no args', function() {
      expect(Flatten([1, [2, [3]]])).toEqual([1, 2, 3])
    })

    it('handles 0 depth as an argument', function() {
      expect(Flatten([1, [2, [3]]], 0)).toEqual([1, [2, [3]]])
    })

    it('handles 1 depth as an argument', function() {
      expect(Flatten([1, [2, [3]]],1)).toEqual([1, 2, [3]])
    })

    it('handles 3 depth as an argument', function() {
      expect(Flatten([1, [2, [3, [4, [5]]]]],3)).toEqual([1, 2, 3, 4, [5]])
    })
  })
})
