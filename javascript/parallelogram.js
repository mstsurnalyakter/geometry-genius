const parallelogramBtn = document.getElementById("parallelogramBtn");
const parallelogramBase = document.getElementById("parallelogram-base");
const parallelogramHeight = document.getElementById("parallelogram-height");
const parallelogramArea = document.getElementById("parallelogram-area");

parallelogramBtn.addEventListener("click", () => {
  const parallelogramBaseText = parallelogramBase.value;
  const parallelogramHeightText = parallelogramHeight.value;

  const base = parseFloat(parallelogramBaseText);
  const height = parseFloat(parallelogramHeightText);

  if (!base || !height || base !== "number" || height !== "number") {
    return alert(`Please Provide valid value.`);
  }

  const area = base * height;
  parallelogramArea.innerText = area;

  parallelogramBase.value = "";
  parallelogramHeight.value = "";
});
