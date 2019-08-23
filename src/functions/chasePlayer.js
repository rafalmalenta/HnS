import move from "./move";
function chasePlayer(creep, player){
    var length = Math.sqrt(Math.pow(player.renderPosition.x - creep.renderPosition.x,2) + Math.pow(player.renderPosition.y - creep.renderPosition.y,2));
    if(length < creep.attackRange){
      player.health = player.health - 2;
    }
    else creep.move(creep.movementVector);
    console.log(creep.renderPosition.x, creep.renderPosition.y )
  }

export default chasePlayer;