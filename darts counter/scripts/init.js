import players from "./players.js";

const backup =[{name: "player1", score:501, legs:0, sets:0}, {name: "player2", score:501, legs:0, sets:0}];

const {gameType, legType, setType} = parseURL(decodeURI(window.location.search));
// let gameType = "501";
// let set = {type: "b", amount: 3};
// let leg = {type: "b", amount: 3};
console.log(legType);

