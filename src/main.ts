import "../style/style.css";
import Bezier from "./Bezier";
import Scene from "./Scene";

const canvas = document.querySelector<HTMLCanvasElement>("#canvas")!;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d")!;

// ----------------------------------------------------------------

let scene = new Scene();

let curve = new Bezier(scene);

function draw() {
    requestAnimationFrame(draw);

    ctx.fillStyle = "#24292e";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    curve.render(ctx);
}

window.addEventListener("mousemove", (e) => {
    scene.onMouseMove(e.clientX, e.clientY);
});

window.addEventListener("mouseup", (e) => {
    scene.onMouseUp(e.clientX, e.clientY);
});

draw();

