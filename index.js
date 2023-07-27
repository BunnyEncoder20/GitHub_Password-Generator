const slider = document.getElementById("length");
const sliderValue = document.getElementById("sliderValue");

slider.addEventListener("input", function() {
  sliderValue.textContent = this.value;
});

// Add event listeners to checkboxes to call the updateRectanglesColor function when they are checked/unchecked
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateRectanglesColor);
});