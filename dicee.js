var diceImages = [
    "images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

    
    function randImg1() {
        var numberOfImages = diceImages.length;
        
        var randomize1 = Math.floor(numberOfImages * Math.random());
        document.getElementById("img1").src = diceImages[randomize1];

        var randomize2 = Math.floor(numberOfImages * Math.random());
        document.getElementById("img2").src = diceImages[randomize2];

        if (randomize1 > randomize2) {
            document.querySelector("h1").innerHTML = "Player 1 Wins!";
            document.querySelector("img").classList.toggle("visibility-1");
            
        } else if (randomize1 === randomize2) {
            document.querySelector("h1").innerHTML = "It's a tie!";
        } else {
            document.querySelector("h1").innerHTML = "Player 2 Wins!";
            document.querySelector("img.visibility-2").classList.toggle("visibility-2");
        }
    }
    
    randImg1();

    



