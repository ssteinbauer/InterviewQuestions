testPalindrome = function(value, center, length, offset) {
  var vLength = center % 1 === 0 ? (2*length) + 1: 2*length;

  if (vLength <= 1)
    return false;

  var o = vLength % 2 === 0 ? .5 : 0;

  for (var i = offset; i <= length; i++) {
    if (value[center + o - i] !== value[center - o + i]) {
      return false;
    }
  }

  return true;
};

exports.isPalindrome = function(value) {
  
  if (typeof value !== 'string') return false;
  if (value.length === 0) return false;
  if (value.length === 1) return false;

  // create a zero-index based midpoint
  var midpoint = (value.length - 1) / 2;
  var length = Math.ceil(midpoint); 
  return testPalindrome(value, midpoint, length, 0);
};

exports.findAllPalindromes = function(value) {

  if (typeof value !== 'string') return [];
  if (value.length === 0) return [];
  if (value.length === 1) return [];

  var palindromes = [];

  var newpalindrome = function(c, l) {
    return { c: c, o: l };
  };

  // increment by .5 so centers occur on characters and between characters
  for (var center = .5; center < value.length - 0.5; center = center + 0.5) {
    var j = 1, p = null;
    while (Math.ceil(center) - j >= 0 && Math.floor(center) + j <= value.length) {
      // start comparison at j since 0 to j - 1 has already been tested
      if (testPalindrome(value, center, j, j)) {
        p = newpalindrome(center, j); 
        j++;
      } else {
        break;
      }
    }
    if (p !== null) palindromes.push(p);  
  }

  return palindromes;
}
