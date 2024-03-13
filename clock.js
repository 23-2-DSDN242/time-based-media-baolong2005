/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
//loadImage(Coconut_Tree.png);
function draw_clock(obj) {
  let OpacityAm = 35;
  let blue = color(42, 184, 245);
  let whitish = color(215, 240, 247);
  let grey = color(30, 31, 36);
  let darkBlue = color(9, 18, 51);
  let posX = map(obj.hours, 0, 23, 0, 960);
  noStroke();
  
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
  
  if(obj.hours <= 6 || obj.hours > 20 ) { // 20 is 8pm
    background(30, 31, 36); // night
  }
  else{
    background(42, 184, 245); // day
  }
   // Night clock scene with moon and stars
   if(obj.hours <= 6 || obj.hours > 20 ) { // 20 is 8pm
    fill(200); // dark grey
  }
  else{
    fill(13, 158, 59) // green
  }
  
  ellipse (480, 600, 1200, 500); // grounds
  
  
  // text (hr + ':' + mn + ':' + sc, 200, 300);  
  if(obj.hours <= 6 || obj.hours > 20 ) { // 20 is 8pm
    fill (255, 255, 255, OpacityAm);
  let sizeStep = 10;
  let howManyCircles = 20; 
  for(let i = 0; i < howManyCircles; i++){
    ellipse (posX, 0, sizeStep*i); // dark
  }}
  else{
    fill (237, 182, 0, OpacityAm);
  let sizeStep = 10;
  let howManyCircles = 20; 
  for(let i = 0; i < howManyCircles; i++){
    ellipse (posX, 0, sizeStep*i); // light 
  }}
  if(posX >= 960){
     ellipse (posX, 0, sizeStep*i)
   }
  fill(235, 235, 9); 
  star(300, 200, 30, 80, 4);
  star(400, 300, 30, 80, 5);

  

  }

  function star(x,y,radius1, radius2, points) {
    let angle = TWO_PI / points;
    let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
   scale (0.5);

  endShape(CLOSE);
  
  }
//  image (Coconut_Tree, 0 , 0);


