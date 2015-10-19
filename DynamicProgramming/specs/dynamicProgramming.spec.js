describe('interview prep', function() {
 	
	var dp;
    	
	beforeEach(function() {
      	dp = perceptum.dynamicProgramming;
    });

	describe('largestContiguousSum', function() {
			it('one item array should have sum of only item in array', function() {
				var sum = dp.largestContiguousSum([1]);
				expect(sum).toBe(1); 	
			});

			it('should sum to items in array if all items are positive', function() {
				var sum = dp.largestContiguousSum([1, 2, 3, 4]);
				expect(sum).toBe(10); 	
			});

			it('if last number is negative, should not be included in sum', function() {
				var sum = dp.largestContiguousSum([2, -1]);
				expect(sum).toBe(2); 	
			});

			it('if last number is negative, should not be included in sum', function() {
				var sum = dp.largestContiguousSum([4, -1, -2, 5, -1]);
				expect(sum).toBe(6);
			});

			it('if first number is negative, should not be included in sum', function() {
				var sum = dp.largestContiguousSum([-1, 3]);
				expect(sum).toBe(3); 	
			});
	});

	describe('longestIncreasingSequence', function() {
		it('one item array should return {startIndex: 0, length: 1}', function() {
			var result = dp.longestIncreasingSequence([1]);
			expect(result.startIndex).toBe(0);
			expect(result.length).toBe(1); 		
		});

		it('ascending, multiple item array returns {startIndex: 0, length: input.length}', function() {
			var result = dp.longestIncreasingSequence([1, 2, 3, 4]);

			expect(result.startIndex).toBe(0);
			expect(result.length).toBe([1, 2, 3, 4].length);
		});
		
		it('descending value array returns startIndex: 0, length: 1', function() {
			var result = dp.longestIncreasingSequence([3, 2, 1]);

			expect(result.startIndex).toBe(0);
			expect(result.length).toBe(1);
		});

		it('ascending, multiple item array ending with descendig value does not include descending value in length', function(){
			var result = dp.longestIncreasingSequence([1, 2, 1]);

			expect(result.startIndex).toBe(0);
			expect(result.length).toBe(2);
		});   

		it('finds longest ascending sequence even if not at start of array', function(){
			var result = dp.longestIncreasingSequence([1, 2, 1, 2, 3]);

			expect(result.startIndex).toBe(2);
			expect(result.length).toBe(3);
		});

		it('finds longest ascending sequence even if not at start of array, with descending values at end', function(){
			var result = dp.longestIncreasingSequence([1, 2, 1, 2, 3, 1, 2, 1, 7]);

			expect(result.startIndex).toBe(2);
			expect(result.length).toBe(3);
		}); 
	});
});
