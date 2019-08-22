import move from "./move";
function handleMove(player){
    var innerDivGeometry = document.querySelectorAll(".terrain")[0].getBoundingClientRect();
    var camera = document.querySelectorAll(".camera")[0];
    var cameraGeometry = camera.getBoundingClientRect();
    
    var innerDivLeftOverflow = -(innerDivGeometry.x);    
    var innerDivRightOveflow = innerDivGeometry.right - cameraGeometry.width;
    var innerDivTopOverflow = -(innerDivGeometry.y);
    var innerDivBottomOverflow = (innerDivGeometry.bottom - cameraGeometry.height);
    if(player.movementVector.x > 0){
      if(innerDivRightOveflow > 0 ){
        //moveCamera(-player.movementVector.x);
      }
      else
        player.move({x:player.movementVector.x, y:0});
    }

    console.log(innerDivLeftOverflow, " ",innerDivRightOveflow, " ",innerDivBottomOverflow, " ",innerDivTopOverflow, " ")
    if(3 > 5){     
    }
    else player.move(player.movementVector);
  }

export default handleMove;