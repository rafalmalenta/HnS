import move from "./move";
function handleMove(player){
    var innerDivGeometry = document.querySelectorAll(".terrain")[0].getBoundingClientRect();
    var outerDivGeometry = document.querySelectorAll(".camera")[0].getBoundingClientRect();
    
    var innerDivLeftOverflow = -(innerDivGeometry.x);    
    var innerDivRightOveflow = innerDivGeometry.right - outerDivGeometry.width;
    var innerDivTopOverflow = -(innerDivGeometry.y);
    var innerDivBottomOverflow = (innerDivGeometry.bottom - outerDivGeometry.height);
    if(player.movementVector.x > 0){
      if(innerDivRightOveflow > 0 ){

      }
    }

    console.log(innerDivLeftOverflow, " ",innerDivRightOveflow, " ",innerDivBottomOverflow, " ",innerDivTopOverflow, " ")
    if(3 > 5){     
    }
    else player.move(player.movementVector);
  }

export default handleMove;