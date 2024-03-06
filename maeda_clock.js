// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // YOUR MAIN CLOCK CODE GOES HERE
let hr = hour();
let mn = minute();

  background(0); //  dark
  fill (200);
  
  textSize(200);
  textAlign(CENTER, CENTER);
  translate(width/2, height/2);
  text(hr, 0 - 50, 0);
  
  textSize(100)
  text(mn, 0 + 60, 0);
}
