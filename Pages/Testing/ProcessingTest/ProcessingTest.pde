void setup(){
  size(400,400);
  frameRate(1000);
}

void draw(){
  background(50);
  noStroke();
  fill(200);
  noSmooth();
  textSize(20);
  textAlign(CENTER,CENTER);
  
  text("This .pde is stored in the current directory", 200,150);
  text("Framerate: "+frameRate,200,250);
}