class Form{
    constructor(){
       this.input=createInput('EnterName');
       this.button = createButton('ClickMe');
       this.greeting = createElement("h2");
    }

    display(){
        var input = createInput('EnterName');
        this.input.position(100,100);
        var button = createButton('ClickMe');
        this.button.position(100,130);
        var greeting =  createElement("h3");

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
        player.name = this.input.value();
        
        playerCount = playerCount+1;
        player.update();
        player.updateCount(playerCount);

        this.greeting.html("Hello" + player.name);
        this.greeting.position(130,160);
            
                            
            
                
            
        })
    }
}