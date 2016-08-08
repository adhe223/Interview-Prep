function one_one(str){
    var dict = {};
    for (var i = 0; i < str.length; i++) {
        if (dict[str.charAt(i)] !== undefined) {
            return false;
        } else {
            dict[str.charAt(i)] = true;
        }
    }
    return true;
}

function one_two(str) {
    var strCopy = "";
    for (var i = str.length - 1; i >= 0; i--) {
        strCopy = strCopy + str.charAt(i);
    }
    return strCopy;
}

function one_three(str1, str2) {
    if (str1.length !== str2.length) {return false;}
    if (str1 === str2) {return true;}

    //Load the object with all the characters
    var dict ={};
    for (var i = 0; i < str1.length; i++) {
        var char = str1.charAt(i);
        if (dict[char] === undefined) {
            dict[str1.charAt(i)] = 1;
        } else {
            dict[str1.charAt(i)]++;
        }
    }

    //Pop the characters from the object as we go
    for (var i = 0; i < str2.length; i++) {
        var char = str2.charAt(i);
        if (dict[char] === undefined) {
            return false;
        } else if (dict[char] === 1) {
            delete dict[char];
        } else {
            dict[str2.charAt(i)]--;
        }
    }

    //If the object is empty then the strings had the same characters
    if (Object.getOwnPropertyNames(dict).length !== 0) {
        return false
    }
    return true;
}

function one_five(str) {
    var lastChar = str.charAt(0);
    var length = 1;
    var result = "";

    for (var i = 1; i < str.length; i++) {
        var char = str.charAt(i);
        if (char !== lastChar) {
            result += lastChar + length;

            //Reset
            length = 1;
        } else {
            length++;
        }
        lastChar = char;
    }

    //Append the remaining chars
    result += lastChar + length;

    if (result.length >= str.length) {
        return str;
    } else {
        return result
    }
}

function one_seven(matrix) {
    var zeroCols = [];
    var zeroRows = [];

    //Create the bitmaps for what is zeroed out
    for (var row = 0; row < matrix.length; row++) {
        for (var col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === 0) {
                zeroRows[row] = 1;
                zeroCols[col] = 1;
            }
        }
    }

    //Create the return array
    for (var row = 0; row < matrix.length; row++) {
        for (var col = 0; col < matrix[row].length; col++) {
            if (zeroRows[row] !== undefined || zeroCols[col] !== undefined) {
                matrix[row][col] = 0;
            }
        }
    }

    return matrix;
}

function two_one(head) {
    if (!head) { return; }

    var arr = [];
    var current = head;
    arr[current.val] = true;

    while (current.next !== null) {
        if (arr[current.next.val] === undefined) {
            arr[current.next.val] = true;
        } else {
            //We need to remove the next node
            current.next = current.next.next;   //current.next is defined, so at worst current.next.next is null
        }

        if (current.next === null) {
            //In case the tail was a duplicate and we removed it, now the next node is null
            break;
        } else {
            current = current.next;
        }
    }
}

function two_two(head, k) {
    if (!head) { return null; }
    var slow = head;
    var fast = head;

    //Advance the fast pointer to the starting position
    for (var i = 0; i < k; i++) {
        if (fast.next) {
            fast = fast.next;
        } else {
            // If we can't even advance k elments then there is no kth element
            return null;
        }
    }

    //Now advance each pointer simultaneously until the fast pointer is null. Then the slow pointer is the kth element.
    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
}

function two_three(node) {
    //If the next node is null then this is the tail, we can't delete it
    if (!node || !node.next) {
        return false;
    }
    node.val = node.next.val;
    node.next = node.next.next;
    return true;
}

function two_four(head, partition) {
    if (!head) {return null;}

    var low = new LinkedList();
    var lowTail = null;
    var high = new LinkedList();
    var node = head;

    while (node !== null) {
        if (node.val < partition) {
            var lowTail = low.push(node.val);
        } else {
            high.push(node.val);
        }
        node = node.next;
    }

    //Now connect the two
    if (lowTail !== null) {
        lowTail.next = high.head;
        return low;
    } else {
        return high;
    }
}

