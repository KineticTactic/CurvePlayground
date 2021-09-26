import Victor from "victor";
import Entity from "./Entity";
import Scene from "./Scene";

export default class DraggablePoint extends Entity {
    static draggablesContainer = document.getElementById("draggables")!;

    size: number;
    elt: HTMLDivElement;
    isBeingDragged= false;

    constructor(scene: Scene, pos: Victor) {
        super(pos);
        this.size = 25;

        this.elt = document.createElement("div");

        this.elt.style.width = `${this.size}px`;
        this.elt.style.height = `${this.size}px`;
        this.elt.style.backgroundColor = "lime";
        this.elt.style.position = "absolute";
        this.elt.style.borderRadius = "50%";
        this.elt.style.userSelect = "none";

        this.updatePos();

        this.elt.addEventListener("mouseenter", () => {
            this.elt.style.backgroundColor = "cyan";
        });

        this.elt.addEventListener("mouseleave", () => {
            this.elt.style.backgroundColor = "lime";
        });

        this.elt.addEventListener("mousedown", (_e) => {
            this.isBeingDragged = true;
        });

        DraggablePoint.draggablesContainer.appendChild(this.elt);

        scene.add(this);
    }

    private updatePos() {
        this.elt.style.top = `${this.pos.y - this.size/2}px`;
        this.elt.style.left = `${this.pos.x - this.size/2}px`;
    }

    override onMouseMove(x: number, y: number) {
        if (!this.isBeingDragged)
            return;

        this.pos.x = x;
        this.pos.y = y;
        this.updatePos();
    }

    override onMouseUp() {
        this.isBeingDragged = false;
    }
}