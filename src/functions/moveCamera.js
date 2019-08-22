import gameStore from "../Stores/gameStore";
function moveCamera(vector){       
     
    this.cameraPosition.x = this.cameraPosition.x + vector.x * 4 ; // * movementSpeed ;//Upgrade this when i provide movementSpeed
    this.cameraPosition.y = this.cameraPosition.y + vector.y * 4; // * movementSpeed ;//
  }
  
  export default moveCamera; 