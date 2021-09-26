import Victor from "victor";

export default class Entity {
    pos: Victor;

    constructor(pos: Victor) {
        this.pos = pos;
    }

    onMouseDown(_x: number, _y: number) {
    }

    onMouseMove(_x: number, _y: number) {
    }

    onMouseUp(_x: number, _y: number) {
    }

    onCanvasTransform() {
    }

    renderOnBoard(_boardCtx: CanvasRenderingContext2D) {
    }

    renderOnDrawingCanvas(_drawCtx: CanvasRenderingContext2D) {
    }

}