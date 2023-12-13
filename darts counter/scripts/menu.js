const dartboard = document.getElementById('dartboard');
dartboard.style.display = 'none';
const menuButtons = document.getElementsByClassName("game_btn");
const playerField = document.getElementById("input_player");

for (let i = 0; i < menuButtons.length; i++) {
    const e = menuButtons[i];
    e.addEventListener("mousedown", ()=>{
        refreshButtons(i);
    });
    
}

function refreshButtons(ind) {
    for (let i = 0; i < menuButtons.length; i++) {
        if (i == ind) {
            menuButtons[i].classList.add('selected');
        } else {
            menuButtons[i].classList.remove('selected');
            
        }
    }
}

function addPlayer(name) {
    const players = document.getElementById('players');
    let newContainer = players
}