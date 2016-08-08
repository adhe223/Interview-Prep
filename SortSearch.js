function eleven_one(a, lastA, b, lastB) {
    if (a.length === 0) {return b;}
    if (b.length === 0) {return a;}
    var aPoint = lastA;
    var bPoint = lastB;

    for (var i = a.length; i >= 1; i--) {
        if (aPoint < 0) {
            a[i - 1] = b[bPoint];
            bPoint--;
            continue;
        }

        if (a[aPoint] >= b[bPoint]) {
            a[i - 1] = a[aPoint];
            aPoint--;
        } else {
            a[i - 1] = b[bPoint];
            bPoint--;
        }
    }

    return a;
}

function eleven_two(arr) {
    var scores = {};

    //Iterate over the words and assign scores. Store in a new object
    for (var i = 0; i < arr.length; i++) {
        var word = arr[i];
        var score = wordScore(word);
        scores[word] = score;
    }

    //Now sort that object
    var sorted = Object.keys(scores).sort(function(a,b) { return scores[a]-scores[b]; });
    return sorted;
}
function wordScore(word) {
    var score = 0;
    for (var i = 0; i < word.length; i++) {
        score += word.charCodeAt(i);
    }
    return score;
}

function eleven_three(arr, index) {
    var pivot = getPivot(arr);
    if (pivot === -1) {return null;}

    return ((pivot + index) % arr.length);
}
function getPivot(arr) {
    if (arr.length === 0) {return -1;}

    //Check special case that the first element is the pivot
    if (arr[arr.length - 1] > arr[0]) {return 0;}

    //Cache the most recent val
    var lastVal = arr[0];

    //Find the element who's left neighbor is greater than their right
    for (var i = 1; i < arr.length; i++) {
        var currVal = arr[i];
        if (lastVal > currVal) {
            return i;
        }
        lastVal = arr[i];
    }
}

function eleven_six(arr, target) {
    var row = 0;
    var col = arr.length - 1;

    while (row < arr.length && col >= 0) {
        if (arr[col][row] === target) {return col + "_" + row;}

        if (arr[col][row] > target) {
            col--;
        } else {
            row++;
        }
    }
}

var MAX_COUNT = 0;
function eleven_sevenEntry(circusMembers) {
    var lowestIndex = getLargestMemberIndex(circusMembers);
    var member = circusMembers[lowestIndex];
    var count = 1;
    circusMembers.splice(lowestIndex, 1);

    eleven_seven(member, circusMembers, count);
    return MAX_COUNT;
}
function eleven_seven(member, circusMembers, count) {
    if (circusMembers.length === 0) {return;}

    for (var i = 0; i < circusMembers.length; i++) {
        //If a member is strictly smaller then add them and recursively call
        if (circusMembers[i].weight <= member.weight && circusMembers[i].height <= member.height) {
            member = circusMembers[i];
            var remainingMembers = circusMembers.slice();
            remainingMembers.splice(i, 1);
            var newCount = count + 1;

            if (newCount > MAX_COUNT) {MAX_COUNT = newCount;}

            eleven_seven(member, remainingMembers, newCount);
        }
    }
}
function getLargestMemberIndex(circusMembers) {
    var currentMemberIndx = 0;
    var currentMember = circusMembers[currentMemberIndx];

    for (var i = 1; i < circusMembers.length; i++) {
        if (circusMembers[i].weight >= currentMember.weight && circusMembers[i].height >= currentMember.height) {
            currentMember = circusMembers[i];
            currentMemberIndx = i;
        }
    }

    return currentMemberIndx;
}
