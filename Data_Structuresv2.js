function checkHeight(root) {
    if (root === null) {return 0;}

    var leftHeight = checkHeight(root.left);
    if (leftHeight === -1) {return -1;}

    var rightHeight = checkHeight(root.right);
    if (rightHeight === -1) {return -1;}

    var diff = leftHeight - rightHeight;
    if (Math.abs(diff) > 1) {
        return -1;
    } else {
        return Math.max(leftHeight, rightHeight) + 1;
    }
}

function isBalanced(root) {
    if (checkHeight(root) === -1) {
        return false;
    } else {
        return true;
    }
}

function isRoute(start, destination) {
    if (start.data === destination.data) {return true;}
    var q = [];
    start.visited = true;
    q.push(start);

    while (q.length > 0) {
        node = q.shift();
        for (var i = 0; i < node.adjacent.length; i++) {
            node.adjacent[i].visited = true;
            if (node.adjacent[i].data === destination.data) {
                return true;
            }
            q.push(node);
        }
    }
}

function createLeveledList(root) {
    var current = [];
    var parents = [];
    var results = [];

    if (root !== null) {
        current.push(root);
    }
    
    while(current.length > 0) {
        parents = current;
        results.push(parents);
        current = [];

        for (var i = 0; i < parents.length; i++) {
            if (parents[i].left !== null) {
                current.push(parents[i].left);
            }
            if (parents[i].right !== null) {
                current.push(parents[i].right);
            }
        }
    }

    return results;
}