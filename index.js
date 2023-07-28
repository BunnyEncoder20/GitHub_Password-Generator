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

function generatePassword() {
    const length = document.getElementById('length').value ;
    const includeUppercaseLetters = document.getElementById('uppercaseLetters').checked ;
    const includeLowercaseLetters = document.getElementById('lowercaseLetters').checked ;
    const includeNumbers = document.getElementById('numbers').checked ;
    const includeSymbols = document.getElementById('symbols').checked ;
    
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVQWXYZ' ;
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz' ;
    const numbers = '1234567890' ;
    const symbols = '!@#$%^&*()-_' ;

    let passwordCharacters = '';

    if (includeUppercaseLetters)
        passwordCharacters += uppercaseLetters ;
    if (includeLowercaseLetters)
        passwordCharacters += lowercaseLetters ;
    if (includeNumbers) 
        passwordCharacters += numbers ;
    if (includeSymbols) 
        passwordCharacters += symbols ;
    
    let password = '' ;
    for(let i=0; i<length; i++) {
        password += getRandomCharacter(passwordCharacters) ;
    }

    document.getElementById('passwordDisplay').value = password ;
}

// Function to generate a random character from a given string
function getRandomCharacter(characters) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
}

// fucniton to copy to clipboard 
function copy2clipboard() {
    const passwordInput = document.getElementById('passwordDisplay');
    passwordInput.select();
    passwordInput.setSelectionRange(0, 99999); // For mobile devices

    document.execCommand('copy');

    // Remove the text selection from the input field
    window.getSelection().removeAllRanges();

    // // Show the notification popup
    // const notificationPopup = document.getElementById('notificationPopup');
    // notificationPopup.style.display = 'block';

    // // Hide the notification popup after 2 seconds
    // setTimeout(() => {
    //     notificationPopup.style.display = 'none';
    // }, 2000);
    const popup = document.getElementById('myPopup') ;
    popup.style.visibility  = 'visible' ;

    setTimeout( () => {
        popup.style.visibility = 'hidden' ;
    }, 2000)
}

// Adding event listerners for the buttons 
document.getElementById('generatebtn').addEventListener('click',generatePassword) ;
document.getElementById('copy2clipboard').addEventListener('click',copy2clipboard) ;
