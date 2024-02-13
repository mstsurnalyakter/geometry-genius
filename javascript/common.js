const getButtonById = (btnId) => {
  const button = document.getElementById(btnId);
  return button;
};


getButtonById("triangleBtn").addEventListener("click", () => {
  const base = getInputValueById("triangle-base");
  const height = getInputValueById("triangle-height");

  const area = 0.5 * base * height;
  setInnerTextById("triangle-area", area)
});

getButtonById("rhombusBtn").addEventListener("click", () => {
  const diagonal1 = getInputValueById("rhombus-diagonal1");
  const diagonal2 = getInputValueById("rhombus-diagonal2");

  const area = 0.5 * diagonal1 * diagonal2;
  setInnerTextById("rhombus-area", area)
});


getButtonById("rectangleBtn").addEventListener("click", () => {
  const wide = getInputValueById("rectangle-wide");
  const length = getInputValueById("rectangle-length");

  const area = wide * length;
  setInnerTextById("rectangle-area",area)
});


getButtonById("pentagonBtn").addEventListener("click", () => {
  const pp = getInputValueById("pentagonP");
  const qq = getInputValueById("pentagonQ");

  const area = 0.5 * pp * qq;
  setInnerTextById("pentagon-area",area);
});


getButtonById("parallelogramBtn").addEventListener("click", () => {
  const base = getInputValueById("parallelogram-base");
  const height = getInputValueById("parallelogram-height");

  const area = base * height;
  setInnerTextById("parallelogram-area",area);
});


getButtonById("ellipseBtn").addEventListener("click", () => {
  const aa = getInputValueById("ellipseA");
  const bb = getInputValueById("ellipseB");

  const area = 3.1416 * aa * bb;
  setInnerTextById("ellipse-area",area);
});


const getInputValueById = (inputFieldId) => {
  const inputField = document.getElementById(inputFieldId);
  const inputValueText = inputField.value;
  const inputValue = parseFloat(inputValueText);

  return inputValue;
};

const setInnerTextById = (areaId, area) => {
  const areaFind = document.getElementById(areaId);
  areaFind.innerText = area

};


// const getButtonById = (btnId) =>{
//     const button = document.getElementById(btnId);
//     return button;
// }
