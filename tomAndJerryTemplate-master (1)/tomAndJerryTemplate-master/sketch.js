var tom, tomImg;
var jerry, jerryImg;
var garden, gardenImg;
var jerryImg1,jerryImg2;
var tomImg2,tomImg4;

function preload() {
    //load the images here
    gardenImg=loadImage("images/garden.png");


    tomImg1=loadAnimation("images/cat1.png");

    tomImg2=loadImage("images/cat2.png","images/cat3.png");
    tomImg3=loadImage("images/cat4.png");


    jerryImg1=loadImage("images/mouse1.png");
    jerryImg2=loadImage("images/mouse2.png","images/mouse3.png");
    jerryImg3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    tom=createSprite(870,600,20,20);
    tom.addAnimation("tomSleeping",tomImg1);
    tom.scale=0.2;

    jerry=createSprite(200,600,20,20);
    jerry.addAnimation("jerryStanding",jerryImg1);
    jerry.scale=0.1;

}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x<(tom.width - jerry.width)/2){
    
     tom.velocityX=0;
     tom.addAnimation("tomLastImage",tomImg3);
     tom.x= 300;
     tom.scale=0.2;
     tom.changeAnimation("tomLastImage");

     jerry.addAnimation("jerryLastImage",jerryImg1);
     jerry.scale=0.15;
     jerry.changeAnimation("jerryLastImage");

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


 if(keyCode===LEFT_ARROW){
    tom.velocityX=-5;
    tom.addAnimation("tomRunning",tomImg2);
    tom.changeAnimation("tomRunning");
    
 
 jerry.addAnimation("jerryTeasing",jerryImg2);
 jerry.fameDelay=25;
 jerry.changeAnimation("jerryTeasing")
      
 }
}