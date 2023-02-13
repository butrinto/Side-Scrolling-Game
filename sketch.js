/*

GAME PROJECT 7 - ENEMIES AND PLATFORMS

*/

var enemies;
var platforms;
var isOnPlatform;

var CharacterX;
var CharacterY;
var floorPos_y;
var scrollPos;
var realPos;

var isLeft;
var isRight;
var isJumping;
var isFalling;

var clouds;
var mountains;
var trees;
var HouseXs;
var HouseY;

 var t_canyon;
var t_jewel;
var score;
var isWon;
var lives;
var isLost;

function setup()
{
	createCanvas(1024, 1476);
    floorPos_y = height * 3/4;
    score = 0;
    
    startGame();
        score = 0;
        lives = 2;
        


    
}

function startGame()
{
    // Variable to control the background scrolling.
	scrollPos = 0;
    
	CharacterX = width/2;
	CharacterY = floorPos_y;

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	realPos = CharacterX - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isJumping = false;
	isFalling = false;
    isWon = false;
    isLost = false;
    isOnPlatform = false;


	// Initialise arrays of scenery objects.
enemies = [];
enemies.push(
{
x_pos: 1200,
y_pos: floorPos_y - 18,
size: 40,
x1: 800,
x2: 1700,
speed: -4,
display: function()
    {
    fill([255, 230, 100]);
    ellipse(this.x_pos + 40, this.y_pos, this.size);
    fill(0);
    ellipse(this.x_pos + 33, this.y_pos, this.size - 30);
    ellipse(this.x_pos + 47, this.y_pos, this.size - 30);
    },
    
        move: function()
        {
this.x_pos += this.speed;
if(this.x_pos < this.x1 || this.x_pos > this.x2)
    {
    this.speed *= -1;
    }
        },
        checkCharCollision: function()
        {
        if(abs(realPos - this.x_pos) < 20 && abs( CharacterY - this.y_pos) < 20)
        {
           
            playerDied();
        }
        }
    
}
)

enemies.push(
{
x_pos: 2000,
y_pos: floorPos_y - 18,
size: 40
,
x1: 1900,
x2: 2550,
speed: -4,
display: function()
    {
    fill([255, 230, 100]);
    ellipse(this.x_pos + 40, this.y_pos, this.size);
    fill(0);
    ellipse(this.x_pos + 33, this.y_pos, this.size - 30);
    ellipse(this.x_pos + 47, this.y_pos, this.size - 30);
    },
    
        move: function()
        {
this.x_pos += this.speed;
if(this.x_pos < this.x1 || this.x_pos > this.x2)
    {
    this.speed *= -1;
    }
        },
        checkCharCollision: function()
        {
        if(abs(realPos - this.x_pos) < 20 && abs( CharacterY - this.y_pos) < 20)
        {
           
            playerDied();
        }
        }
    
}
)

enemies.push(
{
x_pos: 3000,
y_pos: floorPos_y - 18,
size: 40
,
x1: 2750,
x2: 3400,
speed: -5,
display: function()
    {
    fill([255, 230, 100]);
    ellipse(this.x_pos + 40, this.y_pos, this.size);
    fill(0);
    ellipse(this.x_pos + 33, this.y_pos, this.size - 30);
    ellipse(this.x_pos + 47, this.y_pos, this.size - 30);
    },
    
        move: function()
        {
this.x_pos += this.speed;
if(this.x_pos < this.x1 || this.x_pos > this.x2)
    {
    this.speed *= -1;
    }
        },
        checkCharCollision: function()
        {
        if(abs(realPos - this.x_pos) < 20 && abs( CharacterY - this.y_pos) < 20)
        {
           
            playerDied();
        }
        }
    
}
)

enemies.push(
{
x_pos: 3800,
y_pos: floorPos_y - 18,
size: 40
,
x1: 3000,
x2: 4300,
speed: -5,
display: function()
    {
    fill([255, 230, 100]);
    ellipse(this.x_pos + 40, this.y_pos, this.size);
    fill(0);
    ellipse(this.x_pos + 33, this.y_pos, this.size - 30);
    ellipse(this.x_pos + 47, this.y_pos, this.size - 30);
    },
    
        move: function()
        {
this.x_pos += this.speed;
if(this.x_pos < this.x1 || this.x_pos > this.x2)
    {
    this.speed *= -1;
    }
        },
        checkCharCollision: function()
        {
        if(abs(realPos - this.x_pos) < 20 && abs( CharacterY - this.y_pos) < 20)
        {
           
            playerDied();
        }
        }
    
}
)
    
platforms = [];
    
platforms.push(
    {
        x_pos: 940,
        y_pos: floorPos_y - 70,
        width: 200,
        height: 15,
display: function()
        {
            // Draw platform.
            fill([200, 0, 255]);
            rect(this.x_pos, this.y_pos, this.width, this.height);
            line(this.x_pos,
                 this.y_pos + this.height / 2,
                 this.x_pos + this.width,
                 this.y_pos + this.height / 2);
        },
checkCharOn: function()
        {
        if(abs(realPos - this.x_pos) < 160 && (realPos - this.x_pos) > -40 && abs( CharacterY - this.y_pos) < 20)
            
        {
     isOnPlatform = true;

        isJumping = false;
            }
       else if(abs(realPos - this.x_pos) > 200 && (realPos - this.x_pos) < 0 || abs(CharacterY - this.y_pos) < 20)
            {
     isOnPlatform = false;
            }
        } 
    }
)

    clouds = [];

     for(var i = 0; i < 100; i++)
    {
        var c = {x_pos: random(-300, 8000), y_pos: random(15, 60)};
        clouds.push(c);
    }
    
mountains = [];
        for(var i = 0; i < 100; i++)
    {
        var m = {x_pos: i * random(-300, 8000), y_pos: -443};
        mountains.push(m);
    }
    
    
trees = [];
           for(var i = 0; i < 100; i++)
    {
        var t = {x_pos: random(900, 2800), y_pos: -464};
        trees.push(t);
    }
    
houseXs = []; 
    for(var i = 0; i < 15; i++)
    {
        var h = i * random(0,8000);
        houseXs.push(h);
    }
HouseY = floorPos_y - 400;
    
    
    t_canyon = 
[
 {x_pos: 1900, width: 100},
 {x_pos: 1580, width: 50},
 {x_pos: 1800, width: 60},
 {x_pos: 880, width: 400},
 {x_pos: 2500, width: 120},
 {x_pos: 2800, width: 60},
 {x_pos: 3400, width: 90},
 {x_pos: 3900, width: 160},
 {x_pos: 4300, width: 50},
];
    
    t_jewel  = 
[
 {x_pos: 950, y_pos: 600, size: 50, isFound: false},
 {x_pos: 1200, y_pos: 640, size: 50, isFound: false},{x_pos: 1790, y_pos: 670, size: 50, isFound: false},{x_pos: 2100, y_pos: 600, size: 50, isFound: false},{x_pos: 2600, y_pos: 670, size: 50, isFound: false},{x_pos: 2900, y_pos: 670, size: 50, isFound: false},{x_pos: 3400, y_pos: 670, size: 50, isFound: false},{x_pos: 2800, y_pos: 670, size: 50, isFound: false},{x_pos: 3200, y_pos: 670, size: 50, isFound: false},{x_pos: 4600, y_pos: 670, size: 50, isFound: false},{x_pos: 4000, y_pos: 670, size: 50, isFound: false},
];
    
        
 
}

