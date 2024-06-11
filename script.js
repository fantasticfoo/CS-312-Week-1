
// get random dice number function
function getRandomDiceNumber()
{
    return Math.floor(Math.random() * 6) +1;
}

// initialize random number function
var randNum1 = getRandomDiceNumber();

var randDiceImg = "dice" + randNum1 + ".png";

var randImgSrc = "images/" + randDiceImg;

var img1 = document.querySelectorAll("img")[0];

var randNum2 = getRandomDiceNumber();


img1.setAttribute("src", randImgSrc);

var randImgSrc2 = "images/dice" + randNum2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randImgSrc2);


// set player dice values to random numbers
var p1DiceVal = randNum1;
var p2DiceVal = randNum2;

var h1 = document.querySelector("h1");


     if(p1DiceVal > p2DiceVal)
        {
            // display player 1 wins
            // red flag on left
            h1.innerHTML = "🚩Player 1 Wins!"
            
        
        }

    else if(p2DiceVal > p1DiceVal)
        {
            // display player 2 wins
            // red flag on right
            h1.innerHTML = "Player 2 Wins!🚩"
            
        }

        // if player dice values are equal
    else
    {
        // display a draw
        h1.innerHTML = "Draw!";
    }
