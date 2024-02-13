function rhombus() {
  const rhombusWidth = document.getElementById("rhombus_width");
  const rhombusWidthValue = rhombusWidth.value;
  const convertWidth = parseFloat(rhombusWidthValue);
  console.log(rhombusWidthValue);
  const rhombusHeight = document.getElementById("rhombus_height");
  const rhombusHeightValue = rhombusHeight.value;
  const convertHeight = parseFloat(rhombusHeightValue);

  const valueTotal = 0.5 * convertWidth * convertHeight;
  const addRhombus = document.getElementById("calculate");
  addRhombus.innerText = `Rhombus ${valueTotal} cm`;
}

function pentagon() {
  const pentagonWidth = document.getElementById("pentagon_width");
  const pentagonWidthValue = pentagonWidth.value;
  const convertWidth = parseFloat(pentagonWidthValue);
  console.log(pentagonWidthValue);
  const pentagonHeight = document.getElementById("pentagon_height");
  const pentagonHeightValue = pentagonHeight.value;
  const convertHeight = parseFloat(pentagonHeightValue);

  const valueTotal = 0.5 * convertWidth * convertHeight;

  const add = document.getElementById("calculate");
  add.innerText = `Pentagon ${valueTotal} cm`;
}

function ellipse() {
  const ellipseWidth = document.getElementById("ellipse_width");
  const ellipseValueHeight = ellipseWidth.value;
  const widthConvert = parseFloat(ellipseValueHeight);

  const ellipseHeight = document.getElementById("ellipse_height");
  const ellipseHeightValue = ellipseHeight.value;
  const convertHeightValue = parseFloat(ellipseHeightValue);
  const valueTotal = 3.1416 * widthConvert * convertHeightValue;
  const add = document.getElementById("calculate");
  add.innerText = `Ellipse ${valueTotal.toFixed(2)} cm`;
}
