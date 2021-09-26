import Victor from "victor";
import Scene from "./Scene";
import Entity from "./Entity";
import BezierVertex from "./BezierVertex";
import DraggablePoint from "./DraggablePoint";

export default class Bezier extends Entity {
    vertices: BezierVertex[] = [];

    constructor(scene: Scene) {
        super(new Victor(0, 0));
        //this.addVertex(scene, 100, 100);
        //this.addVertex(scene, 500, 200);
        // this.addVertex(scene, 300, 800);

        scene.add(this);
    }

    addVertex(scene: Scene, x: number, y: number) {
        this.vertices.push(new BezierVertex(scene, new Victor(x, y)));

        if (this.vertices.length === 1) return;

        if (!this.vertices[this.vertices.length - 2].handleB)
            this.vertices[this.vertices.length - 2].handleB = new DraggablePoint(scene, new Victor(Math.random() * 1000, Math.random() * 1000));
        this.vertices[this.vertices.length - 1].handleA = new DraggablePoint(scene, new Victor(Math.random() * 1000, Math.random() * 1000));
    }

    override renderOnDrawingCanvas(drawCtx: CanvasRenderingContext2D) {
        if (this.vertices.length === 0) return;

        drawCtx.strokeStyle = "white";
        drawCtx.lineWidth = 3;
        drawCtx.beginPath();
        drawCtx.moveTo(this.vertices[0].pos.x, this.vertices[0].pos.y);

        for (let i = 0; i < this.vertices.length - 1; i++) {
            let p0 = this.vertices[i].pos.clone();
            let p1 = this.vertices[i].handleB!.pos.clone();
            let p2 = this.vertices[i + 1].handleA!.pos.clone();
            let p3 = this.vertices[i + 1].pos.clone();

            for (let t = 0; t <= 1; t += 0.001) {
                let t1 = p0.clone().multiplyScalar((1 - t) ** 3);
                let t2 = p1.clone().multiplyScalar(3 * ((1 - t) ** 2) * t);
                let t3 = p2.clone().multiplyScalar(3 * (1 - t) * (t ** 2));
                let t4 = p3.clone().multiplyScalar(t ** 3);
                let b = t1.add(t2.add(t3.add(t4)));
                drawCtx.lineTo(b.x, b.y);
            }
            drawCtx.stroke();
        }
    }

};