function rectangle() {
  const rectangleWidth = document.getElementById("rectangle_width");
  const valueRectangle = rectangleWidth.value;
  const convertWidth = parseFloat(valueRectangle);

  const rectangleHeight = document.getElementById("rectangle_height");
  const heightValue = rectangleHeight.value;
  const convertHeight = parseFloat(heightValue);
  const total = convertWidth * convertHeight;
  const add = document.getElementById("calculate");
  add.innerText = `Rectangle  ${total} cm`;
}
