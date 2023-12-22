let inGame = true;
currentPlayer = null;
let points = [];
let tempPoint;
currentPlayer = players[0];

function throwDart(v){
    if(!inGame) return;
    const value = v.split(" ");
    value[1] = Number(value[1]);
    let raw;
    if (value[0] == "t") {
        raw = 3*value[1];
    }else if (value[0]== "d") {
        raw = 2*value[1];
    }else{
        raw = value[1];
    }
    points.push(raw)
    document.getElementById('currentPoints').innerHTML += ", " + value.join("")
    refresh();
}

function isOnCheckout(player) {
    if (player.score < 171) {
        return true;
    } else {
        return false;
    }
}

function isTooMuch(player, point) {
    if (point > player.score) {
        
    }
}

function undo() {
    currentPlayer.score += points.pop();

}
