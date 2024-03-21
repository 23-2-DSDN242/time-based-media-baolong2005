/*
 * use p5.js to draw a clock on a 960x500 canvas
 */

let nightImg;
let dayImg;
let firstRun = true;
let rains = [];
let clouds =[];

function draw_clock(obj) {
  if (firstRun) {
    rectMode(CENTER);
    nightImg = loadImage('Coconut_Tree.png');
    dayImg = loadImage('Tree.png');
    firstRun = false;
  }
  colorMode(RGB);
  let OpacityAm = 35;
  let blue = color(42, 184, 245);
  let whitish = color(215, 240, 247);
  let grey = color(30, 31, 36);
  let darkBlue = color(9, 18, 51);
  let posX = map(obj.hours, 0, 23, 0, 960);
  let sizeofBlock = 900;
  let hr = hour()
  let mn = minute()
  let sc = second()
  let posXm = map(obj.minutes, 0, 59, 0, 800)
  let scaleC = 5;
  let posXs = map(obj.minutes, 0, 59, 0, 960)
  
  
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off


  // Background (day/night)
  if(obj.hours <= 6 || obj.hours > 20 ) { // 20 is 8pm
  for (let i = 0; i < sizeofBlock; i++) {
    let gradientAmount = map(i, 0, sizeofBlock, 0, 1);
    let strokeColor = lerpColor(grey, darkBlue, gradientAmount);
    stroke(strokeColor);
    line(0, i, width, i); // night
  }
}
  else{
    for (let i = 0; i < sizeofBlock; i++) {
      let gradientAmount = map(i, 0, sizeofBlock, 0, 1);
      let strokeColor = lerpColor(blue, whitish, gradientAmount);
      stroke(strokeColor);
      line(0, i, width, i); // day
    }
  }
  noStroke()
   // Ground (day/night)
   if(obj.hours <= 6 || obj.hours > 20 ) { // 20 is 8pm
    fill(200); // dark grey
  }
  else{
    fill(13, 158, 59) // green
  }
  ellipse (480, 600, 1200, 500); // grounds
  
  // Hour (SUN/MOON)
  if(obj.hours <= 6 || obj.hours > 20 ) { // 20 is 8pm
    fill (255, 255, 255, OpacityAm);
  let sizeStep = 10;
  let howManyCircles = 20; 
  for(let i = 0; i < howManyCircles; i++){
    ellipse (posX, 0, sizeStep*i); // night
  }}
  else{
    fill (237, 182, 0, OpacityAm);
  let sizeStep = 10;
  let howManyCircles = 20; 
  for(let i = 0; i < howManyCircles; i++){
    ellipse (posX, 0, sizeStep*i); // day 
  }}

  // Minute: CLOUD/STAR --> Range height: 80 --> 390 
  if(obj.hours <= 6 || obj.hours > 20 ) { // 20 is 8pm
  push()
  scale (0.3);
     translate(width / 2, height / 2 )
  
  star(posXs , 100, 30, 80, 4);
  star(posXs, 0, 30, 80, 5)
  star(posXs, 0, 30, 80, 4);
  star(posXs, -0, 30, 80, 5)
  star(posXs, 0, 30, 80, 4);
  star(posXs, 0, 30, 80, 5); // night 
  pop()
  }
  else{
push()
     scale(1.5);
   cloud(posXm + 10, 50, 1)
   cloud(posXm - 30, 20, 1)
   cloud(posXm + 80, 80, 1)
   cloud(posXm - 200, 22, 1)
   cloud(posXm - 100, 62, 1)
   cloud(posXm - 180, 88, 1)
    // day 
   pop()


  }

  //sign to show time
  push()
  stroke(0)
   translate(width/ 2, height/ 2);
   fill(0, 0, 0, 100);
   noStroke();
   rect(-95, 165, 20, 120);

   noStroke();
   fill(0, 0, 0, 100);
   rect(-95, 160, 150, 80);
   stroke(0);
   fill(102, 77, 17);
   rect(-100,160, 20, 120);
   fill(92, 67, 8); //brown
   rect (-100, 150, 150, 80); //sign
   pop()
  
   // time text
   push()
   translate(width/ 2, height/ 2);
   scale(2)
   fill(255)
   text(nf(hr, 2, 0) + ':' + nf(mn, 2, 0) + ':' + nf(sc, 2, 0), -73, 80 )
   pop()

   // Tree (day/night)
if(obj.hours <= 6 ||obj.hours > 20 ) {
  push()
  scale(0.8)
   image (nightImg, 550,10);
   pop() // night
  }
   else{
    push()
    scale(0.8)
    image (dayImg, 750, 80)
    pop() //day
   }
   if(obj.seconds_until_alarm < 0 || obj.seconds_until_alarm == undefined){
  } else if (obj.seconds_until_alarm > 0){
    for (let i = 0; i < sizeofBlock; i++) {
      let gradientAmount = map(i, 0, sizeofBlock, 0, 1);
      let strokeColor = lerpColor(blue, whitish, gradientAmount);
      stroke(strokeColor);
      line(0, i, width, i); // day
}
push()
noStroke()
fill (237, 182, 0, OpacityAm);
let sizeStep = 10;
  let howManyCircles = 30; 
  for(let i = 0; i < howManyCircles; i++){
    ellipse (width/2,  height/ 2, sizeStep*i); // day 
  }
  
  scale(scaleC);
  cloud(100, 100, 1);
  cloud(20, 80, 1);
  
pop()
} else{
  for (let r of rains){
  r.show()
  r.update()
}
for (let i = 0; i < 8; i++){
rains.push(new Rain(random(width), 0))
}}

   }
   class Rain{
    constructor(x, y){
      this.pos = createVector(x, y)
      this.vel = createVector(0, random(7, 10))
      this.len = random(15, 30)
      this.thick = random(255)
    }
    show(){
      stroke(255, this.thick)
      line(this.pos.x, this.pos.y, this.pos.x, this.pos.y - this.len)
    }
    update(){
      this.pos.add(this.vel)
      if(this.pos.y > height + 100){
        rains.shift()
      }
    }
  }

  

  function star(x,y,radius1, radius2, points) {
    let angle = TWO_PI / points;
    let halfAngle = angle / 2.0;
    fill(235, 235, 9); 
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
  function cloud(x, y, size) {
    fill(250, 250, 250, 230);
    noStroke();
    arc(x, y, 25 * size, 20 * size, PI + TWO_PI, TWO_PI);
    arc(x + 10, y, 25 * size, 45 * size, PI + TWO_PI, TWO_PI);
    arc(x + 25, y, 25 * size, 35 * size, PI + TWO_PI, TWO_PI);
    arc(x + 40, y, 30 * size, 20 * size, PI + TWO_PI, TWO_PI);
  }



  
  


