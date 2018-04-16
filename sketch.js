let cnv;
let radius = 20;
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
  inc = PI / 50;
}

function draw() {
  background(51);
  noFill();
  strokeWeight(3)
  stroke(0, 255, 255);
  // get the values from the HTML sliders
  vertices = document.getElementById('vertices').value;
  period = document.getElementById('frequency').value;
  waveHeight = document.getElementById('height').value;
  polygonNum = document.getElementById('number').value;
  for (let i = 1; i <= polygonNum; i++) {
    waveFreq = map(i, 0, polygonNum, 0, TWO_PI * period);
    let y = (height / 2) + (sin(wave + waveFreq) * waveHeight);
    polygon(vertices, radius * i, 5 * i, width / 2, y);
  }
  wave += inc;
}

// rect(x, y, 300, 500);

function polygon(vert, r, offset, posX, posY) {
  beginShape(POINTS);
  for (let i = 0; i < vert; i++) {
    let angle = map(i, 0, vert, 0 + offset, TWO_PI + offset);
    let x = cos(angle) * r + posX;
    let y = sin(angle) * (r / 2) + posY;
    vertex(x, y);
  }
  endShape(CLOSE);
}

function windowResized() {
  resizeCanvas(innerWidth, innerHeight);
}