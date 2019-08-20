import move from "./move";
function chasePlayer(creep, player){
    var length = Math.sqrt(Math.pow(player.position.x - creep.position.x,2)+Math.pow(player.position.y - creep.position.y,2));
    if(length<creep.attackRange){
      player.health = player.health - 10;
    }
    else creep.move();
  }

export default chasePlayer;