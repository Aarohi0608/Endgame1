var space,spaceImg;
var time,timeImg;
var soul,soulmg;
var mind,mindImg;
var power,powerImg;
var reality,realityImg;
var thanos,thanosImg;
var cap,capImg;
var iron,ironImg;
var thor,thorImg;
var bp,bpImg;
var gameState = 0;
var sofia;
var end;
var gameover,gm;
var ir,irImg;
var chit,chitImg;
var rl,rlImg;
var bl,blImg;
var gl,glImg;
var laser;
var lsrs;
var lsresGroup;
var chitGroup;
var chitScore = 15;
var ar,arImg;
var bw,bwImg;
var aes,aesImg;
var ase;
var crn = 15;
var baes,bsaImg;
var mjlr = 15;
var alnr = 15;

function preload(){

 spaceImg = loadImage("space.jpg");
 timeImg = loadImage("time.jpg");
 soulImg = loadImage("soul.jpg");
 mindImg = loadImage("mind.jpg");
 powerImg = loadImage("power.jpg");
 realityImg = loadImage("reality.jpg");
  
  capImg = loadImage("cap.jpg");
  ironImg = loadImage("iron.jpg");
  thorImg = loadImage("thor.jpg");
  hulkImg = loadImage("hulk.jpg");
  hawkImg = loadImage("hawk.jpg");
  blackImg = loadImage("black.jpg");
  
   thanosImg = loadImage("thanos.jpg");
   
     bpImg = loadImage("bp.jpg");
  
  gm = loadImage("gameover.png");
  
  irImg = loadImage("irokt1.jpg");
  chitImg = loadImage("rechit.jpg");
  rlImg = loadImage("rl.jpg");
  blImg = loadImage("bl.jpg");
  glImg = loadImage("gl.jpg");
  
  arImg = loadImage("rarrw.jpg");
  bwImg = loadImage("bow.jpg");
  aesImg = loadImage("aes.jpg");
  bsaImg = loadImage("bas.jpg");
  
  cappImg = loadImage("capp.jpg");
  bebImg = loadImage("beb.jpg");
  bbImg = loadImage("yb.jpg");
  pbImg = loadImage("pb.jpg");
  pibImg = loadImage("pib.jpg");
  gbImg = loadImage("gb.jpg");
  csImg = loadImage("newcs.jpg");
  blockImg = loadImage("capplay.jpg");
  mjlImg = loadImage("mjl.jpg");
  al1Img = loadImage("al1.jpg");
  al2Img = loadImage("al2.jpg");
  al3Img = loadImage("al3.jpg");
  
  r1Img = loadImage("r1.jpg");
  r1aImg = loadImage("r1a.jpg");
r1bImg = loadImage("r1b.jpg");
  r1cImg = loadImage("r1c.jpg");
  r1dImg = loadImage("r1d.jpg");
  
    r2Img = loadImage("r2.jpg");
  r2aImg = loadImage("r2a.jpg");
r2bImg = loadImage("r2b.jpg");
  r2cImg = loadImage("r2c.jpg");
  r2dImg = loadImage("r2d.jpg");
  
    r3Img = loadImage("r3.jpg");
  r3aImg = loadImage("r3a.jpg");
r3bImg = loadImage("r3b.jpg");
  r3cImg = loadImage("r3c.jpg");
  r3dImg = loadImage("r3d.jpg");
  
    r4Img = loadImage("r4.jpg");
  r4aImg = loadImage("r4a.jpg");
r4bImg = loadImage("r4b.jpg");
  r4cImg = loadImage("r4c.jpg");
  r4dImg = loadImage("r4d.jpg");
  
  introImg = loadImage("intro.jpg");
  endgImg = loadImage("endg.jpg");

}

