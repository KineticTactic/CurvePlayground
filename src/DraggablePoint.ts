import Victor from "victor";
import Entity from "./Entity";
import Scene from "./Scene";
import {CanvasTransforms} from "./common";

export default class DraggablePoint extends Entity {
    static draggablesContainer = document.getElementById("draggables")!;

    size: number;
    elt: HTMLDivElement;
    isBeingDragged = false;

    constructor(scene: Scene, pos: Victor, size = 15, color = "lime") {
        super(pos);
        this.size = size;

        this.elt = document.createElement("div");

        this.elt.style.width = `${this.size}px`;
        this.elt.style.height = `${this.size}px`;
        this.elt.style.backgroundColor = color;
        this.elt.style.position = "absolute";
        this.elt.style.borderRadius = "50%";
        this.elt.style.userSelect = "none";

        this.updateEltPos();

        this.elt.addEventListener("mouseenter", () => {
            this.elt.style.backgroundColor = "cyan";
        });

        this.elt.addEventListener("mouseleave", () => {
            this.elt.style.backgroundColor = color;
        });

        this.elt.addEventListener("mousedown", (_e) => {
            this.isBeingDragged = true;
        });

        DraggablePoint.draggablesContainer.appendChild(this.elt);

        scene.add(this);
    }

    private updateEltPos() {
        this.elt.style.left = `${(this.pos.x - this.size / CanvasTransforms.scale / 2) * CanvasTransforms.scale + CanvasTransforms.offset.x}px`;
        this.elt.style.top = `${(this.pos.y - this.size / CanvasTransforms.scale / 2) * CanvasTransforms.scale + CanvasTransforms.offset.y}px`;
    }

    // override onMouseDown(x: number, y: number) {
    // if (lineCircleCollision(x, y, this.pos.x, this.pos.y, this.size)) {
    //     this.isBeingDragged = true;
    // }
    // }

    setPosition(x: number, y: number) {
        this.pos.x = x;
        this.pos.y = y;
        this.updateEltPos();
    }

    override onMouseMove(x: number, y: number) {
        if (!this.isBeingDragged)
            return;

        this.pos.x = (x - CanvasTransforms.offset.x) / CanvasTransforms.scale;
        this.pos.y = (y - CanvasTransforms.offset.y) / CanvasTransforms.scale;
        this.updateEltPos();
    }

    override onMouseUp() {
        this.isBeingDragged = false;
    }

    override onCanvasTransform() {
        this.updateEltPos();
    }

    // override renderOnBoard(boardCtx: CanvasRenderingContext2D) {
    //     boardCtx.fillStyle = "cyan";
    //
    //     boardCtx.save();
    //     boardCtx.translate(offset.x, offset.y);
    //
    //     boardCtx.beginPath();
    //     boardCtx.arc(this.pos.x * zoom, this.pos.y * zoom, this.size / 2, 0, Math.PI * 2);
    //     boardCtx.fill();
    //
    //     boardCtx.restore();
    // }
}