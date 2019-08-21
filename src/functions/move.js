import gameStore from "../Stores/gameStore";
function move(){   
    //dodac kolizje z krawędziami
         
    this.renderPosition.x = this.renderPosition.x + this.movementVector.x * 4 ; // * movementSpeed ;//Upgrade this when i provide movementSpeed
    this.renderPosition.y = this.renderPosition.y + this.movementVector.y * 4; // * movementSpeed ;//
  }
  
  export default move; 