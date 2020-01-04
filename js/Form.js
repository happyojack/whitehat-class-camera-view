class Form{
    constructor(){
        this.input=createInput("name")
       this.button=createButton("Let's Begin!");
        this.greeting=createElement('h3');
        
    }

    hide(){
    this.input.hide();
     this.greeting.hide();
     this.button.hide();                                                                                                                                                   
    }



    display(){
        var title=createElement('h2');
        title.html("Fury Race");
        title.position(displayWidth/2-50,10);
       
        this.input.position(displayWidth/2-40,displayHeight/2-80);
       this.button.position(displayWidth/2+30,displayHeight/2);
        this.button.mousePressed(()=>{
         this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount+=1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);

            this.greeting.html("Hello "+player.name+"! You are to compete with other three players")
            this.greeting.position(displayWidth/2-70,displayHeight/2);
        })
    }
}
