var perceptum = perceptum || {};

perceptum.dynamicProgramming = (function() {

	var max = function(a, b) {
		return (a >= b) ? a : b;
	};

	return {

		largestContiguousSum: function(input) {
			var	maxSum = 0,
				currentSum = 0;

			for (var i = 0; i < input.length; i++) {
				currentSum = max(0, currentSum + input[i]);
				maxSum = max(currentSum, maxSum);			
			}
			
			return maxSum;
		},

		longestIncreasingSequence: function(input) { 
			var result = { startIndex: 0, length: 1 },
				currentIndex = 0,
				currentLength = 1;

			if (input.length === 1) {
				return result;
			}

			for(var i = 1; i < input.length; i++) {
				if (input[i] >= input[i-1]) {
					currentLength++;
					if (currentLength > result.length) {
						result.length = currentLength;
						result.startIndex = currentIndex;
					}
				} else {
					currentIndex = i;
					currentLength = 1;
				}
			}			

			return result;
		},

		badNeighbor: function(donations) {
			// [1, 3, 4, 5, 7] => [4, 7] => 11
		}
	};

})();
