class Game {
  constructor(){



  }


  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play(){
 form.hide();
 text("game start",120,100);
 player.getPlayerInfo();

 if(allPlayers !== undefined){
var display_position=130;
for(var plr in allPlayers){

if(plr=== "player"+player.index){
fill("red");

}
else{
fill("black");


}

display_position=display_position+20;
textSize(20);
text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_position);


}
 }

  }
}
