class GraphEditor{
    constructor(viewport, graph){
        this.viewport = viewport;
        this.canvas = viewport.canvas;

        this.graph = graph;
        this.selected = null;
        this.hovered = null;
        this.dragging = false;
        this.ctx = this.canvas.getContext('2d');
        this.mouse = null;
    
        this.#addEventListeners();
    
    }

    display(){
        this.graph.draw(this.ctx);
        if(this.selected){
            const intent = this.hovered? this.hovered:this.mouse
            new Segment(this.selected, intent).draw(ctx, {dash : [3, 3]});
            this.selected.draw(this.ctx, { outline: true});
        }
        if(this.hovered){
            this.hovered.draw(this.ctx, { fill: true});
        }
    }

    dispose(){
        this.graph.dispose();
        this.selected = null;
        this.hovered = null;
    }

    #addEventListeners(){
        this.canvas.addEventListener('mousedown', this.#handleMouseDown.bind(this));
        
        this.canvas.addEventListener('mousemove', this.#handleMouseMove.bind(this));

        this.canvas.addEventListener('contextmenu', (e)=>{e.preventDefault();});
        this.canvas.addEventListener('mouseup', (e)=>{this.dragging = false;});
        
    }

    #handleMouseDown(e){
        if (e.button == 2) {
            if(this.selected){
                this.selected = null;
            }
            else if(this.hovered){
                this.#removePoint(this.hovered);
            }
        }
        if (e.button == 0) {
            //this.mouse = this.viewport.getMouse(e);
            if (this.hovered) {
                this.#select(this.hovered);
                this.selected = this.hovered;
                this.dragging = true;
                return;
            }
            this.graph.addPoint(this.mouse);
            this.#select(this.mouse);
            
            this.hovered = this.mouse;
            
        }
    }
    #handleMouseMove(e){
        this.mouse = this.viewport.getMouse(e, true);
        this.hovered = getNearestPoint(this.mouse, this.graph.points, 10*this.viewport.zoom);
        if(this.dragging){
            this.selected.x = this.mouse.x;
            this.selected.y = this.mouse.y;
        }
            
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