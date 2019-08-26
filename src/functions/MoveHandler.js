
function handleMoveHorizontal(){
    var sceneGeometry = this.scene.getBoundingClientRect();
    var cameraGeometry = this.camera.getBoundingClientRect();
    var sceneLeftOverflow = -(sceneGeometry.x);
    var sceneRightOveflow = sceneGeometry.right - cameraGeometry.width;
    var centeredX = (cameraGeometry.width/2) - 20;   
    var player = this.player;

    if(player.movementVector.x > 0 ){
        if(sceneRightOveflow > 0 && (player.renderPosition.x > (centeredX - sceneGeometry.x))){                        
            this.store.moveCamera({x: -player.movementVector.x, y:0},3); 
            player.move({x: player.movementVector.x, y:0},3);
        }
        else if (player.renderPosition.x + 41 < sceneGeometry.width)
            player.move({x: player.movementVector.x, y:0},3);
    }
    if(player.movementVector.x < 0 ){
        if(sceneLeftOverflow > 0 && (player.renderPosition.x < (centeredX - sceneGeometry.x))){                            
            this.store.moveCamera({x: -player.movementVector.x, y:0},3); 
            player.move({x: player.movementVector.x, y:0},3);
        }
        else if (player.renderPosition.x > 0)
            player.move({x: player.movementVector.x, y:0},3);
    }
}
function handleMoveVertical(){
    var sceneGeometry = this.scene.getBoundingClientRect();
    var cameraGeometry = this.camera.getBoundingClientRect();
    var sceneTopOverflow = -(sceneGeometry.y);
    var sceneBottomOveflow = sceneGeometry.bottom - cameraGeometry.height;
    var centeredY = (cameraGeometry.height/2) - 20;   
    var player = this.player;

    if(player.movementVector.y > 0 ){
        if(sceneBottomOveflow > 0 && (player.renderPosition.y > (centeredY - sceneGeometry.y))){                          
            this.store.moveCamera({x:0 , y:-player.movementVector.y},3); 
            player.move({x:0 , y:player.movementVector.y},3);
        }
        else if (player.renderPosition.y + 41 < sceneGeometry.height)
            player.move({x:0 , y:player.movementVector.y},3);
    }
    if(player.movementVector.y < 0 ){
        if(sceneTopOverflow > 0 && (player.renderPosition.y < (centeredY - sceneGeometry.y))){                       
            this.store.moveCamera({x:0 , y:-player.movementVector.y},3); 
            player.move({x:0 , y:player.movementVector.y},3);
        }
        else if (player.renderPosition.y  > 0) 
            player.move({x:0 , y:player.movementVector.y},3);
    }
}


class MoveHandler{       
    scene = document.querySelectorAll(".scene")[0];    
    camera = document.querySelectorAll(".camera")[0];
    //cameraGeometry = this.camera.getBoundingClientRect();
    centeredX = (this.camera.width/2) - 20;
    centeredY = (this.camera.height/2) - 20;   
    hadleMove(){
        handleMoveHorizontal.call(this);
        handleMoveVertical.call(this);   
    }
        
    constructor(store){
        this.store = store;  
        this.player = store.player;      
       
    }

    
    
        
 }

export default MoveHandler;