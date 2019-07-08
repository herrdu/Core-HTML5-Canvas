var canvasDom = <HTMLCanvasElement>document.getElementById("canvas"),
  context: CanvasRenderingContext2D = canvasDom.getContext("2d");

context.font = "38pt Arial";

context.fillStyle = "cornflowerblue";
context.strokeStyle = "blue";

context.fillText("Hello Canvas1", canvasDom.width / 2 - 150, canvasDom.height / 2 + 15);
context.strokeText("Hello Canvas2", canvasDom.width / 2 - 150, canvasDom.height / 2 + 15);