function setup() { 
  
createCanvas(400,400);
  
  createEdgeSprites();
  
  cardboardGroup = createGroup();
  lsrsGroup = createGroup();
  chitGroup = createGroup();
  laserGroup = createGroup();
  aesGroup =createGroup();
  arwGroup = createGroup();
  blockGroup = createGroup();
  alienGroup = createGroup();
  ques1Group = createGroup();
  ques2Group = createGroup();
  ques3Group = createGroup();
  ques4Group = createGroup();
  stopGroup = createGroup();
  
  bp = createSprite(15,15,15,15);
   bp.addImage(bpImg);
   bp.scale = 0.04;
  
  space = createSprite(380,370,10,10);
space.addImage(spaceImg);
space.scale = 0.3; 
  
  gameover = createSprite(200,200,20,20);
    gameover.addImage(gm);
  
  black = createSprite(80,130,20,20);
  black.addImage(blackImg);
  black.scale = 0.1;
    
  iron = createSprite(80,130,20,20);
  iron.addImage(ironImg);
  iron.scale = 0.15;
    
  hawk = createSprite(80,130,20,20);
  hawk.addImage(hawkImg);
  hawk.scale = 0.1;
    
  cap = createSprite(80,130,20,20);
  cap.addImage(capImg);
  cap.scale = 0.1;
    
 thor = createSprite(80,130,20,20);
  thor.addImage(thorImg);
  thor.scale = 0.1;
    
hulk = createSprite(80,130,20,20);
  hulk.addImage(hulkImg);
  hulk.scale = 0.1;
    
  thanos = createSprite(80,130,20,20);
  thanos.addImage(thanosImg);
  thanos.scale = 0.5;
  
  ir = createSprite(45,355,20,20);
  ir.addImage(irImg);
  
  power = createSprite(200,10,10,10);
  power.addImage(powerImg);
  power.scale = 0.3;
    
  mind = createSprite(200,10,10,10);
  mind.addImage(mindImg);
  mind.scale = 0.3;

  bw = createSprite(40,200,20,20);
  bw.addImage(bwImg);
  bw.scale = 0.4;
  
   arrow = createSprite(0,0,20,20);
    arrow.addImage(arImg);
    arrow.scale = 0.3;
  
  capp = createSprite(200,350,20,20);
  capp.addImage(cappImg);
  capp.scale = 0.06;
  
  soul = createSprite(200,-20,10,10);
  soul.addImage(soulImg);
  soul.scale = 0.3;
  
   mjl = createSprite(200,225,20,20);
    mjl.addImage(mjlImg);
    mjl.scale = 0.04;
  
  intro = createSprite(200,200,20,20);
    intro.addImage(introImg);
    intro.scale = 0.3;
  
  
  endg = createSprite(200,200,20,20);
    endg.addImage(endgImg);
    endg.scale = 0.35;
  
}

