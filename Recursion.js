var stepWays = 0;

function nine_one(numSteps) {
    if (numSteps === 0) {stepWays++}
    if (numSteps === 1) {
        nine_one(numSteps - 1);
    }
    if (numSteps === 2) {
        nine_one(numSteps - 1);
        nine_one(numSteps - 2);
    }
    if (numSteps > 2) {
        nine_one(numSteps - 1);
        nine_one(numSteps - 2);
        nine_one(numSteps - 3);
    }
}

function nine_two(currX, currY, destX, destY) {
    if (currX === destX && currY === destY) {return 1;}

    if (currX < destX && currY > destY) {
        return nine_two(currX + 1, currY, destX, destY) + nine_two(currX, currY - 1, destX, destY);
    } else if (currX < destX) {
        return nine_two(currX + 1, currY, destX, destY);
    } else {
        return nine_two(currX, currY - 1, destX, destY);
    }
}

function nine_three(arr) {
    //Do a binary search and check if arr[i] = i. If it is less, continue the search on the lower half, if it's more then continue on the upper half
    if (arr.length < 2) {return -1;}
    var mid = Math.floor(arr.length / 2);

    if (arr[mid] === mid) {
        return mid;
    } else if(arr[mid] > mid) {
        return nine_three(arr.slice(0, mid));
    } else if (arr[mid] < mid) {
        return nine_three(arr.slice(mid + 1));
    } else {
        return -1;
    }
}

function nine_sevenEntry(matrix, row, col, newColor) {
    var oldColor = matrix[row][col];
    nine_seven(matrix, row, col, oldColor, newColor);
    return matrix;
}
function nine_seven(matrix, row, col, oldColor, newColor) {
    if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[row].length) {return;}
    if (matrix[row][col] !== oldColor) {return;}

    matrix[row][col] = newColor;
    nine_seven(matrix, iRow, col, oldColor, newColor);
    nine_seven(matrix, row, iCol, oldColor,newColor)
}

function nine_eight(n, denom) {
    var nextDenom = 0;
    switch(denom) {
        case 25:
            nextDenom = 10;
            break;
        case 10:
            nextDenom = 5;
            break;
        case 5:
            nextDenom = 1;
            break;
        default:
            return 1;
    }

    var ways = 0;
    for (var i = 0; i * denom <= n; i++) {
        ways += nine_eight(n - i * denom, nextDenom);
    }
    return ways;
}