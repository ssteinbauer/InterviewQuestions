'use strict';

var should = require('chai').should();
var expect = require('chai').expect;
var sut = require('../app/palindromeFinder.js');

describe('palindrome finder', function() {

	describe('finding all palindromes', function() {
		
		it('finds two character palindrome in [aab]', function() {
			var expectedPalindromes = [{ c: 0.5, o: 1 }];

			var allPalindromess = sut.findAllPalindromes('aab');
			expect(allPalindromess).to.deep.equal(expectedPalindromes);
		});	

		it('finds two character palindrome in [baa]', function() {
			var expectedPalindromes = [{ c: 1.5, o: 1 }];

			var allPalindromess = sut.findAllPalindromes('baa');
			expect(allPalindromess).to.deep.equal(expectedPalindromes);
		});

		it('finds two character palindrome in [baad]', function() {
			var expectedPalindromes = [{ c: 1.5, o: 1 }];

			var allPalindromess = sut.findAllPalindromes('baad');
			expect(allPalindromess).to.deep.equal(expectedPalindromes);
		});

		it('find a trivial palindrome in [bab]', function() {
			var expectedPalindromes = [{ c: 1, o: 1 }];

			var allPalindromess = sut.findAllPalindromes('bab');
			expect(allPalindromess).to.deep.equal(expectedPalindromes);
		});

		it('only returns maximum palindrome [abcdedcba]', function() {
			var expectedPalindromess = [
				{ c: 4, o: 4 }
			];

			var allPalindromess = sut.findAllPalindromes('abcdedcba');
			expect(allPalindromess).to.deep.equal(expectedPalindromess);
		});	
	
		it('finds all palindromes in [xbaaby]', function() {
			var expectedPalindromess = [
				{ c: 2.5, o: 2 }
			];

			var allPalindromess = sut.findAllPalindromes('xbaaby');
			expect(allPalindromess).to.deep.equal(expectedPalindromess);
		});
		
		it('finds all palindromes in [aaddd]', function() {
			var expectedPalindromess = [
				{ c: 0.5, o: 1 },
				{ c: 1.0, o: 1 },
				{ c: 1.5, o: 1 },
				{ c: 3.5, o: 1 },
				{ c: 4.0, o: 1 },
				{ c: 4.5, o: 2 },
				{ c: 5.0, o: 1 },
				{ c: 5.5, o: 1 }
			];
			
			var allPalindromess = sut.findAllPalindromes('aaadddd');
			expect(allPalindromess).to.deep.equal(expectedPalindromess);
		});

	});
	
	describe('testing a string', function() {
		
		it('does not test numbers', function() {
			var isPalindrome = sut.isPalindrome(111);
			isPalindrome.should.equal(false);
		});

		it('an empty string is not a palindrome', function() {
			var isPalindrome = sut.isPalindrome('');
			isPalindrome.should.equal(false);
		});

		it('a single character is not a palindrome', function() {
			var isPalindrome = sut.isPalindrome('a');
			isPalindrome.should.equal(false);
		});

		it('can detect a palindrome of length two', function() {
			var isPalindrome = sut.isPalindrome('aa');	
			isPalindrome.should.equal(true);
		});

		it('does not falsely identify a palindrome', function() {
			var isPalindrome = sut.isPalindrome('ab');	
			isPalindrome.should.equal(false);
		});

		describe('when the string has an odd number of characters', function() {

			it('can detect a palindrome', function() {
				var isPalindrome = sut.isPalindrome('fabcdcbaf');
				isPalindrome.should.equal(true);
			});
			
			it('does not falsely identify when the string differs in the middle', function() {
				var isPalindrome = sut.isPalindrome('fab2d1baf');
				isPalindrome.should.equal(false);
			});

			it('does not falsely identify when the string differs at the ends', function() {
				var isPalindrome = sut.isPalindrome('1abcdcba2');
				isPalindrome.should.equal(false);
			});

		});

		describe('when the string has an even number of characters', function() {
		
			it('can detect a palindrome', function() {
				var isPalindrome = sut.isPalindrome('abcdeedcba');
				isPalindrome.should.equal(true);
			});

			it('does not falsely identify when the string differs in the middle', function() {
				var isPalindrome = sut.isPalindrome('abcd1edcba');
				isPalindrome.should.equal(false);
			});

			it('does not falsely identify when the string differs at the end', function() {
				var isPalindrome = sut.isPalindrome('1bcdeedcb2');
				isPalindrome.should.equal(false);
			});

		});

	});
	
});
