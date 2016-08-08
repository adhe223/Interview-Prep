function StackArr() {
    var backingArr = [];

    this.getBackingArr = function() {
        return backingArr;
    }
}

StackArr.prototype = {
    constructor: StackArr,
    push: function(num) {
        var backingArr = this.getBackingArr();
        backingArr[backingArr.length] = num;
    },
    pop: function() {
        var backingArr = this.getBackingArr();
        if (backingArr.length === 0) { return null; }
        return backingArr.splice(backingArr.length - 1, 1)[0];
    }
};

function clockAngle(minute, hour) {
    var minuteAngle = 360 * (minute / 60);
    var hourAngle = 360 * (hour / 12) + 360 * (minute / 60) * (1/12);   //The hour hand depends on the placement of the minute hand as well

    if (hourAngle >= minuteAngle) {
        return Math.abs(hourAngle - minuteAngle);
    }
}

function TreeNode2(val) {
    this.left = null;
    this.right = null
    this.data = val;
}

function treeifyEntry(str) {
    var head = treeify(str, 0, str.length - 1);

    var lists = [];
    createLevelEntryList(head, lists, 0);

    printLeveledList(lists);
}

function treeify(str, start, end) {
    if (end < start) {
        return null
    }

    var mid = Math.floor((start + end)/2);
    var node = new TreeNode2(str.charAt(mid));
    node.left = treeify(str, start, mid - 1);
    node.right = treeify(str, mid + 1, end);
    return node;
}

function createLevelEntryList (head, lists, level) {
    if (level === lists.length) {
        lists.push([]);
    }
    lists[level].push(head.data);

    if (head.left) {
        createLevelEntryList(head.left, lists, level + 1);
    }
    if (head.right) {
        createLevelEntryList(head.right, lists, level + 1);
    }
}

function printLeveledList(list) {
    var str = "";

    for (var i = 0; i < list.length; i++) {
        for (var j = 0; j < list[i].length; j++) {
            str += list[i][j];
        }
        str += '\n';
    }

    console.log(str);
}

function BinarySearch(arr, value, start, end) {
    if (low > high) {return null;}

    var mid = Math.floor((start + end)/2);
    if (arr[mid] === value) {
        return mid;
    } else if (arr[mid] < value) {
        return BinarySearch(arr, value, mid + 1, end);
    } else {
        return BinarySearch(arr, value, start, mid - 1);
    }
}

function Fibber(n) {
    this.cache = {};
}
Fibber.prototype.fib = function(n) {
    if (n === 0 || n === 1) {
        return n;
    }

    if (this.cache.hasOwnProperty(n)) {
        return this.cache[n];
    }

    var result = this.fib(n - 1) + this.fib(n - 2);

    this.cache[n] = result;

    return result;
};

function getOverlap(rect1, rect2) {
    var xCoords1 = [];
    var yCoords1 = [];

    for (var i = rect1.leftX; i <= rect1.width + rect1.leftX; i++) {
        xCoords1[i] = false;
    }
    for (var i = rect1.bottomY; i <= rect1.height + rect1.bottomY; i++) {
        yCoords1[i] = false;
    }

    //flip elements that intersect
    var xIntCount = 0;
    var yIntCount = 0;
    for (var i = rect2.leftX; i < rect2.width + rect2.leftX; i++) {
        if (xCoords1[i] !== undefined) {
            xIntCount++;
        }
    }
    for (var i = rect2.bottomY; i < rect2.height + rect2.bottomY; i++) {
        if (yCoords1[i] !== undefined) {
            yIntCount++;
        }
    }

    return xIntCount * yIntCount;
}
function overlapTest() {
    var rect1 = {
        leftX: 1,
        bottomY: 5,
        width: 10,
        height: 4
    };
    var rect2 = {
        leftX: 5,
        bottomY: 5,
        width: 10,
        height: 1
    };

    console.log(getOverlap(rect1, rect2));
}


