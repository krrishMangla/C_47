var board;
var arrowImg,arrow;
var redTokken,yellowTokken;
var t1,t2,t3,t4,t5;
var strikerImg,striker;
var boderG,wood1,wood2,wood3,wood4;
var score = 0;
var canFire = true;
var pushStrength = 0;



function preload()
{
 board = loadImage("board.png");
 
 redTokken = loadImage("red.png");
 yellowTokken = loadImage("yellow.png");

 arrowImg = loadAnimation("arrow1.png","arrow2.png","arrow3.png");

 strikerImg = loadImage("striker.png");
}


function setup()
{
  var canvas = createCanvas(400,400);

  boderG = new Group();
  

  wood1 = createSprite(200,0,400,52);
  wood1.shapeColor = ("#68482f");
  boderG.add(wood1);

  wood2 = createSprite(400,200,52,400);
  wood2.shapeColor = ("#68482f");
  boderG.add(wood2);

  wood3 = createSprite(200,400,400,52);
  wood3.shapeColor = ("#68482f");
  boderG.add(wood3);

  wood4 = createSprite(0,200,52,400);
  wood4.shapeColor = ("#68482f");
  boderG.add(wood4);

  boderG.bounciness = 0.5;
  
  striker = createSprite(200,310);
  striker.scale = 0.1;
  striker.addImage("strikerImg",strikerImg);
  //striker.debug = true;
  //striker.setCollider('circle',0,0,9);
  striker.rotation = 250;
  
  t1 = createSprite(200,200);
  t1.addImage("queen",yellowTokken);
  t1.scale = 0.15;
  //t1.debug = true;

  t2 = createSprite(200,160);
  t2.addImage("redT",redTokken);
  t2.scale = 0.15;

  t3 = createSprite(200,240);
  t3.addImage("redT",redTokken);
  t3.scale = 0.15;

  t4 = createSprite(240,200);
  t4.addImage("redT",redTokken);
  t4.scale = 0.15;

  t5 = createSprite(160,200);
  t5.addImage("redT",redTokken);
  t5.scale = 0.15;

  arrow = createSprite(200,250);
  arrow.addAnimation("arrow",arrowImg);
  arrow.scale = 0.35;
  arrow.visible = false;
  arrow.rotateToDirection = true;
  arrow.pause();



}


function draw()
{
 background(board);
 
 fill(0);
 text(mouseX +","+mouseY ,mouseX,mouseY);

  striker.bounceOff(boderG);

  t1.bounceOff(boderG);
  t2.bounceOff(boderG);
  t3.bounceOff(boderG);
  t4.bounceOff(boderG);
  t5.bounceOff(boderG);

  striker.bounceOff(t1);
  striker.bounceOff(t2);
  striker.bounceOff(t3);
  striker.bounceOff(t4);
  striker.bounceOff(t5);

  t1.bounceOff(t2);
  t1.bounceOff(t3);
  t1.bounceOff(t4);
  t1.bounceOff(t5);

  t2.bounceOff(t3);
  t2.bounceOff(t4);
  t2.bounceOff(t5);

  t3.bounceOff(t4);
  t3.bounceOff(t5);

  t4.bounceOff(t5);
 
  drawSprites();
  
  textSize(20);
  text("Score: "+score,85,20);

}
