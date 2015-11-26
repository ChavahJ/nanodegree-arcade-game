#Help the Princess Avoid the Bugs
================================

**WARNING:** This game is very boring. There is no score. There are no sounds. There is no objective. The princess must avoid the bugs, get to the water, and then start over again.

_Instructions:_

1. Move the princess up (▲), down (▼), left (◄), and right (►).
2. She needs to get to the water. Why? I don't know. She just needs to.
3. She also must avoid the bugs. Why? Because she doesn't like bugs.
4. If she hits a bug, she freaks out and jumps back to her starting point.

================================

##FEND PROJECT 3

###Effective JavaScript: Frogger

[List taken from this document.](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub)

**Checklist for completing project:**

The Enemy function, including:
- [x] Loading the image by setting this.sprite to the appropriate image in the image folder
- [x] Setting the Enemy initial location
- [ ] Setting the Enemy speed

The update method for the Enemy
- [ ] Updates the Enemy location
- [ ] Handles collision with the Player

Optional: Add your own Enemy methods as needed.

The Player function, including:
- [x] Loading the image by setting this.sprite to the appropriate image in the image folder.
- [x] Setting the Player initial location.
- [ ] The update method for the Player (can be similar to the one for the Enemy)
- [x] The render method for the Player (use the code from the render method for the Enemy).
- [x] The handleInput method, which should receive user input, allowedKeys (the key which was pressed) and move the player according to that input.
- [x] Left key should move the player to the left, right key to the right, up should move the player up and down should move the player down.
- [x] The player cannot move off screen.
- [ ] If the player reaches the water the game should be reset by moving the player back to the initial location (you can write a separate reset Player method to handle that).

Optional: Add your own Player methods as needed.

Instantiate entities:
- [x] Creating a new Player object
- [x] Creating several new Enemies objects and placing them in an array called allEnemies
