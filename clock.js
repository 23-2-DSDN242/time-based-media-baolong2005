/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
//loadImage(Coconut_Tree.png);
function draw_clock(obj) {
  let hr = hour ();
  let mn = minute ();
  let sc = second ();
  let x_move = map(hr, 0, 23, 0, -960);
  if (hr >= 23) {
    x_move = map(hr, 0, 23, -960, 0);
  } else {
    x_move = map(hr, 0, 23, 0, -960);
  }
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
  
  background(50); //  dark grey

  fill(200); // dark grey
  // Night clock scene with moon and stars
  ellipse (480, 600, 1200, 500);
  fill (255);
  text (hr + ':' + mn + ':' + sc, 200, 300);
  push ();
  translate (960,0);
  ellipse (x_move, 0, 200);
  pop ();


  

  }
//  image (Coconut_Tree, 0 , 0);

  // textSize(40);
  // textAlign(CENTER, CENTER);
  // text("YOUR MAIN CLOCK CODE GOES HERE", width / 2, 200);


  // fill(249, 140, 255);// pink
  // ellipse(width / 3, 350, 150);
  // fill(140, 255, 251) // blue
  // ellipse(width / 2, 350, 150);
  // fill(175, 133, 255); // purple
  // ellipse(width / 3 * 2, 350, 150);


