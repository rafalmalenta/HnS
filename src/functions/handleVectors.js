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
    var length = Math.sqrt(Math.pow(player.position.x - creep.position.x,2)+Math.pow(player.position.y - creep.position.y,2))
    creep.movementVector.x = (player.position.x - creep.position.x)/length;
    creep.movementVector.y = (player.position.y - creep.position.y)/length;
    //console.log(creep.movementVector.x,creep.movementVector.y)

}
export {computeMovementVector, addVector, removeVector,calculateVector}; 