function draw()
{
    
    
	background(100, 105, 160); // fill the sky blue

	noStroke();
	fill(0,90,0);
	rect(0, floorPos_y, width, height/4); // draw some green ground
    
	// Draw clouds.
    push();
    translate(scrollPos * 0.3, 0);
    drawClouds();
    pop();

	// Draw mountains.
    push();
    translate(scrollPos * 0.6, 0);
    drawMountains();
    pop();

    	// Draw houses.
    push();
    translate(scrollPos,0);
    drawHouses();
    pop();
    
	// Draw trees.
    push();
    translate(scrollPos,0);
    drawTrees();
    pop();



	// Draw canyons.
    for(var i = 0; i < t_canyon.length; i++){
    push();
    translate(scrollPos ,0);
    drawCanyon(t_canyon[i]);
    checkCanyon(t_canyon[i]);
    pop();
    }

	// Draw pickup items.
    for(var i = 0; i < t_jewel.length; i++){
    push();
    translate(scrollPos,0)
    drawJewel(t_jewel[i]);
    checkJewel(t_jewel[i]);
    pop();
    }
    
    //Draw Enemies.
    
        push();
        translate(scrollPos, 0);
    for(var i = 0; i < enemies.length; i++)
    {
        enemies[i].display();
        enemies[i].move();
        enemies[i].checkCharCollision();
    }
    pop();
    
    
    
    //platforms
     push();
        translate(scrollPos, 0);
    for(var i = 0; i < platforms.length; i++)
    {
        platforms[i].display();
        platforms[i].checkCharOn();
    }
    pop();
    
    
    
    checkPlayerWon();
    checkPlayerDied();

	// Draw game character.
	drawGameChar();

    //Lives
    fill(0);
    stroke(0);
    textStyle(BOLD);
    textSize(35);
    text("LIVES LEFT: " + lives, 20, 1440 );
    
    //Score
    fill(0);
    stroke(0);
    text("SCORE: " + score, 20, 60);
    

        if(isLost == true && lives == 0)
        {   
            fill(0)
            rect(0, 0, 10000, 10000);
            fill(255,0,0);
            textSize(40);
            text("GAME OVER - YOU LOST.", 260, 700);
            text("PRESS SPACE TO CONTINUE", 210, 800)
            console.log("YOU HAVE LOST")
            return;
        }
    
    
        if(isWon == true)
            {
            fill(255);
            fill(0, 255, 0);
            textSize(50);
            text("YOU WON!", 360, 300);
            textSize(40);
            text("PRESS SPACE TO PLAY NEXT LEVEL", 160, 400)
            console.log("YOU HAVE WON!")
            return;
            }

    if(isOnPlatform == true)
        {
            CharacterY = height * 3/4 - 70  
        }

	// Logic to make the game character move or the background scroll.
	if(isLeft)
	{
			if(CharacterX > width * 2)
			{
					CharacterX -= 5;
			}
			else
			{
					scrollPos += 5;
			}
	}

	if(isRight)
	{
			if(CharacterX < width * 0.1)
			{
					CharacterX  += 5;
			}
			else
			{
					scrollPos -= 5; // negative for moving against the background
			}
	}

	// Logic to make the game character rise and fall.
	if(CharacterY < floorPos_y)
	{
			CharacterY += 2;
			isJumping = true;
	}
	else
	{
			isJumping = false;
	}

	if(isFalling)
	{
			CharacterY += 15;
            isJumping = false;
	}

	// Update real position of gameChar for collision detection.
	realPos = CharacterX - scrollPos;
    
    //Score
    if(t_jewel.isFound == true)
    {
        score = score + 1;
        console.log("score");
    }
    

}


