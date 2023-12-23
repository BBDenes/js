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
        console.log(this.#eval())
    }

    #eval(){
        let sum = 0;
        for (let i = 0; i < this.round.length; i++) {
            const point = this.round[i].split(" ");
            if (point[0] == "t") {
                sum += Number(point[1]) *3;
            } else if(point[0] == "d") {
                sum += Number(point[1]) *2;   
            }else sum+= Number(point[1]);
        }
        return sum;
    }

}
