var path;
var boy;
var boundary1, boundary2;


function preload(){

  pathImg = loadImage("path.png");
  runningBoy = loadAnimation("Runner-1.png","Runner-2.png")

}

function setup(){
  createCanvas(400,400);
}

var path;
var boy;
var boundary1, boundary2;
var pathImg,runningBoy;

function preload(){

  pathImg = loadImage("path.png");
  runningBoy = loadAnimation("Runner-1.png","Runner-2.png")

}

function setup(){
  createCanvas(400,400);

path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2

boy=createSprite(180,340,30,30);
boy.addAnimation("running",runningBoy);
boy.scale=0.08;

boundary1=createSprite(0,0,100,800);
boundary1.visibile = false;

boundary2=createSprite(410,0,100,800);
boundary2.visibile = false;

}

function draw() {
  background(0);

  boy.x = World.mouseX;

  boy.collide(boundary1);
  boy.collide(boundary2);

if(path.y > 400){
path.y = height/2
}
  drawSprites();
}
 