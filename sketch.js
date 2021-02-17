var x1;
var x2;
var y1;
var y2;
let colorPicker;

function setup() {
  const canvas = createCanvas(1200, 700);
  background(51);
  colorPicker = createColorPicker('#ffffff');
  // colorPicker.position(width/2 - 50, height + 5);
  // canvas.parent("sketch");
}

function draw() {
  x1 = mouseX;
  y1 = mouseY;
  if (mouseIsPressed == true) {
    if (mouseButton == LEFT) {
      stroke(colorPicker.color());
      strokeWeight(2);
      line(x1, y1, x2, y2);
    }
    else if (mouseButton == RIGHT) {
      console.log("Right click!");
      stroke(51);
      fill(51);
      ellipse(mouseX,mouseY,20);
    }
  }
  x2 = mouseX;
  y2 = mouseY;

  if (keyIsPressed == true) {
    if (keyCode == 32) {
      background(51);
    }
  }
}