// ---------------------
// Key control functions
// ---------------------

function keyPressed(){
    
    if(isLost || isWon)
{
    if(key == ' ')
    {
        nextLevel();
    }
    return;
}


	if(key == 'A' || keyCode == 37)
	{
			isLeft = true;
	}

	if(key == 'D' || keyCode == 39)
	{
			isRight = true;
	}

	if(key == ' ' || key == 'W')
	{
			if(!isJumping)
			{
					CharacterY = CharacterY - 100;
			}
	}
}

function keyReleased(){

	if(key == 'A' || keyCode == 37)
	{
		isLeft = false;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = false;
	}

}


// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.

function drawGameChar()
{
	// draw game character
      if(isLeft && isJumping)
    {
        // add your jumping-left code
        fill(200, 0, 0);
        triangle(CharacterX+40, CharacterY+78-140, CharacterX+49, CharacterY+122-140, CharacterX+65, CharacterY+125-140);
        fill(0);
        ellipse(CharacterX+45, CharacterY+78-140, 35, 35);
        stroke(0);
        strokeWeight(5);
        line(CharacterX+45, CharacterY+70-140, CharacterX+45, CharacterY+110-140);
        strokeWeight(3);
        line(CharacterX+45, CharacterY+110-140, CharacterX+37, CharacterY+113-140);
        line(CharacterX+37, CharacterY+113-140, CharacterX+40, CharacterY+128-140);
        line(CharacterX+45, CharacterY+110-140, CharacterX+38, CharacterY+118-140);
        line(CharacterX+38, CharacterY+118-140, CharacterX+51, CharacterY+128-140);
        line(CharacterX+45, CharacterY+98-140, CharacterX+52, CharacterY+98-140);
        line(CharacterX+52, CharacterY+98-140, CharacterX+54, CharacterY+103-140);
        line(CharacterX+45, CharacterY+98-140, CharacterX+37, CharacterY+102-140);
        line(CharacterX+37, CharacterY+102-140, CharacterX+37, CharacterY+98-140);
        strokeWeight(0.2);
        fill(255, 0, 0);
        rect(CharacterX+31, CharacterY+66-140, 28, 3);
        strokeWeight(1);

    }
    else if(isRight && isJumping)
    {
        // add your jumping-right code
        fill(200, 0, 0);
        triangle(CharacterX+50, CharacterY+78-140, CharacterX+27, CharacterY+125-140, CharacterX+43, CharacterY+122-140);
        fill(0);
        ellipse(CharacterX+45, CharacterY+78-140, 35, 35);
        stroke(0);
        strokeWeight(5);
        line(CharacterX+45, CharacterY+70-140, CharacterX+45, CharacterY+110-140);
        strokeWeight(3);
        line(CharacterX+45, CharacterY+110-140, CharacterX+53, CharacterY+113-140);
        line(CharacterX+53, CharacterY+113-140, CharacterX+50, CharacterY+128-140);
        line(CharacterX+45, CharacterY+110-140, CharacterX+52, CharacterY+118-140);
        line(CharacterX+52, CharacterY+118-140, CharacterX+39, CharacterY+128-140);

        line(CharacterX+45, CharacterY+98-140, CharacterX+52, CharacterY+98-140);
        line(CharacterX+52, CharacterY+98-140, CharacterX+54, CharacterY+96-140);
        line(CharacterX+45, CharacterY+100-140, CharacterX+37, CharacterY+98-140);
        line(CharacterX+37, CharacterY+98-140, CharacterX+37, CharacterY+102-140);
        strokeWeight(0.2);
        fill(255, 0, 0);
        rect(CharacterX+31, CharacterY+66-140, 28, 3);
        strokeWeight(1);
        noStroke();
    }
        else if(isLeft)
    {
        // add your walking left code
         fill(200, 0, 0);
        triangle(CharacterX+40, CharacterY+78-140, CharacterX+47, CharacterY+130-140, CharacterX+63, CharacterY+130-140);
        fill(0);
        ellipse(CharacterX+45, CharacterY+78-140, 35, 35);
        stroke(0);
        strokeWeight(5);
        line(CharacterX+45, CharacterY+70-140, CharacterX+45, CharacterY+110-140);
        strokeWeight(3);
        line(CharacterX+45, CharacterY+110-140, CharacterX+40, CharacterY+118-140);
        line(CharacterX+40, CharacterY+118-140, CharacterX+40, CharacterY+138-140);
        line(CharacterX+45, CharacterY+110-140, CharacterX+50, CharacterY+124-140);
        line(CharacterX+50, CharacterY+124-140, CharacterX+60, CharacterY+138-140);
        line(CharacterX+45, CharacterY+95-140, CharacterX+38, CharacterY+107-140);
        line(CharacterX+38, CharacterY+107-140, CharacterX+36, CharacterY+100-140);
        line(CharacterX+45, CharacterY+95-140, CharacterX+52, CharacterY+102-140);
        line(CharacterX+52, CharacterY+102-140, CharacterX+53, CharacterY+110-140);
        strokeWeight(0.2);
        fill(255, 0, 0);
        rect(CharacterX+31, CharacterY+66-140, 28, 3);
        strokeWeight(1);
        noStroke();

    }
    else if(isRight)
    {
        // add your walking right code
        fill(200, 0, 0);
        triangle(CharacterX+50, CharacterY+78-140, CharacterX+27, CharacterY+130-140, CharacterX+43, CharacterY+130-140);
        fill(0);
        ellipse(CharacterX+45, CharacterY+78-140, 35, 35);
        stroke(0);
        strokeWeight(5);
        line(CharacterX+45, CharacterY+70-140, CharacterX+45, CharacterY+110-140);
        strokeWeight(3);
        line(CharacterX+45, CharacterY+110-140, CharacterX+40, CharacterY+124-140);
        line(CharacterX+40, CharacterY+124-140, CharacterX+32, CharacterY+138-140);
        line(CharacterX+45, CharacterY+110-140, CharacterX+50, CharacterY+118-140);
        line(CharacterX+50, CharacterY+118-140, CharacterX+51, CharacterY+138-140);

        line(CharacterX+45, CharacterY+95-140, CharacterX+38, CharacterY+102-140);
        line(CharacterX+38, CharacterY+102-140, CharacterX+37, CharacterY+110-140);
        line(CharacterX+45, CharacterY+95-140, CharacterX+52, CharacterY+107-140);
        line(CharacterX+52, CharacterY+107-140, CharacterX+54, CharacterY+100-140);

        strokeWeight(0.2);
        fill(255, 0, 0);
        rect(CharacterX+31, CharacterY+66-140, 28, 3);
        strokeWeight(1);
        noStroke();

    }

     else if(isJumping || isFalling)
    {
        // add your jumping facing forwards code
        fill(200, 0, 0);
        triangle(CharacterX+45, CharacterY+90-140, CharacterX+37, CharacterY+120-140, CharacterX+53, CharacterY+120-140);
        fill(0);
        ellipse(CharacterX+45, CharacterY+78-140, 35, 35);
        stroke(0);
        strokeWeight(5);
        line(CharacterX+45, CharacterY+80-140, CharacterX+45, CharacterY+100-140);
        strokeWeight(3);
        line(CharacterX+45, CharacterY+100-140, CharacterX+35, CharacterY+110-140);
        line(CharacterX+45, CharacterY+100-140, CharacterX+55, CharacterY+110-140);
        line(CharacterX+35, CharacterY+110-140, CharacterX+40, CharacterY+125-140);
        line(CharacterX+55, CharacterY+110-140, CharacterX+50, CharacterY+125-140);
        line(CharacterX+45, CharacterY+93-140, CharacterX+35, CharacterY+97-140);
        line(CharacterX+45, CharacterY+93-140, CharacterX+55, CharacterY+97-140);
        line(CharacterX+55, CharacterY+97-140, CharacterX+54, CharacterY+99-140);
        line(CharacterX+35, CharacterY+97-140, CharacterX+36, CharacterY+99-140);
        strokeWeight(0.2);
        fill(255, 0, 0);
        rect(CharacterX+31, CharacterY+66-140, 28, 3);
        strokeWeight(1);
        noStroke();

    }
     else
    {
        // add your standing front facing code
    {fill(200, 0, 0);
    triangle(CharacterX+45, CharacterY+78-140, CharacterX+37, CharacterY+130-140, CharacterX+53, CharacterY+130-140);
    fill(0);
    ellipse(CharacterX+45, CharacterY+78-140, 35, 35);
    stroke(0);
    strokeWeight(5);
    line(CharacterX+45, CharacterY+80-140, CharacterX+45, CharacterY+100-140);
    strokeWeight(3);
    line(CharacterX+45, CharacterY+100-140, CharacterX+40, CharacterY+138-140);
    line(CharacterX+45, CharacterY+100-140, CharacterX+50, CharacterY+138-140);
    line(CharacterX+45, CharacterY+90-140, CharacterX+35, CharacterY+117-140);
    line(CharacterX+45, CharacterY+90-140, CharacterX+55, CharacterY+117-140);
    strokeWeight(0.2);
    fill(255, 0, 0);
    rect(CharacterX+31, CharacterY+66-140, 28, 3);
    strokeWeight(3.5);
    stroke(255, 0, 0);
    strokeWeight(1);
    noStroke();}

    }
}

