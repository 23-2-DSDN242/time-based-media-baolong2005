// Update this function to draw you own maeda clock on a 960x500 canvas

function draw_clock(obj) {
  
  // YOUR MAIN CLOCK CODE GOES HERE
let hr = hour();
let mn = minute();
let sc = second();
let hr_sizeup = map(sc, 0, 59, 100, 200);
let mn_sizeup = map(sc, 0, 59, 100, 200);
let hr_sizedown = map(sc, 0, 59, 200, 100);
let mn_sizedown = map(sc, 0, 59, 200, 100);
let hr_dis = map(sc, 0, 59, 60, 80);
let mn_dis = map(sc, 0, 59, 60, 80);
  background(0); //  dark
  fill (200);
if(hr_sizeup <= 100){
  textSize(hr_sizeup);} else { textSize(hr_sizedown)}
  textAlign(CENTER, CENTER);
  translate(width/2, height/2);
  text(hr, 0 - hr_dis, 0);
  if(mn_sizeup <= 100){
    textSize(mn_sizedown);} else { textSize(mn_sizeup)}
  
  text(mn, 0 + mn_dis, 0);


  
  
}
