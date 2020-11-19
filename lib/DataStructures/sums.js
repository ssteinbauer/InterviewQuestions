const ListNode = require("./ListNode");

function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let iterationCount = 0;
    if (start === end) {
        yield end;
        return iterationCount;
    }

    for (let i = start; i <= end; i += step) {
        iterationCount++;
        yield i;
    }
    return iterationCount;
}

var rangeBitwiseAnd = function(m, n){
    if (m === 0) {
        return 0;
    }

    let sum = m;
    for (const itItem of makeRangeIterator(m+1, n, 1)) {
        sum &= itItem;
        if (sum === 0) {
            return 0;
        }
    }
    return sum;
}

var linkedListsSum = function(l1, l2, carry) {

    if (!l1 && !l2) {
        return carry === 1
            ? new ListNode(1, null)
            : null;
    }

    let val = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
    const c = val > 9 ? 1 : 0;
    val = val > 9 ? val - 10 : val;

    return new ListNode(val, linkedListsSum(l1?.next, l2?.next, c))
}

var addTwoNumbers = function(l1, l2) {
    return linkedListsSum(l1, l2, 0)
};

var sets = function(size, values) {

    var set = function(x, y, z, values, result) {

        if ((z === values.length) || ( y === z) || (x === y)) {
            return;
        }

        result.push([values[x], values[y], values[z]].sort())

        set(x, y, z + 1, values, result);
        set(x, y + 1, z, values, result);
        set(x + 1, y, z, values, result);
    }

    // if (!Array.isArrayvalues) return [];
    const result = [];
    set(0, 1, 2, values, result);
    return result;
}

var twoSums = function(nums, target) {
    // assume nums is sorted
    const result = []
    if (target === -0) {
        target = 0;
    }

    let left = 0;
    let right = nums.length - 1;

    while (left < right)
    {
        const sum = nums[left] + nums[right];
        if (sum === target) {
            result.push([left++, right++]);
        } else if (sum < target) {
            while (nums[left] === nums[++left] && left < right);
            continue;
        } else {
            while (nums[right] === nums[--right] && right > left);
            continue;
        }
    }

    return result;
}

var threeSum = function(values) {
    const results = [];
    const sortedValues = values.sort((a, b) => a - b);

    let lastValue = undefined;
    for(let i = 0; i < sortedValues.length - 2; i++) {
        const value = sortedValues[i];
        if (value === lastValue) {
            continue;
        }

        const remaining = sortedValues.slice(i + 1);
        var result = this.twoSums(remaining, -value)
        if (result.length > 0) {
            for (const r of result) {
                var sum = [value, remaining[r[0]], remaining[r[1]]].sort();
                results.push(sum);
            }
        }
        lastValue = value;
    }
    return results;
}

var subarraySum = function(nums, k) {
    let count = 0;

    for(let i = 0; i < nums.length; i++) {
        let sum = nums[i];
        if (sum === k) {
            count++;
        }
        for(let j = i + 1; j < nums.length; j++) {
            sum += nums[j];
            if (sum === k) {
                count++;
            }
        }
    }

    return count;
};

module.exports = {
    addTwoNumbers,
    rangeBitwiseAnd,
    twoSums,
    threeSum,
    sets,
    subarraySum
};