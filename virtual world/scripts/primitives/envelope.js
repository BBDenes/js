class Envelope{
    constructor(skeleton, width, roundness = 1){
        this.skeleton = skeleton;
        this.poly = this.#generatePolygon(width, roundness)
    }

    #generatePolygon(w, roundness){
        const{p1, p2} = this.skeleton;
        const rad = w/2;
        const alpha = angle(subV(p1, p2));
        const alphaCw = alpha + Math.PI/2;
        const alphaCCw = alpha - Math.PI/2;
        const points = [];
        const step = Math.PI/Math.max(1, roundness);
        const eps = step/2
        for (let i = alphaCCw; i <= alphaCw + eps; i+= step) {
            points.push(translate(p1, i, rad));
            
        }
        for (let i = alphaCCw; i <= alphaCw + eps; i+= step) {
            points.push(translate(p2, Math.PI + i, rad));
            
        }

        return new Polygon(points);
    }

    draw(ctx){
        this.poly.draw(ctx)
    }
}