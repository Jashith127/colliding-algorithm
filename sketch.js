var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600, 400, 50, 80);
  fixedRect.shapeColor="green";
  fixedRect.debug=true
  movingRect=createSprite(800, 200,80 ,50);
  movingRect.shapeColor="green";
  movingRect.debug=true
}

function draw() {
  background(255,255,255); 
  movingRect.x=mouseX;
  movingRect.y=mouseY; 

  if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2 && fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2 && movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2 && fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor='red';
  }
  else {
    fixedRect.shapeColor='green';
    movingRect.shapeColor='green';
  }

  drawSprites();
}