//ENEMIES
var Enemy = function(x, y) {
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = 101;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.speed += 101 * dt;
};

Enemy.prototype.render = function() {
    ctx.drawImage(resources.get(this.sprite), this.x, this.y);
};

//PLAYER
var Player = function(x, y) {
    this.sprite = 'images/char-princess-girl.png';
    this.x = x;
    this.y = y;
};

Player.prototype.update = function(dt) {
    if (this.y <= 0) {
        resetPlayer();
    } else (enemy.y === player.y && enemy.x === player.x) {
        player.reset;
    }
};

Player.prototype.render = function() {
    ctx.drawImage(resources.get(this.sprite), this.x, this.y);
};

Player.prototype.reset = function() {

};
resetPlayer = function() {
    player.x = 202 && player.y = 415;
}

//https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/switch
Player.prototype.handleInput = function(location) {
    switch (location) {
        case 'left':
            this.x -= 101;
            if (this.x <= 0) {
                this.x = 0;
            }
        break;

        case 'up':
            this.y -= 83;
            if (this.y <= 0) {
                this.y = 0;
            }
        break;

        case 'right':
            this.x += 101;
            if (this.x >= 505) {
                this.x = 505;
            }
        break;

        case 'down':
            this.y += 83;
            if (this.y >= 498) {
                this.y = 498
            }
        break;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var enemy1 = new Enemy(0, 83);
var enemy2 = new Enemy(101, 166);
var enemy3 = new Enemy(202, 249);

allEnemies = [enemy1, enemy2, enemy3];

var player = new Player(202, 415);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keypress', function(event) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[event.keyCode]);
});
