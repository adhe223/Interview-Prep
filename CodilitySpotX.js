function solution1(A) {
    var count = 1;
    var i = A[0];

    while(i !== -1) {
        count++;
        i = A[i]
    }

    return count;
}

function solution2(M, A) {
    var N = A.length;
    var count = new Array(M + 1);
    var i;
    for (i = 0; i <= M; i++)
        count[i] = 0;
    var maxOccurence = 1;
    var index = -1;
    for (i = 0; i < N; i++) {
        if (count[A[i]] > 0) {
            var tmp = count[A[i]];
            if (tmp > maxOccurence) {
                maxOccurence = tmp;
                index = i;
            }
            count[A[i]] = tmp + 1;
        } else {
            count[A[i]] = 1;
        }
    }
    return A[index];
}

function solution(M, A) {
    var N = A.length;
    var count = new Array(M + 1);
    var i;
    for (i = 0; i <= M; i++)
        count[i] = 0;
    var maxOccurence = 1;
    var index = 0;
    for (i = 0; i < N; i++) {
        if (count[A[i]] > 0) {
            var tmp = count[A[i]] + 1;
            if (tmp > maxOccurence) {
                maxOccurence = tmp;
                index = i;
            }
            count[A[i]] = tmp;
        } else {
            count[A[i]] = 1;
        }
    }
    return N > 0 ? A[index] : -1;   //I'd prefer to shortcircuit this at the top,  but it looks funny and isn't all that readable without a newline :/
}

ResultEnum = {
    INSERT : "INSERT",
    DELETE : "DELETE",
    SWAP : "SWAP",
    NOTHING : "NOTHING",
    IMPOSSIBLE : "IMPOSSIBLE"
};
function solution3(S, T) {
    var result = null;
    if (S === T) { return ResultEnum.NOTHING; }

    //If length difference is greater than 1 then we can quit now
    var lengthDiff = S.length - T.length;
    if (Math.abs(lengthDiff) > 1) {return ResultEnum.IMPOSSIBLE}

    //If length difference is 0 then we can try swapping to find a solution
    if (lengthDiff === 0) {
        result = swapEquality(S, T);
        if (result !== null) { return ResultEnum.SWAP + " " + result; }
    }

    //Try insert if T is one longer than S
    if (lengthDiff === -1) {
        result = insertEquality(S, T);
        if (result !== null) { return ResultEnum.INSERT + " " + result; }
    }

    //Try delete if S is one longer than T
    if (lengthDiff === 1) {
        result = deleteEquality(S, T);
        if (result !== null) { return ResultEnum.DELETE + " " + result; }
    }

    //We haven't found a solution so it can't be done
    return ResultEnum.IMPOSSIBLE;
}

function insertEquality(S, T) {
    for (var i = 0; i < S.length; i++) {
        var tChar = T.charAt(i);
        if (S.charAt(i) !== tChar) {
            var tmpStr = insertChar(S, i, tChar);
            if (tmpStr === T) { return tChar; }
        }
    }

    //Try inserting the last char of T. ex. "lol" and "lolz"
    tmpStr = S + T.charAt(T.length - 1);
    if (tmpStr === T) { return T.charAt(T.length - 1); }

    return null;
}

function swapEquality(S, T) {
    for (var i = 0; i < S.length - 1; i++) {
        var tmpStr = swapChars(S, i, i+1);
        if (tmpStr === T) {
            return S.charAt(i) + " " + S.charAt(i + 1);
        }
    }
    return null;
}

function deleteEquality(S, T) {
    for (var i = 0; i < S.length; i++) {
        var tmpStr = S.substring(0,i) + S.substring(i+1);
        if (tmpStr === T) {
            return S.charAt(i);
        }
    }
    return null;
}

function swapChars(str, i, j) {
    var char1 = str.charAt(i);
    var char2 = str.charAt(j);

    var result = str.substring(0,i) + char2 + str.substring(i+1);
    result = result.substring(0,j) + char1 + result.substring(j+1);
    return result;
}
function insertChar(str, i, char) {
    return str.substring(0, i) + char + str.substring(i);
}