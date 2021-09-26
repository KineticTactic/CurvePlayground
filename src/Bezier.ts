import Victor from "victor";
import DraggablePoint from "./DraggablePoint";
import Scene from "./Scene";
import Entity from "./Entity";

export default class Bezier extends Entity {
    pointA: DraggablePoint;
    pointB: DraggablePoint;
    handleA: DraggablePoint;
    handleB: DraggablePoint;

    constructor(scene: Scene) {
        super(new Victor(0, 0));
        this.pointA = new DraggablePoint(scene, new Victor(100, 100));
        this.pointB = new DraggablePoint(scene, new Victor(500, 200));
        this.handleA = new DraggablePoint(scene, new Victor(50, 50));
        this.handleB = new DraggablePoint(scene, new Victor(500, 300));
        scene.add(this);
    }

    render(ctx: CanvasRenderingContext2D) {
        let p0 = this.pointA.pos.clone();
        let p1 = this.handleA.pos.clone();
        let p2 = this.handleB.pos.clone();
        let p3 = this.pointB.pos.clone();

        ctx.strokeStyle = "white";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(this.pointA.pos.x, this.pointA.pos.y);
        for(let t = 0; t <= 1; t += 0.01) {
            let t1 = p0.clone().multiplyScalar((1 - t) ** 3);
            let t2 = p1.clone().multiplyScalar(3 * ((1 - t) ** 2) * t);
            let t3 = p2.clone().multiplyScalar(3 * (1- t) * (t ** 2) );
            let t4 = p3.clone().multiplyScalar(t ** 3);
            let b = t1.add(t2.add(t3.add(t4)));
            ctx.lineTo(b.x, b.y);
        }
        ctx.stroke();

        ctx.strokeStyle = "white";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(this.pointA.pos.x, this.pointA.pos.y);
        ctx.lineTo(this.handleA.pos.x, this.handleA.pos.y);
        ctx.moveTo(this.pointB.pos.x, this.pointB.pos.y);
        ctx.lineTo(this.handleB.pos.x, this.handleB.pos.y);
        ctx.stroke();
    }
};