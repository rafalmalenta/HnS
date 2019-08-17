function move(){        
    this.position.x = (this.position.x + this.movementVector.x); // * movementSpeed ;//Upgrade this when i provide movementSpeed
    this.position.y = (this.position.y + this.movementVector.y); // * movementSpeed ;//
  };

  export default move;