import Entity from "./Entity";

export default class Scene {
    children: Entity[] = [];

    constructor() {

    }

    add(e: Entity) {
        this.children.push(e);
    }

    onMouseDown(x: number, y: number) {
        for (let c of this.children) c.onMouseDown(x, y);
    }

    onMouseMove(x: number, y: number) {
        for (let c of this.children) c.onMouseMove(x, y);
    }

    onMouseUp(x: number, y: number) {
        for (let c of this.children) c.onMouseUp(x, y);
    }

    onCanvasTransform() {
        for (let c of this.children) c.onCanvasTransform();
    }

    renderOnDrawingCanvas(drawCtx: CanvasRenderingContext2D) {
        for (let c of this.children) c.renderOnDrawingCanvas(drawCtx);
    }

    renderOnBoard(boardCtx: CanvasRenderingContext2D) {
        for (let c of this.children) c.renderOnBoard(boardCtx);
    }
}