


        background(255, 255, 0);
        fill(0, 0, 0);
        textSize(25);
        text("Owl, Snail, or Unicorn?", 60, 25);
        textSize(20);
        text("Let's Begin the Game! Choose One:", 30, 75);
     
        //buttons
        
        var positions = [
            {x:150,y:120, x2:30, text:"Owl"},
            {x:150,y:200, x2:28, text:"Snail"},
            {x:150,y:280, x2:18, text:"Unicorn"}
        ];   
        
        for (var i = 0; i < positions.length; i++){
            var position = positions[i];
            fill(255, 255, 255);
            rect(position.x, position.y,100,50);
            fill(0, 0, 0);
            text(position.text, position.x +position.x2, position.y +35);
        }
    
        mouseClicked = function() {
            if (mouseX >= 150 && mouseX <= 250 && mouseY >= 120 && mouseY <= 170) {
                background(255, 255, 0);
                var computerChoice = floor(random(0,3));
               // text(computerChoice,100,150);
                //text("You chose Owl.",250,150);
                switch(computerChoice){
                    case 0:
                        text("It's a Tie! Owls rule!", 100,150);
                        break;
                    case 1:
                        text("Owl beats Snail! Owl wins!", 100,150);
                        break;
                    case 2:
                        text("Unicorn beats Owl! Unicorn wins!", 50,150);
                }
                
            }
            else if (mouseX >= 150 && mouseX <= 250 && mouseY >= 200 && mouseY <= 250) {
                background(255, 255, 0);
                var computerChoice = floor(random(0,3));
                //text(computerChoice,100,150);
               // text("You chose Snail.",250,220);
                switch(computerChoice){
                    case 0:
                        text("Owl beats Snail! Owl wins!", 100,150);
                        break;
                    case 1:
                        text("It's a Tie! Snails rule!", 100,150);
                        break;
                    case 2:
                        text("Snail beats Unicorn! Snail wins!", 50,150);
                }
            }
            else if (mouseX >= 150 && mouseX <= 250 && mouseY >= 280 && mouseY <= 330) {
                background(255, 255, 0);
                var computerChoice = floor(random(0,3));
                //text(computerChoice,100,150);
               // text("You chose Unicorn.",250,300);
                switch(computerChoice){
                    case 0:
                        text("Unicorn beats Owl! Unicorn wins!", 100,150);
                        break;
                    case 1:
                        text("Snail beats Unicorn! Snail wins!", 100,150);
                        break;
                    case 2:
                        text("It's a Tie! Unicorns rule!", 50,150);
                }
            }

        };
   
