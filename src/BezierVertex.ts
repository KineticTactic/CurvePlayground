import DraggablePoint from "./DraggablePoint";
import Victor from "victor";
import Scene from "./Scene";
import {CanvasTransforms} from "./common";

export default class BezierVertex extends DraggablePoint {
    handleA: DraggablePoint | null = null;
    handleB: DraggablePoint | null = null;

    constructor(scene: Scene, pos: Victor) {
        super(scene, pos, 15, "gray");

        // this.handleA = new DraggablePoint(scene, new Victor(50, 50));
        // this.handleB = new DraggablePoint(scene, new Victor(500, 300));
    }

    override renderOnBoard(boardCtx: CanvasRenderingContext2D) {
        boardCtx.strokeStyle = "white";
        boardCtx.lineWidth = 1;

        boardCtx.save();
        boardCtx.translate(CanvasTransforms.offset.x, CanvasTransforms.offset.y);
        boardCtx.beginPath();

        if (this.handleA) {
            boardCtx.moveTo(this.pos.x * CanvasTransforms.scale, this.pos.y * CanvasTransforms.scale);
            boardCtx.lineTo(this.handleA.pos.x * CanvasTransforms.scale, this.handleA.pos.y * CanvasTransforms.scale);
        }

        if (this.handleB) {
            boardCtx.moveTo(this.pos.x * CanvasTransforms.scale, this.pos.y * CanvasTransforms.scale);
            boardCtx.lineTo(this.handleB.pos.x * CanvasTransforms.scale, this.handleB.pos.y * CanvasTransforms.scale);
        }

        boardCtx.stroke();
        boardCtx.restore();
    }
}