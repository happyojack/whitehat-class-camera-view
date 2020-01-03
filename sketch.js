var hypnoticBall, database;
var position;
var form,player,game,gameState=0,playerCount=0;
var allPlayers;
var distance=0;
var car1,car2,car3,car4;
var cars;
function setup(){
  database = firebase.database();
//  console.log(database);
  createCanvas(displayWidth,displayHeight);

  game=new Game();
  game.getState();
  game.start();

  


 
}

function draw(){
  background("white");
  if(playerCount===4){
    game.update(1)
  }
  if(gameState===1){
    clear();
    game.play();
  }
    drawSprites();
  
}
/*
function writePosition(x,y){
  database.ref('ball/position').set({
    'x': position.x + x ,
    'y': position.y + y
  })
}

function readPosition(data){
  position = data.val();
  console.log(position.x);
  hypnoticBall.x = position.x;
  hypnoticBall.y = position.y;
}

function showError(){
  console.log("Error in writing to the database");
}
*/
