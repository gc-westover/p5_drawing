var x1;
var x2;
var y1;
var y2;

function setup() {
  var canvas = createCanvas(1000, 700);
  background(51);
  canvas.parent("sketch");
}

function draw() {
  stroke(255);
  strokeWeight(1);
  x1 = mouseX;
  y1 = mouseY;
  if (mouseIsPressed == true) {
    line(x1, y1, x2, y2);
  }
  x2 = mouseX;
  y2 = mouseY;

  if (keyIsPressed == true) {
    background(51);
  }
}
