import gameStore from "../Stores/gameStore";
function move(vector,speed){       
         
    this.renderPosition.x = this.renderPosition.x + vector.x * speed ; // * movementSpeed ;//Upgrade this when i provide movementSpeed
    this.renderPosition.y = this.renderPosition.y + vector.y * speed; // * movementSpeed ;//
  }
  
  export default move; 