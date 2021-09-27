var player, ground
function setup(){
    createCanvas(1000,500)
    player = createSprite(60,450,30,20)
    ground = createSprite(200,450,800,10)
    ground.velocityX = -5
}
function draw(){
background("yellow")
     if (keyDown("w")){
      player.velocityY = -12

       }
player.velocityY += 0.8
player.collide(ground)
if(ground.x<0){
    ground.x = ground.width/2
}
     drawSprites()
}