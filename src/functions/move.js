import gameStore from "../Stores/gameStore";
function move(){   
    //dodac kolizje z krawędziami     
    this.position.x = this.position.x + this.movementVector.x * 4 ; // * movementSpeed ;//Upgrade this when i provide movementSpeed
    this.position.y = this.position.y + this.movementVector.y * 4; // * movementSpeed ;//
  }
  
  export default move; 