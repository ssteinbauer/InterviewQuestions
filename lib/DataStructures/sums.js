const ListNode = require("./ListNode");

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

module.exports = addTwoNumbers;