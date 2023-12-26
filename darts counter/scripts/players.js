class Player{
    constructor(name, gameType){
        this.name = name;
        this.gameType = gameType
        this.sets = this.gameType=="cricket" ? null : 0;
        this.legs = this.gameType=="cricket" ? null : 0;
        this.score = this.gameType == "cricket"? null : Number(this.gameType);
        this.round = [];
    }

    dart(v){
        this.round.push(v);
        if (this.#eval() > this.score || this.#eval()+1 == this.score) { //bust
            nextPlayer();
            return;
        }

        if(this.#eval() == this.score ){ //pontosan annyi
            if (this.round[this.round.length-1][0] == "d" || this.round[this.round.length-1][0] == "bull") { //megdobta
                winLeg(this);
                this.round = [];
                return;
            }else{
                nextPlayer();
                refreshNormal(setType)
                this.round = [];
                return
            }
        }
        if (this.round.length == 3) { // megdobta a 3 nyilat
            this.score -= this.#eval();
            nextPlayer();
            refreshNormal(setType)
            this.round = [];
            return
        }
    }

    resetScore(){
        this.score = this.gameType == "cricket"? null : Number(this.gameType);
    }

    #eval(){
        let sum = 0;
        for (let i = 0; i < this.round.length; i++) {
            const point = this.round[i].split(" ");
            console.log(point);
            switch (point[0]) {
                case "miss":
                    sum += 0;
                break;
                case "bull":
                    sum += point[1] == "inner" ? 50:25
                break;
                case "t":
                    sum += Number(point[1]) *3;
                break;
                case "d":
                    sum += Number(point[1]) *2;   
                break
                default:
                    sum+= Number(point[1]);
                break;
            }
            // if (point[0] == "miss") {
            //     sum += 0;
            // }else if (point[0] == "bull") {
            //     sum += point[1] == "inner" ? 50:25
            // }
            // else if (point[0] == "t") {
            //     sum += Number(point[1]) *3;
            // }else if(point[0] == "d") {
            //     sum += Number(point[1]) *2;   
            // }else sum+= Number(point[1]);
        }
        return sum;
    }

    //todo: Tesztelni mülszik e a dupla kiszálló
    //kiszálló példa
    //szett számláló
    //krikett
    //megjavítani a player kijelzőt

}
