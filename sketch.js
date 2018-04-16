let cnv;
let radius = 10;
let vertices = 4;
function setup() {
  cnv = createCanvas(innerWidth, innerHeight);
  cnv.parent('p5Sketch');
}

function draw() {
  background(51);
  noFill();
  stroke(0, 255, 255);

  let value = document.getElementById('vertices').value;
  vertices = value;
  for (let i = 1; i <= 10; i++) {
    polygon(vertices, radius * i, width / 2, height / 2);
  }
}

// rect(x, y, 300, 500);

function polygon(vert, r, posX, posY) {
  beginShape();
  for (let i = 0; i < vert; i++) {
    let angle = map(i, 0, vert, 0, TWO_PI);
    let x = cos(angle) * r + posX;
    let y = sin(angle) * (r / 2) + posY;
    vertex(x, y);
  }
  endShape(CLOSE);
}

function windowResized() {
  resizeCanvas(innerWidth, innerHeight);
}