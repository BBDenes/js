function template(playerNum, {score, legs, sets} = {}){
    return(
        `<div id="player${playerNum}">
            <h2>Player 2</h2>
            <div class="scoreboard">
                <h3 id="score1">Score: 501</h3>
                <p class="leg1">Legs: 0</p>
                <p class="set1">Sets: 0</p>
            </div>
            <input type="number">
        </div>`)
}