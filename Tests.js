function displayTest() {
    document.getElementById("result").innerHTML = testEngine();
}
function testEngine() {
    return eleven_sevenTest();
}
$(document).ready(function () {
    displayTest();
});

function one_oneTest() {
    if (one_one("hello")) {return false;}
    if (!one_one("")) {return false;}
    if (!one_one("mac")) {return false;}
    return true;
}

function one_threeTest() {
    if (!one_three("hello","lehlo")) {return false;}
    if (!one_three("abc","cba")) {return false;}
    if (one_three("baba","ba")) {return false;}
    return true;
}

function one_sevenTest() {
    var matrix = [
        [3,7,2,8],
        [2,9,0,1],
        [0,0,1,2]
    ];
    displayMatrix(matrix);
    displayMatrix(one_seven(matrix));
}
function displayMatrix(matrix) {
    var displayString = "";
    for(var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            displayString += matrix[i][j];
        }
        displayString += "\n";
    }

    console.log(displayString);
}

function two_oneTest() {
    var ll = new LinkedList();
    ll.push("2");
    ll.push("1");
    ll.push("3");
    ll.push("3");
    ll.push("4");
    ll.push("1");

    two_one(ll.head);
    printLinkedList(ll.head);
}

function two_twoTest() {
    var ll = new LinkedList();
    ll.push("2");
    ll.push("1");
    ll.push("3");
    ll.push("3");
    ll.push("4");
    ll.push("1");

    return two_two(ll.head, 2).val;
}

function two_threeTest() {
    var ll = new LinkedList();
    ll.push("2");
    ll.push("1");
    ll.push("3");
    ll.push("3");
    ll.push("4");
    ll.push("1");

    two_three(ll.head.next);
    printLinkedList(ll.head);
}

function two_fourTest() {
    var ll = new LinkedList();
    ll.push("2");
    ll.push("1");
    ll.push("3");
    ll.push("3");
    ll.push("4");
    ll.push("1");
    printLinkedList(ll.head);
    printLinkedList(two_four(ll.head, 3).head);
}

function two_fiveTest() {
    //19
    var llone = new LinkedList();
    llone.push("9");
    llone.push("1");

    //123
    var lltwo = new LinkedList();
    lltwo.push("3");
    lltwo.push("2");
    lltwo.push("1");
    
    var sum = two_five(llone.head, lltwo.head);
    printLinkedList(sum.head);  //142
}

function two_sevenTest() {
    var ll = new LinkedList();
    ll.push("l");
    ll.push("e");
    ll.push("e");
    ll.push("l");
    var truth = two_seven(ll.head);
    if (!truth) {return false;}

    var ll = new LinkedList();
    ll.push("h");
    ll.push("e");
    ll.push("l");
    ll.push("z");
    ll.push("l");
    truth = two_seven(ll.head);
    if (truth) {return false;}

    return true;
}

function TestTree() {
    var head = new TreeNode(6);
    head.parent = null;
    head.left = new TreeNode(4);
    head.left.parent = head;
    head.left.left = new TreeNode(3);
    head.left.left.parent = head.left;
    head.left.right = new TreeNode(5);
    head.left.right.parent = head.left;

    head.right = new TreeNode(9);
    head.right.parent = head;
    head.right.left = new TreeNode(8);
    head.right.left.parent = head.right;

    return head;
}
function TestGraph() {
    var one = new GraphNode(1);
    var two = new GraphNode(2);
    var three = new GraphNode(3);
    var four = new GraphNode(4);
    var five = new GraphNode(5);
    var six = new GraphNode(6);
    var seven = new GraphNode(7);
    var eight = new GraphNode(8);
    var nine = new GraphNode(9);

    two.adjacent.push(eight);
    two.adjacent.push(nine);

    four.adjacent.push(seven);
    four.adjacent.push(six);

    three.adjacent.push(four);
    three.adjacent.push(five);

    one.adjacent.push(two);
    one.adjacent.push(three);

    return one;
}

function four_oneTest() {
    return four_one_isBalanced(TestTree());
}

function four_twoTest() {
    var start = TestGraph();
    var six = new GraphNode(6);
    var ten = new GraphNode(10);

    var test = four_two(start, six);
    if (!test) {return false;}

    test = four_two(start, ten);
    if (test) {return false;}

    return true;
}

function four_threeTest() {
    var arr = [0,1,2,3,4,5,6,7];
    var head = createMinimalBSTEntry(arr);
}

function four_fourTest() {
    //four_fourEntry(TestTree());
    var results = createLeveledList(TestTree());
    debugger;
}

function four_fiveTest() {
    return four_fiveFixed(TestTree());
}

function four_sixTest() {
    var head = TestTree();
    var next = four_six(head);
    return next.data;
}

function callCenterTest() {
    var cc = new CallCenter();
    cc.addEmployee(new Employee("R1", EmployeeRole.RESPONDENT));
    cc.addEmployee(new Employee("R2", EmployeeRole.RESPONDENT));
    cc.addEmployee(new Employee("M1", EmployeeRole.MANAGER));
    cc.addEmployee(new Employee("D1", EmployeeRole.DIRECTOR));

    cc.dispatchCall(new Call("Call1"));
    cc.dispatchCall(new Call("Call2"));
    cc.dispatchCall(new Call("Call3"));
    cc.dispatchCall(new Call("Call4"));
    cc.dispatchCall(new Call("Call5"));
}

function nine_oneTest(n) {
    stepWays = 0;
    nine_one(n);
    return stepWays;
}

function nine_twoTest(x, y) {
    return nine_two(0, 0, x, y);
}

function nine_threeTest() {
    var arr = [1, 1.1, 1.2, 1.3, 4, 6, 7, 8];
    return nine_three(arr);
}

function eleven_oneTest() {
    var a = [0,4,7,9,,,,,];
    var b = [1,5,8,10];
    console.log(eleven_one(a, 3, b, 3));
}

function eleven_twoTest() {
    var a = ["abb", "bab", "a", "zzzzz"];
    console.log(eleven_two(a));
}

function eleven_sixTest() {
    var col0 = [15,20,30,40];
    var col1 = [20,35,55,80];
    var col2 = [40,80,95,100];
    var col3 = [85,95,105,120];
    var arr = [];
    arr.push(col0);
    arr.push(col1);
    arr.push(col2);
    arr.push(col3);

    console.log(eleven_six(arr, 55));
}

function eleven_sevenTest() {
    var circus = [];
    circus.push({weight: 120, height: 70});
    circus.push({weight: 110, height: 65});
    circus.push({weight: 150, height: 85});

    return eleven_sevenEntry(circus);
}