function draw() {
  
  if(gameState === end){
    
    bp.x = 15;
    bp.y = 15;
    bp.visible = false;
    space.visible = false;
  bw.visible = false;
    black.visible = false;
    thanos.visible = false;
    reality.visible = false;
    iron.visible = false;
    hawk.visible = false;
    cap.visible = false;
    thor.visible = false;
    hulk.visible = false;
    ir.visible = false;
    soul.visible = false;
    mind.visible = false;
    power.visible = false;
    capp.visible = false;
    mjl.visible = false;
    arrow.visible = false;
    
    background("black");
    
     fill("white");
   // text("Click Space To Continue", 140,250);
    
    gameover.visible =  true;
    cardboardGroup.destroyEach();
    
    // if(keyDown("space")){
      
    //   gameState = 1;
    //   chitScore = 15;
    //   alnr = 15;
    //   crn = 15;
    // } 
  }
  
  if(gameState === 0){
    
    background("black");
    
    endg.visible = false;
    bp.visible = true;
  space.visible = true;
   gameover.visible = false;
   bw.visible = false;
   black.visible = false;
    thanos.visible = false;
    iron.visible = false;
    hawk.visible = false;
    cap.visible = false;
    thor.visible = false;
    hulk.visible = false;
   ir.visible = false;
   //baes.visible = false;
    capp.visible = false;
   mjl.visible = false;
    bp.visible = false;
    space.visible = false;
    mind.visible = false;
    power.visible = false;
    arrow.visible = false;
    
    if(keyDown("space")){
      
      gameState = 1;
      
    }  
  }
  
 if(gameState === 1){
   
   background("black");
   
   intro.visible = false;
   arrow.visible = false;
   endg.visible = false;
   bp.visible = true;
  space.visible = true;
   gameover.visible = false;
   bw.visible = false;
   black.visible = false;
    thanos.visible = false;
    iron.visible = false;
    hawk.visible = false;
    cap.visible = false;
    thor.visible = false;
    hulk.visible = false;
   ir.visible = false;
    capp.visible = false;
   mjl.visible = false;
    
  bp.velocityX = 0;
  bp.velocityY = 0;
   
   if(bp.x <= 0){
     
     bp.x = 15;
     bp.y = 15;
     
   }
   
   if(bp.y <= 0){
     
     bp.x = 15;
     bp.y = 15;
     
   }
   
   if(bp.x >= 400){
     
     bp.x = 15;
     bp.y = 15;
     
   }
   
   if(bp.y >= 400){
     
     bp.x = 15;
     bp.y = 15;
     
   }
   
   
   if (keyDown(UP_ARROW)) {
     
    bp.y = bp.y + 4;
      
    }
    
     if (keyDown(DOWN_ARROW)) {
     
      bp.y = bp.y + 4;
      
    }
    
     if (keyDown(LEFT_ARROW)) {
      bp.x= bp.x - 4;
     
      
    }
    
     if (keyDown(RIGHT_ARROW)) {
      bp.x= bp.x + 4;
    
       
     }
   
   cardboards();
 
   if(cardboardGroup.isTouching(bp)){
     
    gameState = end;
     
   }
   
   if(bp.isTouching(space)){
     
     gameState = 2;
     
   }  
 } 
  
  if(gameState === 2){
    
    background("black");
    
    cardboardGroup.destroyEach();
    
    thanos.visible = false;
    endg.visible = false;
    arrow.visible = false;
     bw.visible = false;
      black.visible = false;
    iron.visible = false;
    hawk.visible = false;
    cap.visible = false;
    thor.visible = false;
    hulk.visible = false; 
     gameover.visible = false;
     bp.visible = false;
     space.visible = false;
    intro.visible = false;
    ir.visible = true;
     soul.visible = false;
    mind.visible = false;
    power.visible = false;
     capp.visible = false;
    mjl.visible = false;
    
    if(keyDown("UP_ARROW")){
      
      laser = createSprite(0,0,20,20);
      laser.x = ir.x;
      laser.y = ir.y;
      var r = Math.round(random(1,3));
      if(r === 1){
        
        laser.addImage(rlImg);
        
      }else if(r === 2){
        
        laser.addImage(blImg);
        
      }else if(r === 3){
        
        laser.addImage(glImg);
        
        
      }
      
      laser.scale = 0.1;
      
      laser.velocityY = -10;
      laser.lifetime = 150;
      
      laser.depth = ir.depth - 1;
      
      laserGroup.add(laser);
    }
    
    if(keyDown("RIGHT_ARROW")){
      
      ir.x = ir.x +10;
      
    }
    
    if(keyDown("Left_ARROW")){
      
      ir.x = ir.x -10;
      
    }
    
    lsrs();
    chitauri();
    
    if(lsrsGroup.isTouching(ir)){
      
      lsrsGroup.destroyEach();
      chitGroup.destroyEach();
  gameState = end;    
  
    }
    
    if(chitGroup.isTouching(ir)){
      
       lsrsGroup.destroyEach();
      chitGroup.destroyEach();
      gameState = end;
      
    }
    
    if(chitGroup.isTouching(laserGroup)){
      
      chitScore = chitScore - 1;
      chitGroup.destroyEach();
      
    }
    
   if(chitScore === 0){
     
     power.visible = true;
     power.velocityY = 5;
     
     
   } 
    
    if(power.isTouching(ir)){
      
      gameState = 3;
      
    } 
  }
  
  if(gameState === 3){
    
    background("black");
    
    var crn = 15 ;
    thanos.visible = false;
     bw.visible = true;
      black.visible = false;
    iron.visible = false;
    hawk.visible = false;
    cap.visible = false;
    thor.visible = false;
    hulk.visible = false; 
    endg.visible = false;
     gameover.visible = false;
    intro.visible = false;
     bp.visible = false;
     space.visible = false;
    ir.visible = false;
    arrow.visible = true;
     soul.visible = false;
    mind.visible = false;
    power.visible = false;
     capp.visible = false;
   
    mjl.visible = false;
    
    if(keyDown("UP_ARROW")){
      
      bw.y = bw.y - 10;
      
    }
    
    if(keyDown("DOWN_ARROW")){
      
      bw.y = bw.y + 10;
      
    }
    
    arrow.x = bw.x;
    arrow.y = bw.y;
    bw.depth = arrow.depth;
    arrow.depth = arrow.depth+1;
    
    asteroid();
    arws();
    
    if(arwGroup.isTouching(aesGroup)){
      
      aesGroup.destroyEach();
      arwGroup.destroyEach();
      crn = crn - 1;
    }
    
    if(aesGroup.isTouching(bw)){
      
      gameState = end;
      arwGroup.destroyEach();
      
    }
    
    if(crn === 0){
       
    gameState = 4; 
    
    }
    
  }
  
  if(gameState === 4){
    
    background("black");
    
     thanos.visible = false;
     bw.visible = false;
      black.visible = false;
    iron.visible = false;
    hawk.visible = false;
    cap.visible = false;
    thor.visible = false;
    hulk.visible = false; 
     gameover.visible = false;
     bp.visible = false;
     space.visible = false;
    ir.visible = false;
    mind.visible = false;
    intro.visible = false;
    power.visible = false;
    arrow.visible = false;
    //baes.visible = false;
     capp.visible = true;
    mjl.visible = false;
    
    if(keyDown("LEFT_ARROW")){
    
    capp.x = capp.x - 10;
      
  }
    
    if(keyDown("RIGHT_ARROW")){
    
    capp.x = capp.x + 10;
      
  }
    

    blocks();
    
    if(blockGroup.isTouching(capp)){
      
      gameState = end;
      
    }
    
    if(frameCount % 1000 === 0){
    
      soul.visible = true;
      soul.velocityY = 5;
      blockGroup.destroyEach();
      
    }
    
    if(soul.y >= 400){
      
      blockGroup.destroyEach();
      gameState = end;
      
    }
    
    if(soul.isTouching(capp)){
      
      blockGroup.destroyEach();
      gameState = 5;
      
    }
  }
  
  if(gameState === 5){
    
     background("black");
    
     bw.visible = false;
      thanos.visible = false;
    endg.visible = false;
      black.visible = false;
    iron.visible = false;
    hawk.visible = false;
    cap.visible = false;
    thor.visible = false;
    hulk.visible = false; 
     gameover.visible = false;
    intro.visible = false;
     bp.visible = false;
     space.visible = false;
     ir.visible = false;
     power.visible = false;
      mind.visible = false;
      soul.visible = false;
     
      capp.visible = false;
    arrow.visible = false;
    mjl.visible = true;
    
    fill("white");
    text("Enemies left  = " +alnr,10,30);
    
   
    
    stop1 = createSprite(200,60,400,20);
    stop1.shapeColor = "cyan";
     stop2 = createSprite(200,390,400,20);
    stop2.shapeColor = "cyan";
     stop3 = createSprite(390,230,20,360);
    stop3.shapeColor = "cyan";
     stop4 = createSprite(10,230,20,360);
    stop4.shapeColor = "cyan";
    
    stop5 = createSprite(200,125,20,110);
    stop5.shapeColor = "cyan";
    stop6 = createSprite(200,325,20,110);
    stop6.shapeColor = "cyan";
    stop7 = createSprite(20,220,210,20);
    stop7.shapeColor = "cyan";
    stop8 = createSprite(380,220,210,20);
    stop8.shapeColor = "cyan";
    
    if(keyDown("UP_ARROW")){
      
      mjl.y = mjl.y -10;
      
    }
    
    if(keyDown("DOWN_ARROW")){
      
      mjl.y = mjl.y +10;
      
    }
    
    if(keyDown("LEFT_ARROW")){
      
      mjl.x = mjl.x -10;
      
    }
    
    if(keyDown("RIGHT_ARROW")){
      
      mjl.x = mjl.x +10;
      
    }
    
    mjl.bounceOff(stop1);
    mjl.bounceOff(stop5);
    mjl.bounceOff(stop2);
    mjl.bounceOff(stop3);
    mjl.bounceOff(stop4);
    mjl.bounceOff(stop6);
    mjl.bounceOff(stop7);
    mjl.bounceOff(stop8);
    
    stopGroup.add(stop1);
    stopGroup.add(stop2);
    stopGroup.add(stop3);
    stopGroup.add(stop4);
    stopGroup.add(stop5);
    stopGroup.add(stop6);
    stopGroup.add(stop7);
    stopGroup.add(stop8);
    
    aliens();
    
    if(alienGroup.isTouching(mjl)){
      alienGroup.destroyEach();
      alnr = alnr - 1;
      
    }
    
    if(alnr === 0){
      
      mind.visible = true;
      mind.x = 200;
      mind.y =  225;
      mind.lifetime = -1;
      alienGroup.destroyEach();
      
    }
    
    if(mjl.isTouching(mind)){
      
      var g = Math.round(random(1,4));
      if(g === 1){
        
        gameState = 6;
        
      }else if(g === 2){
        
        gameState = 7;
        
      }else if(g === 3){
        
        gameState = 8;
        
      }else if(g === 4){
        
        gameState = 9;
        
      }
      
    }
    
  }
  
  if(gameState === 6){
    
    background("black");
    
    stopGroup.destroyEach();
    
    bp.visible = false;
    space.visible = false;
  bw.visible = false;
    black.visible = false;
    thanos.visible = false;
    iron.visible = false;
    hawk.visible = false;
    cap.visible = false;
    thor.visible = false;
    hulk.visible = false;
    ir.visible = false;
    soul.visible = false;
    mind.visible = false;
intro.visible = false;
    power.visible = false;
   
    capp.visible = false;
    mjl.visible = false;
    gameover.visible = false;
    arrow.visible = false;
  
    ques1();
    
  }
  
  if(gameState === 7){
    
    background("black");
    
    stopGroup.destroyEach();
    
    bp.visible = false;
    space.visible = false;
  bw.visible = false;
    black.visible = false;
    thanos.visible = false;
    iron.visible = false;
    hawk.visible = false;
    cap.visible = false;
    thor.visible = false;
    hulk.visible = false;
    ir.visible = false;
    soul.visible = false;
    mind.visible = false;
  intro.visible = false;
    power.visible = false;
  
    capp.visible = false;
    mjl.visible = false;
    gameover.visible = false;
    arrow.visible = false;
  
    ques2();
    
  }
  
  if(gameState === 8){
    
    background("black");
    
    stopGroup.destroyEach();
    
    bp.visible = false;
    space.visible = false;
  bw.visible = false;
    black.visible = false;
    thanos.visible = false;
    iron.visible = false;
    hawk.visible = false;
    cap.visible = false;
    thor.visible = false;
    hulk.visible = false;
    ir.visible = false;
    soul.visible = false;
    mind.visible = false;
  intro.visible = false;
    power.visible = false;
   
    capp.visible = false;
    mjl.visible = false;
    gameover.visible = false;
    arrow.visible = false;
  
    ques3();
    
  }
  
  if(gameState === 9){
    
    background("black");
    
    stopGroup.destroyEach();
    
    bp.visible = false;
    space.visible = false;
  bw.visible = false;
    black.visible = false;
    thanos.visible = false;
    iron.visible = false;
    hawk.visible = false;
    cap.visible = false;
    thor.visible = false;
    hulk.visible = false;
    ir.visible = false;
    soul.visible = false;
    mind.visible = false;
  intro.visible = false;
    power.visible = false;
    
    capp.visible = false;
    mjl.visible = false;
    gameover.visible = false;
    arrow.visible = false;
  
    ques4();
    
  }
  
  if(gameState === 10){
    
    background("black");
    
     bp.visible = false;
    space.visible = false;
  bw.visible = false;
    black.visible = false;
    thanos.visible = false;
    iron.visible = false;
    hawk.visible = false;
    cap.visible = false;
    thor.visible = false;
    hulk.visible = false;
    ir.visible = false;
    soul.visible = false;
    mind.visible = false;
   
    power.visible = false;
   
    capp.visible = false;
    mjl.visible = false;
    gameover.visible = false;
    arrow.visible = false;
    intro.visible = false;
    endg.visible = true;
    fill("white");
    
    ques3Group.destroyEach();
    ques2Group.destroyEach();
    ques1Group.destroyEach();
    ques4Group.destroyEach();
   
  }
  
  drawSprites();
}

