const dynamicProgramming = (function() {

  var max = function(a, b) {
    return (a >= b) ? a : b;
  };

  return {

    longestSubstring: function(input) {
      if (!input) return 0;
      if (input === '') return 0;

      let seenValues = new Map();
      let length = 0;
      let maxLength = 0;
      for(var x = 0; x < input.length; x++){
        if (!seenValues.has(input[x])) {
          seenValues.set(input[x], x);
          length++;
          maxLength = Math.max(length, maxLength);
        } else {
          length = x - seenValues.get(input[x]);
          for (let [key, value] of seenValues.entries()) {
            if (value < seenValues.get(input[x])) {
              seenValues.delete(key);
            }
          }
          seenValues.set(input[x], x);
        }
      }

      return maxLength;
    },

    largestContiguousSum: function(input) {
      var  maxSum = 0,
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

module.exports = dynamicProgramming;
