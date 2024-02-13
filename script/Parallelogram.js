function parallelogram() {
  const parallelogramWidth = document.getElementById("parallelogram_width");
  const valueParallelogram = parallelogramWidth.value;
  const parallelogramConvert = parseFloat(valueParallelogram);
  //   console.log(valueParallelogram);
  const parallelogramHeight = document.getElementById("parallelogram_height");
  const parallelogramValueHeight = parallelogramHeight.value;
  const parallelogramHeightConvert = parseFloat(parallelogramValueHeight);

  const parallelogramTotal = parallelogramConvert * parallelogramHeightConvert;
  const addCalculate = document.getElementById("calculate");
  addCalculate.innerText = `Parallelogram ${parallelogramTotal} cm`;
}
