The Game Project 7 – Enemies and platforms


Week 9


This week’s project builds upon the sketch from last week. Before starting this project make sure you have completed all steps from last week and tested your game thoroughly.

Create a copy of your sketch directory from last week and rename it to something like game-project-7. Keep your completed project from last week safe as a reference, and make the following changes to the code in your new game directory.

Now that you know how to create objects that contain functions, we will use this technique to add enemies and platforms to the game.

Create a new global variable called enemies and initialise it to an array within startGame. This array will contain your enemy objects.

Next (still within startGame), create a new simple enemy object and push it into enemies.

enemies.push(
    {
        x_pos: 10,
        y_pos: floorPos_y,
        size: 30,
        display: function()
        {
            // Draw enemy.
            fill([255, 0, 0]);
            ellipse(this.x_pos, this.y_pos, this.size);
        }
    }
);
To draw this new enemy to the screen you need to call the object’s display function from within draw.

Use a for loop, together with enemies.length, to loop over the enemies array and call the display function of your enemy.
Hint: enemies[i].display().
You must surround this call with push(), translate(scrollPos, 0), and pop() as with other objects to ensure correct scrolling.
You should see a red circle drawn at the left-hand side of the screen, on the ground, when you run the sketch.
Check scrolling works correctly when the gameChar moves to the edges of the canvas.
To make this enemy move create three new variables within the object: x1, x2, and speed. Then define a new function called move, also inside the object (e.g. below the display function).

x1 and x2 will represent the two points on the x-axis between which the enemy will move.
Initialise x1 and x2 to values between which you would like the enemy to move. You should make sure the x_pos is between x1 and x2.
Initialise speed to 1.
Create a new method inside your enemy called move
Inside move, write the logic to make your enemy move between x1 and x2. You should set the value of x_pos equal to x_pos + speed. To make the enemy move backward, you should set speed equal to -speed.
Don’t forget that to refer to properties within objects you must use the this keyword.
Then within draw, call this function after displaying the enemy object within the enemies for loop.
Check that your enemy move back and forth between x1 and x2.
[2 marks]

Next you need to make the player loose a life when they collide with the enemy. First, refactor the checkPlayerDie function from last week into two separate functions.

function checkPlayerDie()
{
    if (gameChar_y > height)
    {
        playerDied();
    }
}

function playerDied()
{
    console.log('player died!');
    lives--;
    if (lives > 0)
    {
        // Restart game.
        startGame();
    }
    else
    {
        // Game over, player lost.
        isLost = true;
    }
}
Then add a new method inside your enemy object called checkCharCollision. This function should contain one if statement that is true when realPos is within the bounds of the enemy.
Hint: you need four separate Boolean conditions to check that the gameChar is within the left, right, top and bottom bounds of the enemy.
When true, call playerDied.
Check that your player looses a life whenever they collide with the enemy. Check that you can however jump over the enemy without dying.

[2 marks]

Change the display function to design an interesting looking enemy.

Animate your enemy so that they turn to face the direction they are moving.
Hint: you can use the speed variable and an if statement to determine the directing of movement.
Create new enemies by copying your original enemy object and pushing them into the enemies array.
For each new object, set the x1, x2 and x_pos variables so as to position your enemies throughout the level.
Experiment with varying the appearance or behaviour of different enemies, e.g. change their colour or speed, or instead of moving left and right, make them move up and down.
[2 marks]

To add platforms to your level, create a new global variable platforms and initialise it to an array within startGame.

Next (still within startGame), create a new simple platform object and push it into platforms.

platforms.push(
    {
        x_pos: 10,
        y_pos: floorPos_y - 100,
        width: 200,
        height: 15,
        display: function()
        {
            // Draw platform.
            fill([255, 255, 0]);
            rect(this.x_pos, this.y_pos, this.width, this.height);
            line(this.x_pos,
                 this.y_pos + this.height / 2,
                 this.x_pos + this.width,
                 this.y_pos + this.height / 2);
        }
    }
)
As with enemies, create a for loop within draw that loops over your platforms array and calls display on each object.

Hint: platforms[i].display().
Don’t forget to wrap this call within push(), translate(scrollPos, 0) and pop() for correct scrolling.
Check that a simple yellow platform is drawn to the canvas.
Check scrolling works correctly when the gameChar moves to the edges of the canvas.
Define a method within the platform object called checkCharOn to test whether the gameChar has jumped onto the platform.

Define a global variable called isOnPlatform and initialise it as false in startGame
Now complete checkCharOn so that it sets isOnPlatform to true when the player is between the left, right, top and bottom of the platform
Call this method from within the same for loop that calls platforms[i].display().
Just before the for loop set isOnPlatform to false so that we do a fresh check for each draw loop
Now we need to do a couple of adjustments to make sure that the game character doesn't fall when it's on a platform.

find the logic in your draw loop that makes the character rise and fall
Hint: this is where you also set isJumping to true
change your conditional statement there to make sure the character only falls when isOnPlatform is false
We also need to adjust checkCanyon.
Adjust the conditional statement so that isFalling is only set to true when isOnPlatform is false
Test that the gameChar can jump onto and off of your platform correctly.
[2 marks]

Create multiple platforms by copy and pasting your platform object, changing the position and size, and pushing them into the platforms array.

Move some pick-up objects on to hard to reach platforms, and position your enemies in challenging places making it harder for the player to collect all pick-up objects.
IMPORTANT final stage !

Take a screenshot of your game in action and submit this with your whole zipped project
Your image should be PNG format 512px * 512px and named with your username (e.g. alove001.png)
This will allow your level to be included in the GameProject website you should do this even if you haven't finished other parts
[2 marks]