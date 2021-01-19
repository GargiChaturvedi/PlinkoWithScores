const Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var gameState = "start";
var turns = 10;
var particle, division, line;
var divisionHeight=300;
var score1, score2, score3, score4, score5, score6, score7, score8, score9, score10;
var score = 0;

var divisionPos = [];
var scoreArray = [];

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     division = divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

   score1 = Math.round(random(1, 10)) * 50;
   score2 = Math.round(random(1, 10)) * 50;
   score3 = Math.round(random(1, 10)) * 50;
   score4 = Math.round(random(1, 10)) * 50;
   score5 = Math.round(random(1, 10)) * 50;
   score6 = Math.round(random(1, 10)) * 50;
   score7 = Math.round(random(1, 10)) * 50;
   score8 = Math.round(random(1, 10)) * 50;
   score9 = Math.round(random(1, 10)) * 50;
   score10 = Math.round(random(1, 10)) * 50;

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }    
}
 
function mousePressed() {
	if(gameState != "end" && mouseY < 150) {
    particle = new Particle(mouseX, mouseY, 10,10);
    particles.push(particle);
	  turns--;
	}
}

function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  textSize(30);
  fill("white");
  text("Turns: " + turns, 30, 30);
  text("Score: " + score, width-150, 30);
  
   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(turns === 0) {
     gameState = "end";
   }

  text(score1, 20, height-100);
  text(score2, 100, height-100);
  text(score3, 180, height-100);
  text(score4, 260, height-100);
  text(score5, 340, height-100);
  text(score6, 420, height-100);
  text(score7, 500, height-100);
  text(score8, 580, height-100);
  text(score9, 660, height-100);
  text(score10, 740, height-100);

   if(gameState === "end") {
     textSize(50);
     fill("lime");
     text("Game Over!", width/2 - 120, height/2 - 150);
   }

   //for(var z = 0; z < particles.length; z++) {
    if(particle != null) {
      //console.log("x: " + particle.body.position.x);
      //console.log("y: " + particle.body.position.y);
      if(particle.body.position.x < 80 && particle.body.position.y > 780) {
	     //World.remove(world, particle.body);
       //fill(particle.color);
       //ellipse(particle.body.position.x, particle.body.position.y, particle.r, particle.r);
       particle = null;
     score += score1;
     //console.log("hello1");
     //console.log(score1);
      }
       else if(particle.body.position.x < 160 && particle.body.position.x > 80 && particle.body.position.y > 780) {
	   //World.remove(world, particle.body);
       //fill(particle.color);
       //ellipse(particle.body.position.x, particle.body.position.y, particle.r, particle.r);
     score += score2;
     particle = null;
     //console.log("hello2");
     //console.log(score2);
      }
      else if(particle.body.position.x < 240 && particle.body.position.x > 160 && particle.body.position.y > 780) {
	   //World.remove(world, particle.body);
       //fill(particle.color);
       //ellipse(particle.body.position.x, particle.body.position.y, particle.r, particle.r);
     score += score3;
     particle = null;
     //console.log("hello3");
     //console.log(score3);
      }
      else if(particle.body.position.x < 320 && particle.body.position.x > 240 && particle.body.position.y > 780) {
	   //World.remove(world, particle.body);
	   //fill(particle.color);
       //ellipse(particle.body.position.x, particle.body.position.y, particle.r, particle.r);
     score += score4;
     particle = null;
     //console.log("hello4");
     //console.log(score4);
      }
      else if(particle.body.position.x < 400 && particle.body.position.x > 320 && particle.body.position.y > 780) {
	   //World.remove(world, particle.body);
	   //fill(particle.color);
       //ellipse(particle.body.position.x, particle.body.position.y, particle.r, particle.r);
     score += score5;
     particle = null;
     //console.log("hello5");
     //console.log(score5);
      }
      else if(particle.body.position.x < 480 && particle.body.position.x > 400 && particle.body.position.y > 780) {
	   //World.remove(world, particle.body);
	   //fill(particle.color);
       //ellipse(particle.body.position.x, particle.body.position.y, particle.r, particle.r);
     score += score6;
     particle = null;
     //console.log("hello6");
     //console.log(score6);
      }
      else if(particle.body.position.x < 560 && particle.body.position.x > 480 && particle.body.position.y > 780) {
	   //World.remove(world, particle.body);
	   //fill(particle.color);
       //ellipse(particle.body.position.x, particle.body.position.y, particle.r, particle.r);
     score += score7;
     particle = null;
     //console.log("hello7");
     //console.log(score7);
      }
      else if(particle.body.position.x < 640 && particle.body.position.x > 560 && particle.body.position.y > 780) {
	   //World.remove(world, particle.body);
	   //fill(particle.color);
       //ellipse(particle.body.position.x, particle.body.position.y, particle.r, particle.r);
     score += score8;
     particle = null;
     //console.log("hello8");
     //console.log(score8);
      }
      else if(particle.body.position.x < 720 && particle.body.position.x > 640 && particle.body.position.y > 780) {
	   //World.remove(world, particle.body);
	   //fill(particle.color);
       //ellipse(particle.body.position.x, particle.body.position.y, particle.r, particle.r);
     score += score9;
     particle = null;
     //console.log("hello9");
     //console.log(score9);
      }
      else if(particle.body.position.x < 800 && particle.body.position.x > 720 && particle.body.position.y > 780) {
	   //World.remove(world, particle.body);
	   //fill(particle.color);
       //ellipse(particle.body.position.x, particle.body.position.y, particle.r, particle.r);
     score += score10;
     particle = null;
     //console.log("hello10");
     //console.log(score10);
      }
     }
   //}
}