import gameStore from "../Stores/gameStore";
function moveCamera(vector,speed){       
     
    this.cameraPosition.x = this.cameraPosition.x + vector.x * speed; // * movementSpeed ;//Upgrade this when i provide movementSpeed
    this.cameraPosition.y = this.cameraPosition.y + vector.y * speed; // * movementSpeed ;//
  }
  
  export default moveCamera; 