function two_five(head1, head2) {
    var carry = false;
    var onesPlace = 0;
    var sum = 0;
    var totalArr = [];

    // Keep going until both the digits are null
    while (head1 || head2) {
        var value1 = head1 ? parseInt(head1.val, 10) : 0;
        var value2 = head2 ? parseInt(head2.val, 10) : 0;

        //Add the two numbers
        sum = value1 + value2;
        if (carry) {
            sum++;
        }

        //Decide if there is a carry
        if (sum > 9) {
            carry = true;
            onesPlace = sum % 10;
        } else {
            carry = false;
            onesPlace = sum;
        }

        totalArr.push(onesPlace);
        head1 = head1 ? head1.next : null;
        head2 = head2 ? head2.next : null;
    }

    return arrayToLinkedList(totalArr);
}
function arrayToLinkedList(arr) {
    var ll = new LinkedList();
    for (var i = 0; i < arr.length; i++) {
        ll.push(arr[i]);
    }
    return ll;
}

function two_seven(head) {
    if (!head) {return true;}

    var fast = head;
    var slow = head;
    var even = false;
    var firstHalf = [];

    //Advance a runner to the middle of the linked list
    while (fast && fast.next) {
        firstHalf.push(slow.val);
        slow = slow.next;
        fast = fast.next.next;
    }
    even = fast ? false : true; //Even or odd number of elements?

    //Now the slow pointer is in the middle. If it's odd we advance it one.
    if (!even) {
        slow = slow.next;
    }

    //Now compare the buffer elements with the lsit elements as we go
    while (slow) {
        if (slow.val !== firstHalf.pop()) { return false; }
        slow = slow.next;
    }

    return true;
}

function three_two() {
    var arr = [];
    var min = Number.MAX_VALUE;

    this.push = function(val) {
        var stackNode = {
            val : val,
            min : min   //The min before this item was pushed
        };
        if (val < min) { min = val; }

        arr.push(stackNode);
    };

    this.pop = function() {
        if (arr.length === 0) {return null;}

        var toPop = arr[arr.length - 1];
        if (min === toPop.val) {
            min = toPop.min;
        }
        return arr.pop().val;
    };

    this.getMin = function() {
        if (min < Number.MAX_VALUE) {
            return min;
        } else {
            return null;
        }
    };
}

function SetOfStacks(limit) {
    var stackArr = [];
    var max = limit;

    this.push = function(val) {
        if (stackArr.length === 0) {
            stackArr.push(new MinStack());
        }
        
        if (stackArr[stackArr.length - 1].length() >= max) {
            stackArr.push(new MinStack());
        }
        stackArr[stackArr.length - 1].push(val);
    }

    this.pop = function() {
        if (stackArr.length === 0) {
            return null;
        }
        var retVal = stackArr[stackArr.length - 1].pop();

        //Check if we need to remove a stack
        if (stackArr[stackArr.length - 1].length() === 0) {
            stackArr.pop();
        }
        return retVal;
    }

    this.length = function() {
        var sum = 0;
        for (var i = 0; i < stackArr.length; i++) {
            sum += stackArr[i].length();
        }
        return sum;
    }
}

//Review
function three_six(stack) {
    if (stack.length === 0) {return stack;}
    sorted = [];
    temp = stack.pop();
    sorted.push(temp);

    while (stack.length > 0) {
        temp = stack.pop();
        while (sorted.length > 0 && sorted[sorted.length - 1] > temp) {
            stack.push(sorted.pop());
        }
        sorted.push(temp);
    }

    return sorted;
}

function four_one_getHeight(root) {
    if (!root) {return 0;}
    var left = four_one_getHeight(root.left);
    var right = four_one_getHeight(root.right);
    return Math.max(left, right) + 1; //+1 for self
}
function four_one_checkHeight(root) {
    if (!root) {return 0;}

    var left = four_one_checkHeight(root.left);
    if (left === -1) {
        return -1;
    }

    var right = four_one_checkHeight(root.right);
    if (right === -1) {
        return -1;
    }

    if (Math.abs(left - right) > 1) {
        return -1;
    } else {
        return Math.max(left, right) + 1;
    }
}

function four_one_isBalanced(root) {
    if (four_one_checkHeight(root) === -1) {
        return false;
    } else {
        return true;
    }
}

