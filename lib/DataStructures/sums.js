const ListNode = require("./ListNode");

var findMSB = function(x) {
    var pos = -1;
    for(let i = 0; i < 32; i++){
        if(x & 1 <<i)
            pos = i;
    }
    parseInt(x, )
    return pos;
}

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

var sum = function(l1, l2, carry) {

    if (!l1 && !l2) {
        return carry === 1
            ? new ListNode(1, null)
            : null;
    }

    let val = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
    const c = val > 9 ? 1 : 0;
    val = val > 9 ? val - 10 : val;

    return new ListNode(val, sum(l1?.next, l2?.next, c))
}

var addTwoNumbers = function(l1, l2) {
    return sum(l1, l2, 0)
};

module.exports = {
    addTwoNumbers,
    rangeBitwiseAnd,
    findMSB
};