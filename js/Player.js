class Player{
    constructor(){
    this.index=null;
    this.distance=0;
    this.name=null;
    }

    getCount(){
        var dbRef = database.ref('playerCount');

        dbRef.on("value", function(data){
            playerCount = data.val();
        })
    }
    updateCount(count){
        var dbRef= database.ref('/').update({
            playerCount: count
        });
    } 
    update(){
        var playerIndex = "player" + playerCount;

        var dbRef = database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        })
    }  
    
    static getPlayerInfo(){
        var playerInfoRef = database.ref('players');

        playerInfoRef.on("value",(data)=>{
            allPlayers = data.val();
        })
    }
    }
