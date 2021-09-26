export function lineCircleCollision(px: number, py: number, cx: number, cy: number, r: number) {
    const distX = px - cx;
    const distY = py - cy;
    const distSq = distX ** 2 + distY ** 2;

    return (distSq <= r ** 2);
}