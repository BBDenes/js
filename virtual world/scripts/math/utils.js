function getNearestPoint(loc, points, threshold = 15) {
    let min = Number.MAX_SAFE_INTEGER;
    let nearest = null;
    for (const point of points) {
        const dist = distance(point, loc);
        if(dist < min && dist < threshold) {
            min = dist;
            nearest = point;
        }
    }
    return nearest;
}

function distance(a, b){
    return Math.hypot(a.x - b.x, a.y-b.y)
}

function add(p1, p2){
    return new Point( p1.x+ p2.x, p1.y + p2.y);
}

function subV(p1, p2){
    return new Point( p1.x- p2.x, p1.y - p2.y);
}

function scale(p, scale){
    return new Point(p.x * scale ,p.y * scale);
}

function translate(loc, ang, offset){
    return new Point(loc.x + Math.cos(ang) * offset, loc.y + Math.sin(ang) * offset)
}

function angle(p) {
    return Math.atan2(p.y, p.x)                                                                                                                                      
}