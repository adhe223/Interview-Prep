CardSuit = {
    HEART: 1,
    SPADE: 2,
    CLUB: 3,
    DIAMOND: 4
};
EmployeeRole = {
    RESPONDENT: 1,
    MANAGER: 2,
    DIRECTOR: 3
};

function Deck() {
    this.cards = [];
}
Deck.prototype = {
    constructor: Deck,
    shuffle: function() {},
    dealCard: function() {}
};

function Card(number, suit) {
    this.value = number;
    this.suit = suit;
}

function Hand() {
    this.cards = [];
    this.score = 0;
}
Hand.prototype = {
    constructor: Hand,
    addCard: function(card) {
        this.cards.push(card);
    }
};

function BlackJackHand() {
    Hand.call(this);
}
//inheritPrototype(BlackJackHand, Hand);
BlackJackHand.prototype.getScore = function(){console.log('lol')};

function BlackJackCard() {
    Card.call(this);
}
inheritPrototype(BlackJackCard, Card);
BlackJackCard.prototype.maxValue = function() {};
BlackJackCard.prototype.minValue = function() {};
BlackJackCard.prototype.isFaceCard = function() {};

function CallCenter() {
    this.directors = [];
    this.managers = [];
    this.respondents = [];
    this.unhandledCalls = [];
}
CallCenter.prototype = {
    constructor: CallCenter,
    dispatchCall: function(call) {
        for (var i = 0; i < this.respondents.length; i++) {
            var respondent = this.respondents[i];
            if (respondent.available) {
                respondent.call = call;
                call.handled = true;
                respondent.available = false;
                return true;
            }
        }

        for (var i = 0; i < this.managers.length; i++) {
            var manager = this.managers[i];
            if (manager.available) {
                manager.call = call;
                call.handled = true;
                manager.available = false;
                return true;
            }
        }

        for (var i = 0; i < this.directors.length; i++) {
            var director = this.directors[i];
            if (director.available) {
                director.call = call;
                call.handled = true;
                director.available = false;
                return true;
            }
        }

        //Otherwise we have no one to answer. Place the call in a queue to be handled and return false
        this.unhandledCalls.push(call);
        return false;
    },
    addEmployee: function(employee) {
        if (!employee) {return;}

        switch(employee.role) {
            case EmployeeRole.RESPONDENT:
                this.respondents.push(employee);
                break;
            case EmployeeRole.MANAGER:
                this.managers.push(employee);
                break;
            case EmployeeRole.DIRECTOR:
                this.directors.push(employee);
                break;
        }
    }
};

function Employee(name,role) {
    this.role = role;
    this.name = name;
    this.available = true;
    this.call = null;
}
Employee.prototype = {
    constructor: Employee,
    finishCall: function(call) {
        this.call = null;
        this.available = true;
    }
}

function Call(name) {
    this.customer = name;
    this.handled = false;
}

function Hero() {
    this._name = 'John Doe';
    this.getSecretIdentity = function(){
        return this._name;
    }
}

var hero = new Hero();
var stoleSecretIdentity = hero.getSecretIdentity;

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

button.onclick = function(i) {
    return function() {
        alert('Button ' + (i + 1) + ' clicked');
    };
};