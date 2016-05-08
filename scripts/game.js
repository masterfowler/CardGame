
function StartGame() {
    var name1 = document.getElementById('txtPlayer1').value;
    var name2 = document.getElementById('txtPlayer2').value;
    
    var game = new Game(name1, name2);
    game.start();
}

function Game(name1, name2) {
    var self = this;

    this.player1 = new Player(name1);
    this.player2 = new Player(name2);
    
    this.start = function() {
        self.player1.deck = new Deck([1,2,3,4,5,6,7,8,9,10,11,12]);
        self.player2.deck = new Deck([1,2,3,4,5,6,7,8,9,10,11,12]);
    }        
};

function Player(name) {
    
    var self = this;
    
    this.name = name;
    this.deck = undefined;
};

const START_CARD_COUNT = 12;

function Deck(cards) {
    
    var self = this;
    
    this.availableCards = cards;
    
    this.getPlayableCards = function() {
        var cards = [];
        for (var i = 0; i < START_CARD_COUNT; i++) {
            cards.push(self.availableCards[i]);
        }
        return cards;
    }
    
    this.playableCards = this.getPlayableCards();
};

function Board() {
    
    var self = this;
}