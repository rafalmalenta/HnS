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
    this.computeMovementVector(this.vectorsArray);  
};
function removeVector(vectorToRemove){    
    this.vectorsArray = this.vectorsArray.filter((vector)=>{
        return ((vector.x !== vectorToRemove.x)||(vector.y !== vectorToRemove.y))              
    })         
    this.computeMovementVector(this.vectorsArray);     
};

function calculateVector(creep,player){
    var length = Math.sqrt(Math.pow(player.renderPosition.x - creep.renderPosition.x,2)+Math.pow(player.renderPosition.y - creep.renderPosition.y,2))
    creep.movementVector.x = (player.renderPosition.x - creep.renderPosition.x)/length;
    creep.movementVector.y = (player.renderPosition.y - creep.renderPosition.y)/length;
    //console.log(creep.movementVector.x,creep.movementVector.y)

}
export {computeMovementVector, addVector, removeVector,calculateVector}; 