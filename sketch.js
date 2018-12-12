var canvas, phSymbols;

function setup() {
  canvas = createCanvas(1250, 800);
  canvas.position(100, 200);
  background(fff);
}

function mouseClicked() {
  var phArray = ['☆', '☀', '⌇', '⋱', '⋰'];
  var phElement = random(phArray);
  var x = random(10, 1250);
  var y = random(150, 1400);

  phSymbols = createP(phElement, 200, 100);
  phSymbols.position(x, y);
}
