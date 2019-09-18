function setup() {
    // Put things you want to run once in here. 

    createCanvas(520,520)
    noStroke();
  
  }
  
  function draw() {
    strokeWeight(0);
    // Put things you want to over and over here. 
background(1,7,17)
// white points in middle of yellow area 
for(var y=20;y<= height; y+= 40){
  for (var x=20; x<= width; x+= 40){
    strokeWeight(7)
;    stroke(300,300,300)
    point(x,y) 
  }
}

stroke(300,300,300)
point(50,50);
// pink lines
for (var y =0; y<= height; y+=40){
  for (var x = 0; x <= width; x += 40) {
    noFill();
    strokeWeight(1)
    stroke(206,60,184)
  
    ellipse(x, y, 45, 45);
    } 
}
  // yellow outline circle in backgroundx
for (var y =0; y<= height; y+=40){
  for (var x = 0; x <= width; x += 40) {
    noFill();
    strokeWeight(2)
    stroke(241,187,67)
  
    ellipse(x, y, 50, 50);
    } 
}


//large blue circel
for (var y = 0; y <= height; y += 40) {
    for (var x = 0; x <= width; x += 40) {
    strokeWeight(1.5)
    stroke(50,42,70)
    fill(75,162,231);
    ellipse(x, y, 39, 39);
    }
}

// white line
for (var i = 2; i<530; i+=40){
  //line(x1,y1,x2,y2)
  strokeWeight(1);
  stroke(300,300,300)
  line(i,0,i,520);
  
}

// white line
for (var i = -2; i<530; i+=40){
  //line(x1,y1,x2,y2)
  strokeWeight(1);
  stroke(300,300,300)
  line(i,0,i,520);
  
}
// white elipse 
for (var y = 0; y <= height; y += 40) {
  for (var x = 0; x <= width; x += 40) {
  fill(300,300,300);
  strokeWeight(2);
  stroke(50,42, 70)
  ellipse(x, y, 30, 20);
  }
}
// red circle 
for (var y = 0; y <= height; y += 40) {
  for (var x = 0; x <= width; x += 40) {
    strokeWeight(1.5)
  fill(220,42, 70);
  ellipse(x, y, 20, 20);
  }
}
// small blue ring
for (var y = 0; y <= height; y += 40) {
  for (var x = 0; x <= width; x += 40) {
  noFill();
  stroke(13,211,243)
  strokeWeight(1);
  ellipse(x, y, 15, 15);
  }
}
//inner small blue elipse horizontal/verticle
for (var y = 0; y <= height; y += 40) {
  for (var x = 0; x <= width; x += 40) {
  noFill();
  stroke(13,211,243)
  strokeWeight(1);
  ellipse(x, y, 15, 3);
  }
}
for (var y = 0; y <= height; y += 40) {
  for (var x = 0; x <= width; x += 40) {
  noFill();
  stroke(13,211,243)
  strokeWeight(1);
  ellipse(x, y, 5, 15);
  }
}
// black line in the middle 
for (var i = 0; i<530; i+=40){
  //line(x1,y1,x2,y2)
  strokeWeight(2);
  stroke(51)
  line(i,0,i,520);
  
}
// white points in middle of yellow area 
for(var y=20;y<= height; y+= 40){
  for (var x=20; x<= width; x+= 40){
    stroke(13,211,243)
    point(x,y) 
  }
}

// pont in middl of linex
for(var y=0;y<= height; y+= 40){
  for (var x=0; x<= width; x+= 40){
    strokeWeight(2);
    stroke(300,300,300)
    point(x,y) 
  }
}
// canvas size is 520,520
// 3 rectangels going accros the page

// large circle behind swuares 
noFill()
stroke(5)
strokeWeight(6);
ellipse(260,260,300,300);

//3 white squares 
stroke(2)
fill(300,300,300)
rect(20,210,100,100)

stroke(2)
fill(300,300,300)
rect(210,210,100,100)

stroke(2)
fill(300,300,300)
rect(400,210,100,100)




  }

  
