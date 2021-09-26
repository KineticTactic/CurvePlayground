import "../style/style.css";
import Bezier from "./Bezier";
import Scene from "./Scene";
import Victor from "victor";
import {CanvasTransforms} from "./common";
import DraggablePoint from "./DraggablePoint";

const boardCanvas = document.querySelector<HTMLCanvasElement>("#canvas")!;
boardCanvas.width = window.innerWidth;
boardCanvas.height = window.innerHeight;
const boardCtx = boardCanvas.getContext("2d")!;

const drawingCanvas = document.createElement("canvas");
drawingCanvas.width = 1000;
drawingCanvas.height = 1000;
const drawCtx = drawingCanvas.getContext("2d")!;

// ----------------------------------------------------------------

let scene = new Scene();
let curve = new Bezier(scene);

let isBeingPanned = false;
let isNewVertexBeingCreated = false;

function draw() {
    requestAnimationFrame(draw);

    boardCtx.fillStyle = "#24292e";
    boardCtx.fillRect(0, 0, boardCanvas.width, boardCanvas.height);

    drawCtx.fillStyle = "#111";
    drawCtx.fillRect(0, 0, drawingCanvas.width, drawingCanvas.height);

    scene.renderOnDrawingCanvas(drawCtx);

    boardCtx.drawImage(drawingCanvas, CanvasTransforms.offset.x, CanvasTransforms.offset.y, drawingCanvas.width * CanvasTransforms.scale, drawingCanvas.height * CanvasTransforms.scale);

    scene.renderOnBoard(boardCtx);
}

// ---------------GLOBAL EVENT LISTENERS ----------------------

window.addEventListener("mousedown", (e) => {

    scene.onMouseDown(e.clientX, e.clientY);

    if (e.button === 1) {
        isBeingPanned = true;
    }
});

window.addEventListener("mouseup", (e) => {
    scene.onMouseUp(e.clientX, e.clientY);

    if (e.button === 1) {
        isBeingPanned = false;
    }

    isNewVertexBeingCreated = false;

});

window.addEventListener("mousemove", (e) => {
    scene.onMouseMove(e.clientX, e.clientY);

    if (isBeingPanned) {
        CanvasTransforms.offset.add(new Victor(e.movementX, e.movementY));
        scene.onCanvasTransform();
    }

    if (isNewVertexBeingCreated) {
        let mouseVec = new Victor(e.clientX, e.clientY);
        let diff = mouseVec.clone().subtract(curve.vertices[curve.vertices.length - 1].pos);
        let vec = curve.vertices[curve.vertices.length - 1].pos.clone().add(diff.multiplyScalar(-1));
        curve.vertices[curve.vertices.length - 1].handleA!.setPosition(e.clientX, e.clientY);
        curve.vertices[curve.vertices.length - 1].handleB!.setPosition(vec.x, vec.y);
    }
});

window.addEventListener("wheel", (e) => {
    CanvasTransforms.scale -= e.deltaY / 5000;
    scene.onCanvasTransform();

});

boardCanvas.addEventListener("mousedown", (e) => {
    if (e.button === 1) return;

    curve.addVertex(scene, e.clientX, e.clientY);
    if (curve.vertices[curve.vertices.length - 1].handleA)
        curve.vertices[curve.vertices.length - 1].handleA!.setPosition(e.clientX, e.clientY);
    else
        curve.vertices[curve.vertices.length - 1].handleA = new DraggablePoint(scene, new Victor(e.clientX, e.clientY));
    isNewVertexBeingCreated = true;

    curve.vertices[curve.vertices.length - 1].handleA!.setPosition(e.clientX, e.clientY);
    curve.vertices[curve.vertices.length - 1].handleB = new DraggablePoint(scene, new Victor(e.clientX, e.clientY));
})

draw();

