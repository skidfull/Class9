
var block

//creating a fuction setup
function setup() {
  createCanvas(400,400);//defining canvas area by 400 by 400
  block = createSprite(200, 200, 20, 20)
  

}
//creating function draw
function draw() 
{
  background(30);//setting background
drawSprites()

if(keyIsDown(UP_ARROW)){
  block.y = block.y-5
}

if(keyIsDown(DOWN_ARROW)){
  block.y = block.y+5
}


if(keyIsDown(RIGHT_ARROW)){
  block.x = block.x+5
}

if(keyIsDown(LEFT_ARROW)){
  block.x = block.x-5
}
}




