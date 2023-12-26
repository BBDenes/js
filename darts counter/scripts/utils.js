let players = [

]

let game = [

]

let currentPlayerIndex = 0;


const needToWinBestOf = {
    3: 2,
    5: 3,
    7: 4,
    9: 7,
}

function parseURL(url){
    const raw =  url.split("&");
    const gameType = raw[0].slice(1, raw[0].length).split("=")[1];
    console.log(gameType)
    const setType = {type: raw[1].split("=")[1].split("+")[0], amount: Number(raw[1].split("=")[1].split("+")[1])};
    const legType = {type: raw[2].split("=")[1].split("+")[0], amount: Number(raw[2].split("=")[1].split("+")[1])};
    if (raw[3] == undefined) {
        raw[3] = "players=Player1%2FPlayer2%2FPlayer3"
    }
    const rawPlayers = raw[3].split("=")[1].split("%2F");
    const playerList = rawPlayers.map(element => {
        return element.replace("+", " ");
    });
    console.log(playerList)
    return {gameType, setType, legType, playerList};
}

function template(player){
    return(
        `<tr class="player" id=${player.name.replace(" ", "_")}>
        <td><div class="current"></div></td>
        <td class="name"><h2 >${player.name}</h2></td>
        <td class="set"><p class="set${player.name.replace(" ", "_")}">${player.sets}</p></td>
        <td class="leg"><p class="leg${player.name.replace(" ", "_")}">${player.legs}</p></td>
        <td class="score"><h3 id="score${player.name.replace(" ", "_")}">${player.score}</h3></td>
        </tr>`
    );
}

function refreshRoundPoints(player) {
    document.getElementById('currentPoints').innerHTML = player.round.join(", ")
}

function undo(player){
    game[currentPlayerIndex].round.pop();
    refreshRoundPoints(game[currentPlayerIndex])
}

function nextPlayer() {
    // const rowHeight = document.querySelector(".row").getBoundingClientRect().height;
    // const div = document.querySelector(".current");

    // div.style.translateY()

    currentPlayerIndex++;
    if (currentPlayerIndex >= game.length) {
        currentPlayerIndex = 0;
    }
    console.log(game[currentPlayerIndex])

    const box = document.querySelector(".current")
    const rowHeight = document.querySelector(".player").getBoundingClientRect().height;
    console.log(currentPlayerIndex * rowHeight);
    box.style.transform = `translateY(${currentPlayerIndex * rowHeight})`;
    console.log(box.style.transform)
}

function winLeg(winner) {
    if (legType.type == 'f') {
        if (winner.legs + 1 == legType.amount) {
            winSet(winner);
            return;
        }
        winner.legs++;
    }else if(legType == 'b'){
        if (winner.legs +1 == legType.amount || legType.amount - winner.legs) {
            
        }
    }

    for (const player of game) {
        player.resetScore()
    }
}
