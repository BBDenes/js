const backup =[{name: "player1", score:501, legs:0, sets:0}, {name: "player2", score:501, legs:0, sets:0}];
const {gameType, legType, setType, playerList} = parseURL(decodeURI(window.location.search));

// let gameType = "501";
// let set = {type: "b", amount: 3};
// let leg = {type: "b", amount: 3};
initPlayers();

function initPlayers(){
    console.log(setType);
    const tScore = gameType == "cricket"? null : Number(gameType);
    const tsets = setType == "none" ? "-" : 0
    for (const player of playerList) {
        players.push(new Player(player, gameType));
    }
    if(players.length == 0){
        players = backup;
    }
    game = players;
    console.log(setType)
    refreshNormal(setType);

}

function refreshNormal(setType) {
    const playersTable = document.getElementsByClassName('playersTable')[0];
    playersTable.innerHTML = `<tr class="headers">
    <th></th>
    <th id="setTypeHeader">${gameHeaderText(setType)}</th>
    <th id="setsHeader">Sets</th>
    <th id="legsHeader">Legs</th>
    <th class="blank"></th>
    </tr>`;
    for (const player of game) {
        playersTable.innerHTML += template(player)
    }
    const currBoxes = playersTable.getElementsByClassName("current")
    for (const box of currBoxes) {
        if (box.parentNode.parentNode.id != players[0].name) {
            // box.parentNode.removeChild(box)
            box.style.display = "none"
        }
    }

}

function gameHeaderText(setType) {
    if (setType.type == "f") {
        return `First to ${setType.amount} sets`
    }
    else if (setType.type == "b") {
        return `Best of ${setType.amount} sets`
    }
}


