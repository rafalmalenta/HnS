function move(){   
    //dodac kolizje z krawędziami     
    this.position.x = this.position.x + this.movementVector.x * 5; // * movementSpeed ;//Upgrade this when i provide movementSpeed
    this.position.y = this.position.y + this.movementVector.y * 5; // * movementSpeed ;//
  };

  export default move;