function cardboards(){
  
  var cardboard1 = createSprite(100, 4,25,175);
cardboard1.shapeColor = "purple";

var cardboard2 = createSprite(210,10,110,25);
cardboard2.shapeColor = "yellow";

var cardboard3 = createSprite(5,48,70,25);
cardboard3.shapeColor = "green";

var cardboard4 = createSprite(15,134,100,25);
cardboard4.shapeColor = "orange";

var cardboard5 = createSprite(150, 100,25,100);
cardboard5.shapeColor = "purple";

var cardboard6 = createSprite(263, 100,25,70);
cardboard6.shapeColor = "yellow";

var cardboard7 = createSprite(217, 395,100,25);
cardboard7.shapeColor = "green";

var cardboard8 = createSprite(300,395,25,150);
cardboard8.shapeColor = "orange";

var cardboard9  = createSprite(117,396,25,30);
cardboard9.shapeColor = "purple";

var cardboard10 = createSprite(131, 340,150,25);
cardboard10.shapeColor = "yellow";

var cardboard11 = createSprite(174, 247,25,100);
cardboard11.shapeColor = "green";
   
var cardboard13 = createSprite(113,210,25,50);
cardboard13.shapeColor = "purple";

var cardboard12 = createSprite(20, 395,25,95);
cardboard12.shapeColor = "orange";

var cardboard14 = createSprite(50,240,25,105);
cardboard14.shapeColor = "yellow";

var cardboard15 = createSprite(395,210,65,25);
cardboard15.shapeColor = "green";

var cardboard16 = createSprite(320,242, 25,80);
cardboard16.shapeColor = "orange";

var cardboard17 = createSprite(395, 150,160,25);
cardboard17.shapeColor = "purple";

var cardboard18 = createSprite(240, 220,25,100);
cardboard18.shapeColor = "yellow";

var cardboard19 = createSprite(395, 320,90,25);
cardboard19.shapeColor = "green";

var cardboard20 = createSprite(325, 65,25,77);
cardboard20.shapeColor = "orange";

var cardboard21 = createSprite(387, 40,25,88);
cardboard21.shapeColor = "purple";

var cardboard22 = createSprite(200, 115,25,50);
cardboard22.shapeColor = "purple";
  
  cardboardGroup.add(cardboard20);
   cardboardGroup.add(cardboard1);
   cardboardGroup.add(cardboard2);
   cardboardGroup.add(cardboard3);
   cardboardGroup.add(cardboard4);
   cardboardGroup.add(cardboard5);
   cardboardGroup.add(cardboard6);
   cardboardGroup.add(cardboard7);
   cardboardGroup.add(cardboard8);
   cardboardGroup.add(cardboard9);
   cardboardGroup.add(cardboard10);
   cardboardGroup.add(cardboard11);
  cardboardGroup.add(cardboard12);
   cardboardGroup.add(cardboard13);
   cardboardGroup.add(cardboard14);
   cardboardGroup.add(cardboard15);
   cardboardGroup.add(cardboard16);
   cardboardGroup.add(cardboard17);
   cardboardGroup.add(cardboard18);
   cardboardGroup.add(cardboard19);
   cardboardGroup.add(cardboard21);
   cardboardGroup.add(cardboard22);
   
}

