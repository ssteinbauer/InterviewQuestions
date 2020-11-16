describe('rangeBitwiseAnd', function() {
  var sums = require("../sums");

  describe('summing when only one list is defined', function() {
    it('then the sum is the same as the defined list', function() {
      const actual = sums.rangeBitwiseAnd(5, 7);
      expect(actual).toBe(4);
    });
  });

  describe('summing when only one list is defined', function() {
    it('then the sum is the same as the defined list', function() {
      const actual = sums.rangeBitwiseAnd(1, 2);
      expect(actual).toBe(0);
    });
  });

  describe('summing when only one list is defined', function() {
    it('then the sum is the same as the defined list', function() {
      const actual = sums.rangeBitwiseAnd(2, 4);
      expect(actual).toBe(0);
    });
  });

  describe('summing when only one list is defined', function() {
    it('then the sum is the same as the defined list', function() {
      const actual = sums.rangeBitwiseAnd(1, 2147483645);
      expect(actual).toBe(0);
    });
  });
});