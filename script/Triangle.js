function triangleClick() {
  const triangleWidth = document.getElementById("triangle_width");
  const triangleValue = triangleWidth.value;
  const convertWidth = parseFloat(triangleValue);
  //   triangleWidth.value = "";
  //   console.log(triangleValue);
  const triangleHeight = document.getElementById("triangle_height");
  const triangleHeightValue = triangleHeight.value;
  const convertHeight = parseFloat(triangleHeightValue);
  //   triangleHeight.value = "";
  //   console.log(convertHeight);
  const triangleResult = 0.5 * convertWidth * convertHeight;

  const add = document.getElementById("calculate");
  add.innerText = `Triangle ${triangleResult} cm`;
}
