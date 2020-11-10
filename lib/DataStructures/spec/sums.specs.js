const ListNode = require("../ListNode");

describe('linked list sum', function() {
  var addTwoNumbers = require("../sums");

  describe('summing when only one list is defined', function() {
      it('then the sum is the same as the defined list', function() {
        const l1 = new ListNode(1, new ListNode(2, new ListNode(3)));
        const l2 =null;

        var sum = addTwoNumbers(l1, l2);
        expect(sum.val).toBe(1);
        expect(sum.next.val).toBe(2);
        expect(sum.next.next.val).toBe(3);
        expect(sum.next.next.next).toBe(null);
      });
    });

    describe('summing two lists of the same size with no carry', function() {
      it('returns the expected sum', function() {
        const l1 = new ListNode(1, new ListNode(2, new ListNode(3)));
        const l2 =new ListNode(1, new ListNode(2, new ListNode(3)));

        var sum = addTwoNumbers(l1, l2);
        expect(sum.val).toBe(2);
        expect(sum.next.val).toBe(4);
        expect(sum.next.next.val).toBe(6);
        expect(sum.next.next.next).toBe(null);
      });
    });

    describe('summing two lists of the same size with carry', function() {
      it('returns the expected sum', function() {
        const l1 = new ListNode(1, new ListNode(8, new ListNode(3)));
        const l2 =new ListNode(1, new ListNode(8, new ListNode(3)));

        var sum = addTwoNumbers(l1, l2);
        expect(sum.val).toBe(2);
        expect(sum.next.val).toBe(6);
        expect(sum.next.next.val).toBe(7);
        expect(sum.next.next.next).toBe(null);
      });
    });

    describe('summing two lists of different sizes', function() {
      it('returns the expected sum', function() {
        const l1 = new ListNode(1, new ListNode(8, new ListNode(3, new ListNode(4))));
        const l2 =new ListNode(1, new ListNode(8, new ListNode(3)));

        var sum = addTwoNumbers(l1, l2);
        expect(sum.val).toBe(2);
        expect(sum.next.val).toBe(6);
        expect(sum.next.next.val).toBe(7);
        expect(sum.next.next.next.val).toBe(4);
      });
    });

    describe('summing two lists of different sizes with carry in the last position', function() {
      it('returns the expected sum', function() {
        const l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));
        const l2 =new ListNode(9, new ListNode(9, new ListNode(9)));

        var sum = addTwoNumbers(l1, l2);
        expect(sum.val).toBe(8);
        expect(sum.next.val).toBe(9);
        expect(sum.next.next.val).toBe(9);
        expect(sum.next.next.next.val).toBe(0);
        expect(sum.next.next.next.next.val).toBe(1);
      });
    });
});
