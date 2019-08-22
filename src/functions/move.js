import gameStore from "../Stores/gameStore";
function move(vector){   
    //dodac kolizje z krawędziami
         
    this.renderPosition.x = this.renderPosition.x + vector.x * 4 ; // * movementSpeed ;//Upgrade this when i provide movementSpeed
    this.renderPosition.y = this.renderPosition.y + vector.y * 4; // * movementSpeed ;//
  }
  
  export default move; 