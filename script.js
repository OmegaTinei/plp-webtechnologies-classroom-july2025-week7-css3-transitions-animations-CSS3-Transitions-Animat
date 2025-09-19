document.addEventListener('DOMContentLoaded', () => {

    // ------------------------------------------------------------------
    // Part 1: JavaScript Event Handling & Form Validation
    // ------------------------------------------------------------------

    // Select the form, result elements, and error messages from the DOM.
    const form = document.getElementById('bmi-form');
    const nameInput = document.getElementById('name');
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const resultArea = document.getElementById('bmi-result-text');
    const nameError = document.getElementById('name-error');
    const weightError = document.getElementById('weight-error');
    const heightError = document.getElementById('height-error');

    // Add an event listener to the form's submit event.
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Clear previous errors and results.
        nameError.textContent = '';
        weightError.textContent = '';
        heightError.textContent = '';
        resultArea.textContent = '';

        let isValid = true;

        // --- Custom Form Validation Logic ---
        const name = nameInput.value.trim();
        if (name === '') {
            nameError.textContent = 'Name is required.';
            isValid = false;
        }

        const weight = parseFloat(weightInput.value);
        if (isNaN(weight) || weight <= 0) {
            weightError.textContent = 'Please enter a valid weight (kg).';
            isValid = false;
        }

        const height = parseFloat(heightInput.value);
        if (isNaN(height) || height <= 0) {
            heightError.textContent = 'Please enter a valid height (m).';
            isValid = false;
        }

        if (!isValid) {
            return;
        }

        // --- Using a JavaScript function with a return value ---
        const bmiValue = calculateBMI(weight, height);
        let bmiCategory = determineBMICategory(bmiValue);

        // Display the result with the name and BMI category.
        resultArea.textContent = `${name}, your BMI is ${bmiValue.toFixed(2)}. This is considered: ${bmiCategory}.`;
        console.log(`BMI for ${name} is ${bmiValue.toFixed(2)}.`);
    });
    
    // Part 2: Functions, Parameters, and Return Values
    // Demonstrates a function that takes parameters and returns a value.
    function calculateBMI(weight, height) {
        // This variable is in the function's local scope.
        // It cannot be accessed outside of this function.
        const bmi = weight / (height * height);
        return bmi;
    }

    // Another function to determine the BMI category based on the calculated BMI.
    function determineBMICategory(bmi) {
        if (bmi < 18.5) {
            return 'Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            return 'Normal Weight';
        } else if (bmi >= 25 && bmi <= 29.9) {
            return 'Overweight';
        } else {
            return 'Obesity';
        }
    }


    // ------------------------------------------------------------------
    // Part 2: Building Interactive Elements - Collapsible FAQ
    // ------------------------------------------------------------------

    // Select all question elements in the FAQ section.
    const faqQuestions = document.querySelectorAll('.faq-question');

    // Loop through each question to add a click event listener.
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            // Get the corresponding answer element.
            const answer = question.nextElementSibling;
            
            // Use classList to toggle the 'show' and 'active' classes.
            answer.classList.toggle('show');
            question.classList.toggle('active');
        });
    });

    // ------------------------------------------------------------------
    // Part 3: Combining CSS Animations with JavaScript
    // ------------------------------------------------------------------

    const animatedBox = document.getElementById('animated-box');
    const infoContent = document.getElementById('info-content'); // New: Select the info content
    const triggerButton = document.getElementById('trigger-animation-button');

    triggerButton.addEventListener('click', () => {
        // Use classList.toggle() to add or remove the 'move-and-grow' class.
        // This will trigger the CSS transition defined in the stylesheet.
        animatedBox.classList.toggle('move-and-grow');
        
        // New: Toggle the 'show-info' class on the content to reveal it.
        infoContent.classList.toggle('show-info');
    });

    // ------------------------------------------------------------------
    // Part 3: JavaScript Loops - Embracing Repetition
    // ------------------------------------------------------------------

    // An array of key data principles.
    const dataPrinciples = [
        "Accuracy: Verifying data against source documents.",
        "Completeness: Ensuring all required fields are filled to avoid missing information.",
        "Timeliness: Data must be submitted and analyzed promptly to inform immediate action.",
        "Actionability: Transforming data into insights that lead to better health outcomes."
    ];

    // Select the unordered list element from the DOM.
    const principlesList = document.getElementById('principles-list');

    // Use a forEach loop to iterate over the dataPrinciples array.
    // This is an elegant way to handle arrays in JavaScript.
    if (principlesList) { // Added a check to prevent errors if the element doesn't exist
        dataPrinciples.forEach(principle => {
            // Create a new list item element for each principle.
            const listItem = document.createElement('li');
            // Set the text content of the list item.
            listItem.textContent = principle;
            // Append the new list item to the list in the HTML.
            principlesList.appendChild(listItem);
        });
    }
});
