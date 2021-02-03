/*
1. get input from the player
2. set in the database


*/
var database;
var playerCount;
var gameState=0;
var player, form, game;
var allPlayers;

function setup(){
    createCanvas(400,400);

    database  =  firebase.database();
   
   game=new Game();
   game.getState();
   game.start();

   form=new Form();
   form.display();

}


function draw(){
    background("lightblue");


}