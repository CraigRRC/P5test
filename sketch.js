// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

function draw() {
  background(220);
  directionalLight(255, 255, 255, -(mouseX - width / 2), -(mouseY - height / 2), 0)
  translate(0, sin(frameCount * 0.01) * height / 4, 0);
  sphere(200);
  console.log(mouseX);
}
