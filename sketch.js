var goku,ground;


function preload(){
  gokuimg=loadAnimation("goku running 2.png");
  groundimg=loadImage("groundimg.jpg")
}
function setup(){
  createCanvas(windowWidth,windowHeight)
  goku= createSprite(200,200,50,50)
  goku.addAnimation("running",gokuimg)
  goku.scale=0.3

  ground=createSprite(width/2,height/1.3,9000,350)
  ground.addImage(groundimg)
 
}
function draw(){
  background("black")
 
 goku.collide(ground)


  drawSprites()
} 