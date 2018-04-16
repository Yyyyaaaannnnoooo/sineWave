let cnv;
let radius = 10;
let vertices = 4;
let inc;
let wave = 0;
let waveHeight = 10;
let waveFreq = 0;
let period = 3;
let polygonNum = 30;
function setup() {
  cnv = createCanvas(innerWidth, innerHeight);
  cnv.parent('p5Sketch');
  inc = PI / 30;
}

function draw() {
  background(51);
  noFill();
  stroke(0, 255, 255);

  let value = document.getElementById('vertices').value;
  vertices = value;
  for (let i = 1; i <= polygonNum; i++) {
    waveFreq = map(i, 0, polygonNum, 0, TWO_PI * period);
    let y = (height / 2) + (sin(wave + waveFreq) * waveHeight);
    polygon(vertices, radius * i, width / 2, y);
  }
  wave += inc;
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