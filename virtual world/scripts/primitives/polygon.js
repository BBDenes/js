class Polygon{
    constructor(points){
        this.points = points;
        this.segments = [];
        for (let i = 1; i <= points.length; i++) {
            this.segments.push(new Segment(points[i-1], points[i%points.length]))
        }
    }

    static union(polys){
        Polygon.multiBreak(polys);
        const keptSegments = [];
        for (let i = 0; i < polys.length; i++) {
            for (const seg of polys[i].segments) {
                let keep = true;
                for (let j = 0; j < polys.length; j++) {
                    if (i != j) {
                        if (polys[j].containsSegment(seg)) {
                            keep = false;
                            this.break;
                        }
                    }
                }
                if (keep) {
                    keptSegments.push(seg)
                }
            }
        }
        return keptSegments
    }

    static multiBreak(polys){
        for (let i = 0; i < polys.length-1; i++) {
            for (let j = i+1; j < polys.length; j++) {
                Polygon.break(polys[i], polys[j])
            }
        }
    }

    static break(poly1, poly2){
        const segs1 = poly1.segments;
        const segs2 = poly2.segments;
        for (let i = 0; i < segs1.length; i++) {
           for (let j = 0; j < segs2.length; j++) {
              const int = getIntersection(
                 segs1[i].p1,
                 segs1[i].p2,
                 segs2[j].p1,
                 segs2[j].p2
              );
  
              if (int && int.offset != 1 && int.offset != 0) {
                const point = new Point(int.x, int.y);
                let aux = segs1[i].p2;
                segs1[i].p2 = point;
                segs1.splice(i + 1, 0, new Segment(point, aux));
                aux = segs2[j].p2;
                segs2[j].p2 = point;
                segs2.splice(j + 1, 0, new Segment(point, aux));
              }
           }
        }
    }

    containsSegment(seg){
        const midPoint = average(seg.p1, seg.p2);
        return this.containsPoint(midPoint);
    }

    containsPoint(point){
        const outerP = new Point(-1000, -1000);
        let intCount = 0;
        for (const seg of this.segments) {
            const int = getIntersection(outerP, point, seg.p1, seg.p2);
            if (int) {
                intCount ++;
            }
        }
        return intCount%2 == 1;
    }

    drawSegments(ctx){
        for (const seg of this.segments) {
            seg.draw(ctx, {color: getRandomColor(), width:5})
        }
    }

    draw(ctx, {stroke = "blue", lineWidth  = 2, fill = "rgba(0, 0, 255, 0.3)"} = {}){
        ctx.beginPath();
        ctx.fillStyle = fill;
        ctx.strokeStyle = stroke;
        ctx.lineWidth = lineWidth;
        ctx.moveTo(this.points[0].x, this.points[0].y);
        for (let i = 1; i < this.points.length; i++) {
            ctx.lineTo(this.points[i].x, this.points[i].y);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    }
}