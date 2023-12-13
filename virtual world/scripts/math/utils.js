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