function four_two(start, destination) {
    if (start === destination) {return true;}   //Does null === null? undefined === undefined?
    if (!start || !destination) {return false;}

    // Just a BFS that checks if a node is the destination
    var q = [];
    var curr;
    start.visited = true;
    q.push(start);

    while(q.length > 0) {
        curr = q.shift();
        for (var i = 0; i < curr.adjacent.length; i++) {
            var node = curr.adjacent[i];
            if (!node.visited) {
                if (node.data === destination.data) {
                    return true;
                }
                node.visited = true;
                q.push(node);
            }
        }
    }

    return false;
}

function four_three_splitArr(arr, node) {
    if (arr.length === 0) {return;}
    if (arr.length === 1) {return addNode(node, arr[0]);}

    var mid;
    if (arr.length % 2 === 0) {
        mid = arr.length/2 - 1;
    } else {
        mid = Math.floor(arr.length/2);
    }

    var node;
    if (!node) {
        node = new TreeNode(arr[mid]);
    } else {
        node = addNode(node,arr[mid]);
    }

    var leftArr = arr.slice(0, mid);
    var rightArr = arr.slice(mid + 1);

    four_three_splitArr(leftArr, node);
    four_three_splitArr(rightArr, node);
    return node;
}
function addNode(base, toAdd) {
    var newNode = new TreeNode(toAdd);
    if (toAdd < base.data) {
        base.left = newNode;
    } else {
        base.right = newNode;
    }

    return newNode;
}
function createMinimalBST(arr, start, end) {
    if (end < start) {
        return null;
    }
    var mid = Math.floor((start + end) / 2);
    var node = new TreeNode(arr[mid]);
    node.left = createMinimalBST(arr, start, mid - 1);
    node.right = createMinimalBST(arr, mid + 1, end);
    return node;
}
function createMinimalBSTEntry(arr) {
    return createMinimalBST(arr, 0, arr.length - 1);
}

function four_fourEntry(root) {
    lists = [];
    four_four(root, lists, 0);
}
function four_four(root, lists, level) {
    if (!root) {return;}    //base case

    //DFS so we travers the level in order
    var list;
    if (lists.length === level) {
        list = new LinkedList();
        lists.push(list);
    }
    lists[level].push(root.data);

    four_four(root.left, lists, level + 1);
    four_four(root.right, lists, level + 1);
}


//This is actually wrong because a right node on the left side of the tree could be larger than the head
//This algorithm checks as we go down the tree, but has no perspective once our recursives return.
function four_five(root) {
    if (!root) {return true;}

    //Check if the tree meets the conditions
    if (root.left && root.left.data >= root.data) {
        return false;
    }
    if (root.right && root.right.data < root.data) {
        return false;
    }

    if (!four_five(root.left)) {return false;}
    if (!four_five(root.right)) {return false;}
    return true;
}

lastNumber = Number.MIN_VALUE;
function four_fiveFixed(root) {
    if (!root) {return true;}

    if (!four_fiveFixed(root.left)) {return false;}
    if (root.data <= lastNumber) {return false;}
    lastNumber = root.data;
    if (!four_fiveFixed(root.right)) {return false;}
    return true;
}

//This might not be perfect in the scenario that n is a right child
function four_six(root) {
    if (!root) {return null;}
    if (!root.parent) {
        if (!root.right) {return null;}
    } else {
        if (root.parent.data > root.data) {
            //On the left
            if (!root.right) {
                return root.parent;
            }
        } else {
            //On the right
            if (!root.right) {
                return null;
            }
        }
    }

    return leftMost(root.right);
}
function leftMost(root) {
    if (!root) {return null;}

    var retVal = leftMost(root.left);
    if (!retVal) {
        //We are at the next value, pass it up
        return root;
    } else {
        return retVal;  //Pass the node up the chain
    }
}

function four_eight(t1Root, t2Root) {
    if (!t1Root) {return false;}
    if (t1Root.data === t2Root.data) {
        return compareTrees(t1Root, t2Root);
    }
     return (four_eight(t1Root.left, t2Root) || four_eight(t1Root.right, t2Root));
}
function compareTrees(root1, root2) {
    if (!root1 && !root2) {return true;}
    if (!root1 || !root2) {return false;}
    if (root1.data !== root2.data) {return false;}

    return (compareTrees(root1.left, root2.left) && compareTrees(root1.right, root2.right));
}