var pc, npc;


function setup() {
  createCanvas(800,100);
  pc = createSprite(30, 60, 20, 20);
  npc = createSprite(30,30,20,20);
}

function draw() {
  background(0,0,0);
  if(keyDown(RIGHT_ARROW)){
    pc.x = pc.x +5  
    npc.velocityX = random(1,6);
  }

  if(pc.x > 790 || npc.x > 790){
    pc.velocityX = 0;
    npc.velocityX =0;
  }
  drawSprites();
}