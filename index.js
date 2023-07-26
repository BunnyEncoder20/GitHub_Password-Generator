const slider = document.getElementById("length");
const sliderValue = document.getElementById("sliderValue");

slider.addEventListener("input", function() {
  sliderValue.textContent = this.value;
});