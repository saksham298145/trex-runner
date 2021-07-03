var ground,groundimage
var trex ,trex_running;
function preload(){
trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  groundimage=loadImage("ground2.png")


}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,160,20,50)
 trex.addAnimation("running",trex_running)
edges=createEdgeSprites()

//creating ground sprite
ground=createSprite(200,180,400,20)
ground.addImage("ground",groundimage)
}

function draw(){
  background("white")

  //making trex jump
  if (keyDown("space")){
    trex.velocityY=-5
    
  }
  //adding gravity 
  trex.velocityY+=0.5
  //making trex stay on ground/screen
trex.collide(ground)

ground.velocityX=-8
trex.scale=0.5
console.log(ground.x)
//making the ground infinite
if (ground.x<0){


  ground.x=ground.width/2
}
  drawSprites()

}
