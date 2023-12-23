let inGame = true;
currentPlayer = null;
let points = [];
let tempPoint;
currentPlayerIndex = 0;

function throwDart(v){
    if(!inGame) return;
    players[currentPlayerIndex].dart(v)
    
    refreshRoundPoints(players[currentPlayerIndex])
    refreshNormal(setType);
}

