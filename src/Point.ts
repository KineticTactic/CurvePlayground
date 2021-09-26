export default class Point {
    x: number;
    y: number;
    r: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.r = 15;
    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r * 2, 0, Math.PI * 2);
        ctx.fill();
    }
}