// ---------------------------
// Background render functions
// ---------------------------

// Function to draw cloud objects.
function drawClouds()
{
    for(var i = 0; i < clouds.length; i++)
    {

     noStroke();
        fill(100);
    ellipse(clouds[i].x_pos+184, clouds[i].y_pos+150, 35, 35);
    ellipse(clouds[i].x_pos+200, clouds[i].y_pos+150, 40, 40);
    ellipse(clouds[i].x_pos+215, clouds[i].y_pos+150, 25, 25);
        fill(130);
    ellipse(clouds[i].x_pos+313, clouds[i].y_pos+140, 75, 65);
    ellipse(clouds[i].x_pos+340, clouds[i].y_pos+140, 90, 80);
    ellipse(clouds[i].x_pos+368, clouds[i].y_pos+140, 65, 55);
        fill(160);
    ellipse(clouds[i].x_pos+200, clouds[i].y_pos+90, 105, 85);
    ellipse(clouds[i].x_pos+240, clouds[i].y_pos+90, 120, 100);
    ellipse(clouds[i].x_pos+278, clouds[i].y_pos+90, 95, 75);
}
}

// Function to draw mountains objects.
function drawMountains()
{
    for(var i = 0; i < mountains.length; i++)
    {
stroke(0);
        fill(35, 30, 22);
        triangle(mountains[i].x_pos+550, mountains[i].y_pos+800, mountains[i].x_pos+350, mountains[i].y_pos+1550, mountains[i].x_pos+750, mountains[i].y_pos+1550);
         fill(30, 25, 20);
        triangle(mountains[i].x_pos+1050, mountains[i].y_pos+900, mountains[i].x_pos+850, mountains[i].y_pos+1550, mountains[i].x_pos+1250, mountains[i].y_pos+1550);
         fill(40, 34, 28);
        triangle(mountains[i].x_pos+800, mountains[i].y_pos+700, mountains[i].x_pos+500, mountains[i].y_pos+1550, mountains[i].x_pos+1100, mountains[i].y_pos+1550);

         noStroke();
        fill(110);
        triangle(mountains[i].x_pos+550, mountains[i].y_pos+800, mountains[i].x_pos+500, mountains[i].y_pos+982.5, mountains[i].x_pos+600, mountains[i].y_pos+982.5);
         fill(130);
        triangle(mountains[i].x_pos+800, mountains[i].y_pos+680, mountains[i].x_pos+725, mountains[i].y_pos+905, mountains[i].x_pos+875, mountains[i].y_pos+905);
         fill(75);
        triangle(mountains[i].x_pos+1050, mountains[i].y_pos+900, mountains[i].x_pos+1000, mountains[i].y_pos+1057.5, mountains[i].x_pos+1100, mountains[i].y_pos+1057.5);
    }
}

