function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL)
}

function draw() {
  angleMode(DEGREES)

  background(30)
 
  rotateX(60)
  rotateY(20)

  noFill()
  stroke(350)

  for(var i = 0; i < 30; i++) {
    
    var r = map(sin(frameCount / 2), -1, 1, 100, 200)
    var g = map(i, 0, 30, 100, 200)
    var b = map(cos(frameCount), -1, 1, 200, 100)

    stroke(r, g, b)

    beginShape()
    for(var j=0; j < 360 ; j+=10) {
      var x = i * 8 * cos(j)
      var y = i * 8 * sin(j)
      var z = cos(frameCount * 2.5 + i * 10) * 50

      vertex(x, y, z)
    }
    endShape(CLOSE)
  }
}