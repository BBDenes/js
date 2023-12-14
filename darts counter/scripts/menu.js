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

document.getElementById('addButton').addEventListener('mousedown', ()=>{
    const name = document.getElementById('input_player').value;
    addPlayer(name);
});



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
    if(inPlayers(name)){
        alert("Ilyen nevű játékos már van");
        return;
    }
    players.push({"name":name});

    const playersDiv = document.getElementsByClassName('player_list')[0];
    const newContainer = document.createElement('div');
    const newName = document.createElement('p');
    const newButton = document.createElement('button');                 //táblával megcsinálni, egyszerűbb
    newName.classList.add('player_name');
    newContainer.classList.add('player_container')
    newButton.classList.add('remove_player');
    newButton.classList.add(players.length-1);
    newName.innerText = name[0].toUpperCase() + name.slice(1);
    newButton.addEventListener('mousedown', ()=>{removePlayer(newButton.classList[1])})
    newButton.innerText = "Törlés"
    newContainer.appendChild(newName);
    newContainer.appendChild(newButton);
    playersDiv.appendChild(newContainer);



}

function removePlayer(ind) {
    console.log(ind);
}

function inPlayers(name){
    for (const player of players) {
        if(player.name == name){
            return true
        }
    }
    return false
}