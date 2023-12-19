function parseURL(url){
    const raw =  url.split("&");
    const gameType = raw[0].slice(1, raw[0].length).split("=")[1];
    const setType = {type: raw[1].split("=")[1].split("+")[0], amount: Number(raw[1].split("=")[1].split("+")[1])};
    const legType = {type: raw[2].split("=")[1].split("+")[0], amount: Number(raw[2].split("=")[1].split("+")[1])};
    return {gameType, setType, legType};
}

function template(player, {score, legs, sets} = {}){
    return(
        `
        <div class="${player}"
            <h2>${player[0].toUpperCase() + player.slice(1)}</h2>
            <div class="scoreboard">
                <h3 id="score${player}">Score: ${score}</h3>
                <p class="leg${player}">Legs: ${legs}</p>
                <p class="set${player}">Sets: ${sets}</p>
            </div>
        </div>
    `);
}
