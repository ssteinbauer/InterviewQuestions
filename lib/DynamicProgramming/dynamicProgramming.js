const dynamicProgramming = (function() {

  return {

    longestNonRepeatingSubstring: function(input) {
      if (!input) return 0;
      if (input === '') return 0;

      let maxLength = 0;
      let seenValuesIndex = new Map();
      let startOfWindow = 0;

      for (let endOfWindow = 0; endOfWindow < input.length; endOfWindow++) {
        const currentValue = input[endOfWindow];
        const lastSeenIndex = seenValuesIndex.get(currentValue);
        // if I have seen a value figure out if
        // the start of my current window is my current start
        // or the character after the last time I saw the value
        if (lastSeenIndex) {
          startOfWindow = Math.max(startOfWindow, lastSeenIndex);
        }

        maxLength = Math.max(maxLength, endOfWindow - startOfWindow + 1);
        seenValuesIndex.set(currentValue, endOfWindow + 1);
      }

      return maxLength;
    },

    largestContiguousSum: function(input) {
      var  maxSum = 0,
        currentSum = 0;

      for (var i = 0; i < input.length; i++) {
        currentSum = Math.max(0, currentSum + input[i]);
        maxSum = Math.max(currentSum, maxSum);
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
