describe('sums', function() {
  var sums = require("../sums");

  describe('finding twoSums ', function() {
    const testCases = [
      { input: { values: [2, 5, 5, 11], target: 10 }, expected: [[1, 2]] },
      { input: { values: [2, 5, 5, 11], target: 4 }, expected: [] },
      { input: { values: [0, 0, 0 ], target: 0 }, expected: [[0, 1]] },
      { input: { values: [0, 2, 5, 5, 11, 9], target: 11 }, expected: [[0, 4], [1, 5]] },
    ];

    testCases.forEach(testCase => {
      it(`with a target of ${testCase.input.values} should find an answer`, function() {
        const actual = sums.twoSums(testCase.input.values, testCase.input.target);
        expect(actual).toEqual(testCase.expected);
      });
    });
  });

  describe('finding threeSums ', function() {
    const testCases = [
      { input: { values: [-1, 0, 1, 2, -1, -4], target: 0 }, expected: [[-1, -1, 2], [-1, 0, 1]] },
      { input: { values: [1, 2, -2,-1], target: 0 }, expected: [] },
      { input: { values: [2, 5, 5, 11], target: 0 }, expected: [] },
      { input: { values: [0, 0, 0], target: 0 }, expected: [[0, 0, 0]] },
    ];

    testCases.forEach(testCase => {
      it(`with a target of ${testCase.input.values} should find an answer`, function() {
        const actual = sums.threeSum(testCase.input.values);
        expect(actual).toEqual(testCase.expected);
      });
    });
  });

  // xdescribe('sets', function() {
  //   it('then there should be one tuple', function() {
  //     const actual = sums.sets(1, [0, 1, 2, 3]);
  //     expect(actual.length).toBe(4);
  //     expect(actual[0]).toEqual([0, 1, 2]);
  //     expect(actual[1]).toEqual([0, 1, 3]);
  //     expect(actual[2]).toEqual([0, 2, 3]);
  //     expect(actual[3]).toEqual([1, 2, 3]);
  //   });
  // });
});

describe('arraySums', function() {
  var sums = require("../sums");

  describe('finding twoSums ', function() {
    const testCases = [
      { input: { values: [0, 0, 0], target: 0 }, expected: 6 },
      { input: { values: [1, 1, 1], target: 2 }, expected: 2 },
      { input: { values: [1, 1, 0], target: 2 }, expected: 2 },
      { input: { values: [1, 2, 3], target: 3 }, expected: 2 },
      { input: { values: [1, 1, 3], target: 2 }, expected: 1 },
      { input: { values: [1, 0, 1, 2, -1], target: 3 }, expected: 3 },
    ];

    testCases.forEach(testCase => {
      it(`with a target of ${testCase.input.values} should find ${testCase.expected}`, function() {
        var {values, target} = { ...testCase.input };
        const actual = sums.subarraySum(values, target);
        expect(actual).toEqual(testCase.expected);
      });
    });
  });
});