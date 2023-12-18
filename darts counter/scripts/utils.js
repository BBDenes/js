function parseURL(url){
    let raw =  url.split("&");
    
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
    `)
}