// Function to draw trees objects.
function drawTrees()
{
   for(var i =0; i < trees.length; i++ )
    {
    //Trunk
stroke(0)
        fill(84, 46, 11);
        rect(trees[i].x_pos+1190, trees[i].y_pos+1320, 60, 250);
        noStroke();
        fill(0, 60, 0);
        triangle(trees[i].x_pos+1100, trees[i].y_pos+1330, trees[i].x_pos+1340, trees[i].y_pos+1330, trees[i].x_pos+1220, trees[i].y_pos+1000);
        triangle(trees[i].x_pos+1120, trees[i].y_pos+1200, trees[i].x_pos+1320, trees[i].y_pos+1200, trees[i].x_pos+1220, trees[i].y_pos+1000);
        fill(255);
    } 
}

// Function to draw houses objects.
function drawHouses()
{
    for(var i =0; i < houseXs.length; i++)
    {
stroke(1);
        fill(201, 135, 100);
            rect(houseXs[i]+10, HouseY, 400, 400);
        fill(56, 37, 26);
            triangle(houseXs[i]+0, HouseY+005, houseXs[i]+420, HouseY+005, houseXs[i]+205, HouseY-150);
            stroke(0);
        fill(94, 64, 24);
            rect(houseXs[i]+280, HouseY+230, 80, 170);
         fill(140, 109, 0);
            ellipse(houseXs[i]+350, HouseY+310, 10, 10)

        fill(0, 0, 20);
            rect(houseXs[i]+50, HouseY+230, 80, 80);
        fill(173, 115, 84);
            rect(houseXs[i]+50, HouseY+310, 80, 20);

        fill(0, 0, 20);
            rect(houseXs[i]+50, HouseY+070, 80, 80);
        fill(173, 115, 84);
            rect(houseXs[i]+50, HouseY+140, 80, 20);

        fill(255, 253, 219);
            rect(houseXs[i]+280, HouseY+070, 80, 80);
        fill(173, 115, 84);
            rect(houseXs[i]+280, HouseY+140, 80, 20);

        line(houseXs[i]+320, HouseY+070, houseXs[i]+320, HouseY+080)
        fill(150, 0, 200);
        triangle(houseXs[i]+320, HouseY+080, houseXs[i]+310, HouseY+090, houseXs[i]+330, HouseY+090);
        noStroke();
        noFill();
        stroke(142, 94, 68);
        strokeWeight(4);
        line(houseXs[i]+160, HouseY+170, houseXs[i]+160, HouseY+185);
        line(houseXs[i]+140, HouseY+185, houseXs[i]+180, HouseY+185);
        line(houseXs[i]+260, HouseY+040, houseXs[i]+260, HouseY+055);
        line(houseXs[i]+240, HouseY+040, houseXs[i]+280, HouseY+040);
        line(houseXs[i]+220, HouseY+300, houseXs[i]+220, HouseY+315);
        line(houseXs[i]+200, HouseY+300, houseXs[i]+240, HouseY+300);  
    }
}


// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon)
{
    fill(50,50,0);
    rect(t_canyon.x_pos, floorPos_y - 1, t_canyon.width, height - floorPos_y);
}

// Function to check character is over a canyon.

function checkCanyon(t_canyon)
{  
    if(realPos + 45 > t_canyon.x_pos && realPos + 45 < t_canyon.x_pos + t_canyon.width)
        {
        if(CharacterY >= floorPos_y)
            {
               isFalling = true;
            }
        }

}

// ----------------------------------
// Pick-up render and check functions
// ----------------------------------

// Function to draw pick-up objects.
function drawJewel(t_jewel)
{
    if(!t_jewel.isFound)
    {
      fill(200, 0, 0);
 stroke(0)
   strokeWeight(1);
 triangle(t_jewel.x_pos+100, t_jewel.y_pos+400, t_jewel.x_pos+80, t_jewel.y_pos+400, t_jewel.x_pos+90, t_jewel.y_pos+390);
 triangle(t_jewel.x_pos+80, t_jewel.y_pos+400, t_jewel.x_pos+90, t_jewel.y_pos+390, t_jewel.x_pos+80, t_jewel.y_pos+390);
 triangle(t_jewel.x_pos+100, t_jewel.y_pos+400, t_jewel.x_pos+90, t_jewel.y_pos+390, t_jewel.x_pos+100, t_jewel.y_pos+390);
 triangle(t_jewel.x_pos+100, t_jewel.y_pos+400, t_jewel.x_pos+100, t_jewel.y_pos+390, t_jewel.x_pos+110, t_jewel.y_pos+400);
triangle(t_jewel.x_pos+80, t_jewel.y_pos+400, t_jewel.x_pos+80, t_jewel.y_pos+390, t_jewel.x_pos+70, t_jewel.y_pos+400);
 triangle(t_jewel.x_pos+80, t_jewel.y_pos+400, t_jewel.x_pos+70, t_jewel.y_pos+400, t_jewel.x_pos+90, t_jewel.y_pos+425);
 triangle(t_jewel.x_pos+100, t_jewel.y_pos+400, t_jewel.x_pos+110, t_jewel.y_pos+400, t_jewel.x_pos+90, t_jewel.y_pos+425);
 triangle(t_jewel.x_pos+80, t_jewel.y_pos+400, t_jewel.x_pos+100, t_jewel.y_pos+400, t_jewel.x_pos+90, t_jewel.y_pos+425);
        noStroke();   
    }
}

// Function to check character has picked up an item.
function checkJewel(t_jewel)
{
    if(realPos - 100 < t_jewel.x_pos + t_jewel.size && realPos - 100 > t_jewel.x_pos - t_jewel.size)
        {
            if(CharacterY <= floorPos_y)
                
            {
            if(!t_jewel.isFound)
            {
                t_jewel.isFound= true;
                score += 1;
                console.log(score);
            }
            }

        }
}

function checkPlayerWon()
{
    if(score == t_jewel.length)
        {
            isWon = true;
            console.log("YOU WIN, WOW! HOW?")
            return;

        }
        
}
function checkPlayerDied()
{
    if(CharacterY > height)
        {
            playerDied();
        }
}

function playerDied(){
console.log("YOU ARE DEAD");
    if(lives > 0)
    { 
      lives -= 1;
                  
        startGame();
        score = 0;
    }
    else
    {
        isLost = true;

    }
}

function nextLevel()
{
    // DO NOT CHANGE THIS FUNCTION!
    console.log('next level');
}
