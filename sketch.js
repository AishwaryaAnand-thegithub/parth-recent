var info = new Date();
var date = info.toDateString();
var time = info.toTimeString();
var hr = info.getHours();
var input = createInput('enter your name')
var button, buttonImage;

function preload(){
  buttonImage = loadImage("click.png")
}

function setup(){
  createCanvas(400,400);
  button = createSprite(200,200,50,50);
  button.scale= 0.5
  button.addImage(buttonImage);
  button.visible = true;
}

function draw(){
  background(220);
  text("Click to know subject details",130,20);
  text("Date: "+date, 30,50);
  text("Time: "+time ,30,70)

  if(mousePressedOver(button) && hr===11){
      display();
  }
  drawSprites();
}

function display(){
  button.visible = false;
  text("English I", 200,200);
  text("Meeting ID: ", 200,230);
  text("Meeting password: ", 200,250);
  text("Meeting Link: ",200, 270)
}

