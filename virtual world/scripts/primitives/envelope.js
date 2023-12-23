class Envelope{
    constructor(skeleton, width){
        this.skeleton = skeleton;
        this.poly = this.#generatePolygon(width)
    }

    #generatePolygon(w){
        const{p1, p2} = this.skeleton;
        const rad = w/2;
        const alpha = Math.atan2(p1.y - p2.y, p1.x - p2.x);
        const alphaCw = alpha + Math.PI/2;
        const alphaCCw = alpha - Math.PI/2;
        const p1CCw = translate(p1, alphaCCw, rad);
        const p2CCw = translate(p2, alphaCCw, rad);
        const p1Cw = translate(p1, alphaCw, rad);
        const p2Cw = translate(p2, alphaCw, rad);

        return new Polygon([p1CCw, p2CCw, p1Cw, p2Cw]);
    }
}