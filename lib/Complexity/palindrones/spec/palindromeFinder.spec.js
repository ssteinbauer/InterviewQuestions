'use strict';

var sut = require('../app/palindromeFinder');

describe('palindrome finder', function() {
  describe('finding all palindromes', function() {
    it('finds two character palindrome in [aab]', function() {
      var expectedPalindromes = [{ c: 0.5, o: 1 }];

      var allPalindromes = sut.findAllPalindromes('aab');
      expect(allPalindromes).toEqual(expectedPalindromes);
    });

    it('finds two character palindrome in [baa]', function() {
      var expectedPalindromes = [{ c: 1.5, o: 1 }];

      var allPalindromes = sut.findAllPalindromes('baa');
      expect(allPalindromes).toEqual(expectedPalindromes);
    });

    it('finds two character palindrome in [baad]', function() {
      var expectedPalindromes = [{ c: 1.5, o: 1 }];

      var allPalindromes = sut.findAllPalindromes('baad');
      expect(allPalindromes).toEqual(expectedPalindromes);
    });

    it('find a trivial palindrome in [bab]', function() {
      var expectedPalindromes = [{ c: 1, o: 1 }];

      var allPalindromes = sut.findAllPalindromes('bab');
      expect(allPalindromes).toEqual(expectedPalindromes);
    });

    it('only returns maximum palindrome [abcdedcba]', function() {
      var expectedPalindromes = [
        { c: 4, o: 4 }
      ];

      var allPalindromes = sut.findAllPalindromes('abcdedcba');
      expect(allPalindromes).toEqual(expectedPalindromes);
    });
  
    it('finds all palindromes in [xbaaby]', function() {
      var expectedPalindromes = [
        { c: 2.5, o: 2 }
      ];

      var allPalindromes = sut.findAllPalindromes('xbaaby');
      expect(allPalindromes).toEqual(expectedPalindromes);
    });
    
    it('finds all palindromes in [aaadddd]', function() {
      var expectedPalindromes = [
        { c: 0.5, o: 1 },
        { c: 1.0, o: 1 },
        { c: 1.5, o: 1 },
        { c: 3.5, o: 1 },
        { c: 4.0, o: 1 },
        { c: 4.5, o: 2 },
        { c: 5.0, o: 1 },
        { c: 5.5, o: 1 }
      ];

      var allPalindromes = sut.findAllPalindromes('aaadddd');
      expect(allPalindromes).toEqual(expectedPalindromes);
    });
  });

  describe('testing a string', function() {
    it('does not test numbers', function() {
      var isPalindrome = sut.isPalindrome(111);
      expect(isPalindrome).toBe(false);
    });

    it('an empty string is not a palindrome', function() {
      var isPalindrome = sut.isPalindrome('');
      expect(isPalindrome).toBe(false);
    });

    it('a single character is not a palindrome', function() {
      var isPalindrome = sut.isPalindrome('a');
      expect(isPalindrome).toBe(false);
    });

    it('can detect a palindrome of length two', function() {
      var isPalindrome = sut.isPalindrome('aa');  
      expect(isPalindrome).toBe(true);
    });

    it('does not falsely identify a palindrome', function() {
      var isPalindrome = sut.isPalindrome('ab');  
      expect(isPalindrome).toBe(false);
    });

    describe('when the string has an odd number of characters', function() {
      it('can detect a palindrome', function() {
        var isPalindrome = sut.isPalindrome('fabcdcbaf');
        expect(isPalindrome).toBe(true);
      });

      it('does not falsely identify when the string differs in the middle', function() {
        var isPalindrome = sut.isPalindrome('fab2d1baf');
        expect(isPalindrome).toBe(false);
      });

      it('does not falsely identify when the string differs at the ends', function() {
        var isPalindrome = sut.isPalindrome('1abcdcba2');
        expect(isPalindrome).toBe(false);
      });
    });

    describe('when the string has an even number of characters', function() {
      it('can detect a palindrome', function() {
        var isPalindrome = sut.isPalindrome('abcdeedcba');
        expect(isPalindrome).toBe(true);
      });

      it('does not falsely identify when the string differs in the middle', function() {
        var isPalindrome = sut.isPalindrome('abcd1edcba');
        expect(isPalindrome).toBe(false);
      });

      it('does not falsely identify when the string differs at the end', function() {
        var isPalindrome = sut.isPalindrome('1bcdeedcb2');
        expect(isPalindrome).toBe(false);
      });
    });
  });
});