function lsrs(){
  if(frameCount % 100 === 0){
    
   var lsres = createSprite(10,5,20,20);
    lsres.velocityY = 10;
    
    lsres.x = Math.round(random(10,490));
    
    var e = Math.round(random(1,3));
      if(e === 1){
        
        lsres.addImage(rlImg);
        
      }else if(e === 2){
        
        lsres.addImage(blImg);
        
      }else if(e === 3){
        
        lsres.addImage(glImg);
        
        
      }
      
      lsres.scale = 0.1;
      
      lsres.lifetime = 150;
    
    lsrsGroup.add(lsres);
    
  }
 
}

function chitauri(){
  
if(frameCount % 150 === 0){
  
  chit = createSprite(0,0,20,20);
  chit.addImage(chitImg);
  chit.scale = 0.7;
  chit.x = Math.round(random(45,355));
  chit.velocityY = 3;
  chitGroup.add(chit);
}
  
}

function asteroid(){
  
  if(frameCount % 80 === 0){
    
    aes= createSprite(395,0,20,20);
    aes.addImage(aesImg);
    aes.scale = 0.1;
    aes.y = Math.round(random(15,385));
    aes.velocityX = -8;
    aesGroup.add(aes);
    
  }
}

function arws(){
  
  if(keyDown("RIGHT_ARROW")){
    
    ar = createSprite(0,0,20,20);
    ar.addImage(arImg);
    ar.scale = 0.3;
    ar.x = bw.x;
    ar.y = bw.y;
    ar.depth = bw.depth;
    bw.depth = bw.depth + 1;
    ar.velocityX = 10;
    ar.lifetime = 50;
    arwGroup.add(ar);
    
  }
   
}

