let inGame = true;
let points = [];
let tempPoint;
let currentPlayerIndex = 0;

function throwDart(v){
    if(!inGame) return;
    players[currentPlayerIndex].dart(v)
    
    refreshRoundPoints(players[currentPlayerIndex])
    refreshNormal(setType);
}

