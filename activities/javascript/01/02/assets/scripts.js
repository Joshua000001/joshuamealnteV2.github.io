const inputs = document.querySelectorAll(".output");

const totalInput = document.getElementById("totalGrades");
const averageInput = document.getElementById("average");
inputs.forEach((input) => {
  input.addEventListener("input", updateTotalsAndAverage);
});

function updateTotalsAndAverage() {
  let total = 0;
  let count = 0;

  inputs.forEach((input) => {
    const value = parseFloat(input.value);
    if (!isNaN(value)) {
      total += value;
      count++;
    }
  });
  totalInput.value = total;

  averageInput.value = count > 0 ? total / count : 0;
}