function blocks(){
  
  if(frameCount % 30 === 0){
    
    block = createSprite(0,0,20,20);
    block.addImage(blockImg);
    block.scale = 0.07;
    block.x = Math.round(random(30,370));
    block.velocityY = 10;
    block.lifetime = 50;
    blockGroup.add(block);
  }
}

function aliens(){
  
  if(frameCount % 50 === 0){
    
    ali = createSprite(0,0,20,20);
    var a = Math.round(random(1,4));
    if(a === 1){
      
      ali.x = 105;
      ali.y = 140;
      
    } else if(a === 2){
      
      ali.x = 295;
      ali.y = 140;
      
    }else  if(a === 3){
      
      ali.x = 105;
      ali.y = 300;
      
    }else  if(a === 4){
      
      ali.x = 295;
      ali.y = 300;
      
    }
    
    var b = Math.round(random(1,3));
    if(b === 1){
      
      ali.addImage(al1Img);
      ali.scale = 0.2;
      
    } else if(b === 2){
      
      ali.addImage(al2Img);
      ali.scale = 0.6;
      
      
    }else  if(b === 3){
      
      ali.addImage(al3Img);
      ali.scale = 0.6;
      
    }
    
    ali.depth = mjl.depth;
    mjl.depth = mjl.depth +1;
   ali.lifetime = 30;
    alienGroup.add(ali);
    
  }
  
}

