function changeOptions(amount, denoms, index) {
    if (amount < 0) {
        return 0;
    }
    if(amount === 0) {
        return 1;
    }

    //There are no ways to do it
    if (index === denoms.length && amount > 0) {
        return 0;
    }

    return changeOptions(amount - denoms[index], denoms, index) + changeOptions(amount, denoms, index + 1);
}

function TempTracker() {
    this.min = Number.MAX_VALUE;
    this.max = Number.MIN_VALUE;
    this.sum = 0;
    this.count = 0;
    this.mode = null;
    this.maxOccurrences = 0;
    this.occurences = [];

    for (var i = 0; i <= 110; i++) {
        this.occurences[i] = 0;
    }
}
TempTracker.prototype.insert = function(val) {
    //Min
    if (val < this.min) {
        this.min = val;
    }

    //Max
    if (val > this.max) {
        this.max = val;
    }

    //Mean
    this.sum += val;
    this.count++;

    //Mode
    this.occurences[val]++;
    if (this.occurences[val] > this.maxOccurrences) {
        this.mode = val;
        this.maxOccurrences = this.occurences[val];
    }
};

function IsTreeBalanced(root, depth) {

}