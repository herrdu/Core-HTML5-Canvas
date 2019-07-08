var canvasDom = <HTMLCanvasElement>document.getElementById("cavans"),
  context = canvasDom.getContext("2d");

const FONT_HEIGHT = 15,
  MARGIN = 35,
  HAND_TRUNCATION = canvasDom.width / 25,
  HOUR_HAND_TRUNCATION = canvasDom.width / 10,
  NUMERAL_SPACING = 20,
  RADIUS = canvasDom.width / 2 - MARGIN,
  HADN_RADIUS = RADIUS + NUMERAL_SPACING;

function drawCircle() {
  context.beginPath();
  context.arc(canvasDom.width / 2, canvasDom.height / 2, RADIUS, 0, Math.PI * 2, true);

  context.stroke();
}

function drawNumberals() {
  var numerals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    angle = 0,
    numeralWidth = 0;

  numerals.forEach(numeral => {
    angle = (Math.PI / 6) * (numeral - 3);
    numeralWidth = context.measureText(numeral.toString()).width;
  });
}
