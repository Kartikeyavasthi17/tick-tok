var hr
var mn
var sc 
var scAngle;
var mnAngle;
var hrAngle;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)
}

function draw() {
  background(0,0,0);  

  translate(400,200)
  rotate(-90)

  hr=hour();
  mn=minute();
  sc=second();

  scAngle= map(sc,0,60,0,360);
  console.log(scAngle);
  minAngle= map(mn,0,60,0,360);
  hrAngle= map(hr,0,23,0,360);

  push();
  stroke(255,0,0);
  strokeWeight(7);
  rotate(scAngle);
  line(0,0,100,0);
  pop();

  push();
  stroke(0,0,255);
  strokeWeight(7);
  rotate(minAngle);
  line(0,0,80,0);
  pop();

  push();
  stroke(0,255,0);
  strokeWeight(7);
  rotate(hrAngle);
  line(0,0,60,0);
  pop();

  noFill();
  stroke(255,0,0);
  strokeWeight(5)
  arc(0,0,270,270,0,scAngle);
  
  noFill();
  stroke(0,0,255);
  strokeWeight(5)
  arc(0,0,250,250,0,minAngle);

  noFill();
  stroke(0,255,0);
  strokeWeight(5)
  arc(0,0,230,230,0,hrAngle);

  drawSprites();
}