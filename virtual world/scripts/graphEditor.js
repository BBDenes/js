class GraphEditor{
    constructor(canvas, graph){
        this.canvas = canvas;
        this.graph = graph;
        this.selected = null;
        this.hovered = null;
        this.dragging = false;
        this.ctx = this.canvas.getContext('2d');
    
        this.#addEventListeners();
    
    }

    display(){
        this.graph.draw(this.ctx);
        if(this.selected){
            this.selected.draw(this.ctx, { outline: true});
        }
        if(this.hovered){
            this.hovered.draw(this.ctx, { fill: true});
        }
    }

    #addEventListeners(){
        this.canvas.addEventListener('mousedown', (e)=>{
            if (e.button == 2) {
                if (this.hovered) {
                    this.#removePoint(this.hovered);
                }else{
                    this.selected = null;
                }
            }
            if (e.button == 0) {
                const mouse = new Point(e.offsetX, e.offsetY);
                if (this.hovered) {
                    this.#select(this.hovered);
                    this.selected = this.hovered;
                    this.dragging = true;
                    return;
                }
                this.graph.addPoint(mouse);
                this.#select(mouse);
                
                this.hovered = mouse;
                
            }
        });
        
        this.canvas.addEventListener('mousemove', (e)=>{
            const mouse = new Point(e.offsetX, e.offsetY);
            this.hovered = getNearestPoint(mouse, this.graph.points);
            if(this.dragging){
                this.selected.x = mouse.x;
                this.selected.y = mouse.y;
            }
            
        });

        this.canvas.addEventListener('contextmenu', (e)=>{e.preventDefault();});
        this.canvas.addEventListener('mouseup', (e)=>{this.dragging = false;});
        
    }

    #select(point){
        if(this.selected){
            this.graph.tryAddSegment(new Segment(this.selected, point));
        }
        this.selected = point;
    }

    #removePoint(point){
        this.graph.removePoint(point);
        if(this.selected == point) this.selected = null;
        this.hovered = null;
        
    }

}