import Entity from "./Entity";

export default class Scene {
    children: Entity[] = [];

    constructor() {

    }

    add(e: Entity) {
        this.children.push(e);
    }

    onMouseMove(x: number, y: number) {
        for (let c of this.children) c.onMouseMove(x, y);
    }

    onMouseUp(x: number, y: number) {
        for (let c of this.children) c.onMouseUp(x, y);
    }
}