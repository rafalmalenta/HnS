import gameStore from "../Stores/GameStore";
function handleKeyPress(event){   
    switch (event.code) {
        case 'KeyW':
            this.addVector({x:0,y:-1});
            break;
        case 'KeyS':
            this.addVector({x:0,y:1});
            break;
        case 'KeyA':
            this.addVector({x:-1,y:0});              
            break;
        case 'KeyD':
            this.addVector({x:1,y:0});              
            break; 
        case 'Space':{
            if(!gameStore.paused)
                this.clear();
                
            else
                this.play()        
            break;
        }            
    }     
};
function handleKeyUp(event){   
    switch (event.code) {
        case 'KeyW':
            this.removeVector({x:0,y:-1});
            break;
        case 'KeyS':
            this.removeVector({x:0,y:1});
            break;
        case 'KeyA':
            this.removeVector({x:-1,y:0});              
            break;
        case 'KeyD':
            this.removeVector({x:1,y:0});              
            break;             
      }
};

export {handleKeyPress, handleKeyUp}