var bg;
var platform;
var platformIMG;
var tile1;
var tile2;
var tile3;  
var player,player_imgl,player_stand;
function preload()
{
bg=loadImage("Backgrounds/TheGhouls.png");
tile1=loadImage("platforms/false platform.png")
tile2=loadImage("platforms/hard platform.png")
player_stand=loadAnimation("walk/one.png.png","walk/two.png.png","walk/three.png.png","walk/four.png.png","walk/five.png.png")
   player_img=loadAnimation("attack/one.png.png","attack/two.png.png","attack/three.png.png","attack/four.png.png","attack/five.png.png","attack/six.png.png","attack/seven.png.png")
  }
function setup() {
  createCanvas(displayWidth,displayHeight);
  platform= createSprite(displayWidth/2,displayHeight/2-50);
 platform.addImage(tile1);

  platform2= createSprite(displayWidth/2-50,displayHeight/2+200);
  platform2.addImage(tile2);
  platform2.scale=3;
player=createSprite(100,500);
  player.addAnimation("player1",player_stand);
  player.addAnimation("player2",player_img);
  player.scale=0.3;
}

function draw() {
  background(bg);  
  if(keyDown(RIGHT_ARROW)){
    player.changeAnimation("player2",player_img);
    player.x += 10;
  }else if(keyDown(RIGHT_ARROW) === false){
    player.changeAnimation("player1",player_stand);
  }
  drawSprites();
}