let cnv;
function setup() {
  cnv = createCanvas(innerWidth, innerHeight);
  cnv.parent('p5Sketch');
}

function draw() {
  background(51);
  // put drawing code here
}

function windowResized(){
  resizeCanvas(innerWidth, innerHeight);
}