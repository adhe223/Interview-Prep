/**
 * Created by zaber on 6/7/2016.
 */
PetEnum = {
    Dog: 0,
    Cat: 1
}

function LinkedList() {
    this.head = null;
}

LinkedList.prototype = {
    constructor: LinkedList,
    push: function(val) {
        var node = {
            val: val,
            next: null
        };

        if (!this.head) {
            this.head = node;
        } else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }

        return node;    //Return the object reference
    }
}

function printLinkedList(head) {
    var str = "";
    while (head) {
        str += head.val + " ";
        head = head.next;
    }

    console.log(str);
}

function MinStack() {
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

    this.length = function() {
        return arr.length;
    }
}

function PetQ() {
    var id = 0;
    var dogQ = [];
    var catQ = [];

    this.enQ = function(pet) {
        var petNode = {
            petObject : pet,
            petID : id
        };

        switch (pet.petType) {
            case PetEnum.Cat:
                catQ.push(petNode);
                break;
            case PetEnum.Dog:
                dogQ.push(petNode);
                break;
        }
        id++;
    };

    this.deQAny = function() {
        if (dogQ.length === 0 && catQ.length === 0) {return null;}
        if (dogQ.length === 0) {return catQ.shift().petObject;}
        if (catQ.length === 0) {return dogQ.shift().petObject;}

        if (dogQ[0].petID < catQ[0].petID) {
            return dogQ.shift().petObject;
        } else {
            return catQ.shift().petObject;
        }
    };

    this.deQCat = function() {
        if (catQ.length === 0) {return null;}
        return catQ.shift().petObject;
    };

    this.deQDog = function() {
        if (dogQ.length === 0) {return null;}
        return dogQ.shift().petObject;
    };
}
function Pet(name, type) {
    this.name = name;
    this.petType = type
}

function MyQ () {
    this.oldStack = [];
    this.newStack = [];
}
MyQ.prototype = {
    constructor: MyQ,
    shiftElements: function() {
        if (this.oldStack.length === 0) {
            while (this.newStack.length > 0) {
                this.oldStack.push(this.newStack.pop());
            }
        }
    },
    push: function(val) {
        this.newStack.push(val);
    },
    pop: function() {
        this.shiftElements();
        return this.oldStack.pop();
    },
    peek: function() {
        this.shiftElements();
        if (this.oldStack.length > 0) {
            return this.oldStack[this.oldStack.length - 1];
        }
        return undefined;
    }
};

function TreeNode(val) {
    this.data = val;
    this.parent = null;
    this.left = null;
    this.right = null;
}
function GraphNode(val) {
    this.adjacent = [];
    this.data = val;
    this.visited = false;
}

function inOrder(root) {
    if (!root) {return;}
    inOrder(root.left);
    console.log(root.data);
    inOrder(root.right);
}
function preOrder(root) {
    if (!root) {return;}
    console.log(root.data);
    preOrder(root.left);
    preOrder(root.right);
}
function postOrder(root) {
    if (!root) {return;}
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.data);
}
function DFS(root) {
    if (!root) {return;}
    root.visited = true;
    for (var node in root.adjacent) {
        if (node.visited === false) {
            DFS(node);
        }
    }
}
function BFS(root) {
    if (!root) {return;}
    root.visited = true;
    var q = [];
    var current;
    q.push(root);

    while(q.length > 0) {
        current = q.shift();
        for (var node in current.adjacent) {
            if (node.visited === false) {
                node.visited = true;
                q.push(node);
            }
        }
    }
}

function inheritPrototype(child, parent) {
    var parentCopy = Object.create(parent.prototype);
    parentCopy.constructor = child;
    child.prototype = parentCopy;
}

function Q() {
    this._left = [];
    this._right = [];
}
Q.prototype.push = function(val) {
    this._left.push(val);
};
Q.prototype.pop = function() {
    if (this._right.length === 0) {
        this._shiftElements();
    }
    return this._right.pop();
};
Q.prototype.count = function() {
  return this._left.length + this._right.length;
};
Q.prototype._shiftElements = function() {
    while (this._left.length > 0) {
        this._right.push(this._left.pop());
    }
};