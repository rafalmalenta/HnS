import move from "./move";
import moveCamera from "./moveCamera";

function handleMove(player, store){
    var sceneGeometry = document.querySelectorAll(".scene")[0].getBoundingClientRect();
    var camera = document.querySelectorAll(".camera")[0];
    var cameraGeometry = camera.getBoundingClientRect();
    
    var sceneLeftOverflow = -(sceneGeometry.x);    
    var sceneRightOveflow = sceneGeometry.right - cameraGeometry.width;
    var sceneTopOverflow = -(sceneGeometry.y);
    var sceneBottomOverflow = (sceneGeometry.bottom - cameraGeometry.height);
    
    if(player.movementVector.x > 0){
      if(sceneRightOveflow > 0 ){        
        store.moveCamera({x:-player.movementVector.x, y:0});       
      }
      else
        player.move({x:player.movementVector.x, y:0});
    }
    if(player.movementVector.x < 0){
      if(sceneLeftOverflow > 0 ){        
        store.moveCamera({x: -player.movementVector.x, y:0});        
      }
      else
        player.move({x:player.movementVector.x, y:0});
    }
    if(player.movementVector.y > 0){
      if(sceneBottomOverflow > 0 ){        
        store.moveCamera({x: 0, y:-player.movementVector.y});       
      }
      else
        player.move({x:0, y:player.movementVector.y});
    }
    if(player.movementVector.y < 0){
      if(sceneTopOverflow > 0 ){        
        store.moveCamera({x: 0, y:-player.movementVector.y});       
      }
      else
        player.move({x:0, y:player.movementVector.y});
    }
    
    if(3 > 5){     
    }
    else player.move(player.movementVector);
  }

export default handleMove;