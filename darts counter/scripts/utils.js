function parseURL(url){
    const raw =  url.split("&");
    console.log(raw)
    const gameType = raw[0].slice(1, raw[0].length).split("=")[1];
    const setType = {type: raw[1].split("=")[1].split("+")[0], amount: Number(raw[1].split("=")[1].split("+")[1])};
    const legType = {type: raw[2].split("=")[1].split("+")[0], amount: Number(raw[2].split("=")[1].split("+")[1])};
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