function ques1(){
  
  r1 = createSprite(200,100,20,20);
  r1.addImage(r1Img);
  r1.scale = 0.4;
  
  r1a  = createSprite(100,250,20,20);
  r1a.addImage(r1aImg);
  r1a.scale = 0.3;
  
  r1b  = createSprite(300,250,20,20);
  r1b.addImage(r1bImg);
  r1b.scale = 0.1;
  
  r1c  = createSprite(100,350,20,20);
  r1c.addImage(r1cImg);
  r1c.scale = 0.3;
  
    r1d  = createSprite(300,350,20,20);
  r1d.addImage(r1dImg);
  r1d.scale = 0.15;
  
  ques1Group.add(r1);
  ques1Group.add(r1a);
   ques1Group.add(r1b);
   ques1Group.add(r1c);
   ques1Group.add(r1d);
  
  
if(mousePressedOver(r1a)){
     
reality = createSprite(200,10,10,10);
  reality.addImage(realityImg);
  reality.scale = 0.3;
  
   reality.visible = true;
  reality.x = 200;
  reality.y = 300;
  
}
  
  if(mousePressedOver(reality)){
    
  gameState = 10;
    
  }
  
   if(mousePressedOver(r1b) ){
    
    gameState = end;
    ques1Group.destroyEach();
    
  }
  
  if( mousePressedOver(r1c)  ){
    
    gameState = end;
    ques1Group.destroyEach();
    
  }
  
  if( mousePressedOver(r1d) ){
    
    gameState = end;
    ques1Group.destroyEach();
   
    
  }
  
  
}

