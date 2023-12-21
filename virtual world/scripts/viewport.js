class Viewport{
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');

        this.zoom = 1

        this.#addEventListeners();
    }

    getMouse(e){
        console.log(new Point(e.offsetX * this.zoom, e.offsetY*this.zoom))
        return new Point(e.offsetX * this.zoom, e.offsetY*this.zoom);
    }

    #addEventListeners(){
        this.canvas.addEventListener('wheel', this.#handleMouseWheel.bind(this));
    }

    #handleMouseWheel(e){
        const dir = Math.sign(e.deltaY)
        const step = 0.1;
        this.zoom += dir * step;
        this.zoom = Math.max(1, Math.min(5, this.zoom)); 
    }
}