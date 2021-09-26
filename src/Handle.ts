import Victor from "victor";

export default class Handle {
    a: Victor;
    b: Victor;

    constructor(a: Victor, b: Victor) {
        this.a = a;
        this.b = b;
    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = "white";

        ctx.beginPath();
        ctx.moveTo(this.a.x, this.a.y);
        ctx.lineTo(this.b.x, this.b.y);
        ctx.stroke();
    }
}