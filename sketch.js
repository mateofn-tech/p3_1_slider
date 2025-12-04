let slider;
let circleSize = 50; // tamaño inicial

function setup() {
  // Crear canvas
  let canvas = createCanvas(400, 400);
  canvas.parent('canvasWrapper'); // si quieres ponerlo en un div

  background(0, 31, 63); // fondo azul oscuro

  // Crear slider: mínimo 10, máximo 200, valor inicial 50
  slider = createSlider(10, 200, circleSize);
  slider.position(20, 20);
  slider.style('width', '200px');
}

function draw() {
  background(0, 31, 63); // refresca el fondo cada frame

  // Actualizar tamaño desde el slider
  circleSize = slider.value();

  // Dibujar círculo en el centro
  fill(0, 150, 255); // color frío
  noStroke();
  circle(width / 2, height / 2, circleSize);
}
