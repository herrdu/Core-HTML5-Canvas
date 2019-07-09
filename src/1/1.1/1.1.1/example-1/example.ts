let canvas = <HTMLCanvasElement>document.getElementById("canvas"),
  context: CanvasRenderingContext2D = canvas.getContext("2d");

context.font = "38pt Arial";

context.fillStyle = "cornflowerblue";
context.strokeStyle = "blue";

context.fillText("Hello Canvas1", canvas.width / 2 - 150, canvas.height / 2 + 15);
context.strokeText("Hello Canvas2", canvas.width / 2 - 150, canvas.height / 2 + 15);
