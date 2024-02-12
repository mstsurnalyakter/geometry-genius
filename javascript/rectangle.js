const rectangleBtn = document.getElementById("rectangleBtn");
const rectangleWide = document.getElementById("rectangle-wide");
const rectangleLength = document.getElementById("rectangle-length");
const rectangleArea = document.getElementById("rectangle-area");

rectangleBtn.addEventListener("click", () => {

  const rectangleWideText = rectangleWide.value;
  const rectangleLengthText = rectangleLength.value;

  const wide = parseFloat(rectangleWideText);
  const length = parseFloat(rectangleLengthText);

    if (!wide || !length || !length === 'number' || !wide === 'number') {
        return alert(`Please Provide valid value.`);
    }

  const area = wide * length;
  rectangleArea.innerText = area;

  rectangleWide.value = "";
  rectangleLength.value = "";
});
