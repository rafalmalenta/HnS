import gameStore from "../Stores/gameStore";
function computeMovementVector(vectorsArray){
    gameStore.player.movementVector = vectorsArray.reduce((result, vector)=>{
        return {
            x : result.x + vector.x,
            y : result.y + vector.y,
        }
    },{x:0,y:0});       
};
function addVector(vectorToAdd){     
    var existInArray = this.vectorsArray.some((vector)=>{            
        return ((vector.x === vectorToAdd.x)&&(vector.y === vectorToAdd.y))    
    })
    if(!existInArray)
        this.vectorsArray.push(vectorToAdd);
    this.computeMovementVector(this.vectorsArray)  
};
function removeVector(vectorToRemove){    
    this.vectorsArray = this.vectorsArray.filter((vector)=>{
        return ((vector.x !== vectorToRemove.x)||(vector.y !== vectorToRemove.y))              
    })         
    this.computeMovementVector(this.vectorsArray)      
};

export {computeMovementVector, addVector, removeVector}; 