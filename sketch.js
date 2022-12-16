var trex, trex_running;
var ground, groundImage;
function preload(){
    trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
    groundImage = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200);
  
  //crie um sprite de trex
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);

  ground = createSprite(200,180,400,20);

  //Tamanho do T-Rex
  trex.scale = 0.5; 
  trex.x = 50

}

function draw(){
  background(220)
  
  //Saltar
  if(keyDown("space")){
    trex.velocityY = -10;
  }

  //Gravidade
  trex.velocityY = trex.velocityY + 0.8

  //Não caia 
  trex.collide(ground);
    drawSprites();
}