function ques2(){
  
  ques1Group.destroyEach();
  
  r2 = createSprite(200,100,20,20);
  r2.addImage(r2Img);
  r2.scale = 0.4;
  
  r2a  = createSprite(100,250,20,20);
  r2a.addImage(r2aImg);
  r2a.scale = 0.3;
  
  r2b  = createSprite(300,250,20,20);
  r2b.addImage(r2bImg);
  r2b.scale = 0.05;
  
  r2c  = createSprite(100,350,20,20);
  r2c.addImage(r2cImg);
  r2c.scale = 0.3;
  
    r2d  = createSprite(300,350,20,20);
  r2d.addImage(r2dImg);
  r2d.scale = 0.1; 
  
   ques2Group.add(r2);
  ques2Group.add(r2a);
   ques2Group.add(r2b);
   ques2Group.add(r2c);
   ques2Group.add(r2d);
  
  if(mousePressedOver(r2a) || mousePressedOver(r2b) || mousePressedOver(r2d) ){
    
    gameState = end;
    ques2Group.destroyEach();
    
  }
  
   
  if( mousePressedOver(r2b)){
    
    gameState = end;
    ques2Group.destroyEach();
    
  }
  
   
  if( mousePressedOver(r2d) ){
    
    gameState = end;
    ques2Group.destroyEach();
    
  }
  

  if(mousePressedOver(r2c)){
     
reality = createSprite(200,10,10,10);
  reality.addImage(realityImg);
  reality.scale = 0.3;
  
   
  reality.x = 200;
  reality.y = 300;
  
}
  
  
  if(mousePressedOver(reality)){
    
    gameState = 10;
    
  }
  
}

function ques3(){
  
  ques2Group.destroyEach();
  
   r3 = createSprite(200,100,20,20);
  r3.addImage(r3Img);
  r3.scale = 0.5;
  
  r3a  = createSprite(100,250,20,20);
  r3a.addImage(r3aImg);
  r3a.scale = 0.3;
  
  r3b  = createSprite(300,250,20,20);
  r3b.addImage(r3bImg);
  r3b.scale = 0.1;
  
  r3c  = createSprite(100,350,20,20);
  r3c.addImage(r3cImg);
  r3c.scale = 0.08;
  
    r3d  = createSprite(300,350,20,20);
  r3d.addImage(r3dImg);
  r3d.scale = 0.15;
  
   ques3Group.add(r3);
  ques3Group.add(r3a);
   ques3Group.add(r3b);
   ques3Group.add(r3c);
   ques3Group.add(r3d);

if(mousePressedOver(r3a) || mousePressedOver(r3c) || mousePressedOver(r3b) ){
    
    gameState = end;
  ques3Group.destroyEach();
    
  }
  
if(mousePressedOver(r3d)){
     
reality = createSprite(200,10,10,10);
  reality.addImage(realityImg);
  reality.scale = 0.3;
  
   reality.visible = true;
  reality.x = 200;
  reality.y = 300;
  
}
  
  if(mousePressedOver(reality)){
    
    gameState = 10;
    
  }
  
}

function ques4(){
  
  ques3Group.destroyEach();
  
   r4 = createSprite(200,100,20,20);
  r4.addImage(r4Img);
  r4.scale = 0.5;
  
  r4a  = createSprite(100,250,20,20);
  r4a.addImage(r4aImg);
  r4a.scale = 0.05;
  
  r4b  = createSprite(300,250,20,20);
  r4b.addImage(r4bImg);
  r4b.scale = 0.1;
  
  r4c  = createSprite(100,350,20,20);
  r4c.addImage(r4cImg);
  r4c.scale = 0.3;
  
    r4d  = createSprite(300,350,20,20);
  r4d.addImage(r4dImg);
  r4d.scale = 0.3;
  
   ques4Group.add(r4);
  ques4Group.add(r4a);
   ques4Group.add(r4b);
   ques4Group.add(r4c);
   ques4Group.add(r4d);
  
  if(mousePressedOver(r4a) || mousePressedOver(r4c) || mousePressedOver(r4d) ){
    
    gameState = end;
    ques4Group.destroyEach();
    
  }
  
  if(mousePressedOver(r4b)){
     
reality= createSprite(200,10,10,10);
  reality.addImage(realityImg);
  reality.scale = 0.3;
  
   reality.visible = true;
  reality.x = 200;
  reality.y = 300;
  
}
  
  if(mousePressedOver(reality)){
    
    gameState = 10;
    
  }
  
}