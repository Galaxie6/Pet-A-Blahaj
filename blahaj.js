let currBlahajTile;
let currEvilBlahajTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}

function setGame() {
    for (let i = 0; i < 9; i++) { // i from 0 -> 8, stops at 9
        //<div id="0-8"></div>
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole, 1000); //1000ms  -  1s
    setInterval(setEvilBlahaj, 2000); //2000ms  -  2s
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (gameOver) {
        return;
    }

    if (currBlahajTile) {
        currBlahajTile.innerHTML = "";
    }

    let Blahaj = document.createElement("img");
    Blahaj.src = "Images/blahaj.png";

    let num = getRandomTile();
    if (currEvilBlahajTile && currEvilBlahajTile.id == num) {
        return;
    }
    currBlahajTile = document.getElementById(num);
    currBlahajTile.appendChild(Blahaj);
}

function setEvilBlahaj() {

    if (gameOver) {
        return;
    }

    if (currEvilBlahajTile) {
        currEvilBlahajTile.innerHTML = "";
    }

    let EvilBlahaj = document.createElement("img");
    EvilBlahaj.src = "Images/evilblahaj.png"

    let num = getRandomTile();
    if (currBlahajTile && currBlahajTile.id == num) {
        return;
    }
    currEvilBlahajTile = document.getElementById(num);
    currEvilBlahajTile.appendChild(EvilBlahaj);
}

function selectTile() {

    if (gameOver) {
        return;
    }

    if (this == currBlahajTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); //update text
    }
    else if (this == currEvilBlahajTile) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true
    }
}