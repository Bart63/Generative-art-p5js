function setup(){
  createCanvas(500, 500);
  background(10, 10, 100);
  noLoop();
  colorMode(HSB);
}

function draw() {
  for(var i=0; i<width; i++) {
    for(var j=0; j<height; j++){
      stroke(getJuliaColor(i,j), 100, 100);
      point(i,j);
    }
  }
}

function getJuliaColor(x,y) {
  var zoomFactor = 1;
  var maxTimes = 360;
  var offsetX = 0;
  var offsetY = 0;
  var sx = map(x, 0, width, -2, 2)*zoomFactor+offsetX;
  var sy = map(y, 0, height, -2, 2)*zoomFactor+offsetY;
  var i = 0;
  while(i<maxTimes) {
    var real = sx*sx-sy*sy;
    var imag = 2*sx*sy;
    sx = real + 0.285;
    sy = imag + 0.01;
    if(sx*sx+sy*sy>4){
      return i;
    }
    i++;
  }
  return i;
}