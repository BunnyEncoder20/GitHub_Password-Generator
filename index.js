const slider = document.getElementById("length");
const sliderValue = document.getElementById("sliderValue");

slider.addEventListener("input", function() {
  sliderValue.textContent = this.value;
});



// Get all the checkboxes
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
// Get all the rectangles
const rectangles = document.querySelectorAll('.rectangle');

// Add event listeners to checkboxes to call the updateRectanglesColor function when they are checked/unchecked
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', updateRectanglesColor);
});

// Function to update the colors of the rectangles based on the number of checkboxes checked
function updateRectanglesColor() {
    let checkedCount = 0;
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkedCount++;
        }
    });

    rectangles.forEach((rectangle, index) => {
        if (index < checkedCount) {
            rectangle.style.backgroundColor = '#A4FFAF'; // Change the color for checked rectangles
        } else {
            rectangle.style.backgroundColor = 'transparent'; // Reset the color for unchecked rectangles
        }
    });
}