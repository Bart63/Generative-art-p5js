var a=0.4, b=-1.3 , c=2, d=-2.5;
var aSlider, bSlider, cSlider, dSlider;
var RSlider, GSlider, BSlider;
var x=1, y=1;

function setup() {
  createP('4 slajdery do zmiennych a, b, c, d:');
  aSlider = createSlider(-3, 3, a, 0.001);
  bSlider = createSlider(-3, 3, b, 0.001);
  cSlider = createSlider(-3, 3, c, 0.001);
  dSlider = createSlider(-3, 3, d, 0.001);
  createP('3 slajdery do zmiany RGB:')
  RSlider = createSlider(0, 255, 0, 0.001);
  GSlider = createSlider(0, 255, 0, 0.001);
  BSlider = createSlider(0, 255, 0, 0.001);
  createP('Przycisk do resetu canvasu:');
  var myButton = createButton("Reset");
  myButton.mousePressed(function() {
    a = aSlider.value();
    b = bSlider.value();
    c = cSlider.value();
    d = dSlider.value();
    background(255);
  })
  createCanvas(500, 500);
}

function draw() {
  stroke(RSlider.value(), GSlider.value(), BSlider.value(), 50);
  for(var i=0; i<1000; i++){
    var oldX = x;
    var oldY = y;
    x = sin(a*oldY)-cos(b*oldX);
    y = sin(c*oldX)-cos(d*oldY);
    var scaledX = map(x, -2, 2, 0, width);
    var scaledY = map(y, -2, 2, 0, height);
    point(scaledX, scaledY);
  }
}