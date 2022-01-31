var box;
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200.50,50);
}

function draw() 
{
  background(30);
  if (keyIsDown(UP_ARROW)){
box.position.y=box.position.y-6;
  }
drawSprites();
}





