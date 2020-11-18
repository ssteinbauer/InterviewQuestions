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

var twoSums = function(nums, target, distinctValues) {
    if (!distinctValues) {
        distinctValues = new Map();
        nums.forEach((x, i) => {
            if (!distinctValues.has(x)) {
                distinctValues.set(x, [i]);
            } else {
                distinctValues.get(x).push(i);
            }
        });
    }
    const usedAddends = new Set();
    const result = []
    if (target === -0) {
        target = 0;
    }
    for(let i = 0; i < nums.length - 1; i++) {
        const y = target - nums[i];
        if (usedAddends.has(nums[i]) || usedAddends.has(y)) {
            continue;
        }
        const addendIndex = distinctValues.get(y)?.filter(x => x !== i);
        if (addendIndex === undefined || addendIndex.length === 0) {
            continue;
        }
        result.push([i, addendIndex[0]]);
        usedAddends.add(nums[i]);
    }
    return result;
}

var threeSum = function(values) {
    const results = [];
    const sortedValues = values.sort((a, b) => a - b);
    const seenSums = new Set();
    const distinctValues = new Map();
    sortedValues.forEach((x, i) => {
        if (!distinctValues.has(x)) {
            distinctValues.set(x, [i]);
        } else {
            distinctValues.get(x).push(i);
        }
    });

    for(let i = 0; i < sortedValues.length - 2; i++) {
        if (seenSums.has(sortedValues[i])) {
            continue;
        }

        const remaining = sortedValues.slice(i + 1);
        var result = this.twoSums(remaining, -sortedValues[i])
        if (result.length > 0) {
            for (const r of result) {
                var sum = [sortedValues[i], remaining[r[0]], remaining[r[1]]].sort();
                seenSums.add(sortedValues[i])
                results.push(sum);
            }
        }
    }
    return results;
}

module.exports = {
    addTwoNumbers,
    rangeBitwiseAnd,
    twoSums,
    threeSum,
    sets
};