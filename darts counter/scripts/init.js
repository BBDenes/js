const {gameType, legType, setType, playerList} = parseURL(decodeURI(window.location.search));

// let gameType = "501";
// let set = {type: "b", amount: 3};
// let leg = {type: "b", amount: 3};
initPlayers();

function initPlayers(){
    console.log(setType);
    for (const player of playerList) {
        players.push(new Player(player, gameType));
    }
    if(players.length == 0){
        const p1 = new Player("Player1", gameType);
        const p2 = new Player("Player2", gameType);
        players = [p1, p2];
    }
    game = players;
    console.log(setType)
    refreshNormal(setType);
    
    const box = document.querySelector(".current")
    box.style.transform = `translateY(0)`;

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
    }else if(setType.type = "none"){
        return `No sets`
    }
}


