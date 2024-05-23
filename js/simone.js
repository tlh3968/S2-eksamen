    const form = document.querySelector('.contact-form');
    const requiredSelectors = ['#name', '#email', '#company'];

    // Function to get the NodeList of required inputs based on the selectors array
    const getRequiredInputs = () => {
        return requiredSelectors.map(selector => form.querySelector(selector));
    };

    // Initialize original placeholders and add event listeners
    const requiredInputs = getRequiredInputs();
    requiredInputs.forEach(input => {
        input.setAttribute('data-original-placeholder', input.placeholder);

        // Add focus event listener to remove error on click
        input.addEventListener('focus', function() {
            input.classList.remove('error');
            input.style.backgroundColor = ''; // Reset background color
            input.style.color = ''; // Reset text color

            // Restore the original placeholder if error was shown
            if (input.hasAttribute('data-error-shown')) {
                input.placeholder = input.getAttribute('data-original-placeholder');
                input.removeAttribute('data-error-shown');
            }
        });

        // Add input event listener to remove error on typing
        input.addEventListener('input', function() {
            input.classList.remove('error');
            input.style.backgroundColor = ''; // Reset background color
            input.style.color = ''; // Reset text color

            // Restore the original placeholder if error was shown
            if (input.hasAttribute('data-error-shown')) {
                input.placeholder = input.getAttribute('data-original-placeholder');
                input.removeAttribute('data-error-shown');
            }
        });
    });

    form.addEventListener('submit', function(event) {
        let formIsValid = true;
        const requiredInputs = getRequiredInputs();

        requiredInputs.forEach(input => {
            if (!input.value.trim()) {
                formIsValid = false;
                input.classList.add('error');
                input.style.backgroundColor = 'lightcoral'; // Pale red background
                input.style.color = 'white'; // Error text color

                // Store the original placeholder if not already stored
                if (!input.hasAttribute('data-error-shown')) {
                    input.setAttribute('data-original-placeholder', input.placeholder);
                    input.placeholder = 'skal udfyldes';
                    input.setAttribute('data-error-shown', 'true');
                }
            } else {
                input.classList.remove('error');
                input.style.backgroundColor = ''; // Reset background color
                input.style.color = ''; // Reset text color

                // Restore the original placeholder
                if (input.hasAttribute('data-error-shown')) {
                    input.placeholder = input.getAttribute('data-original-placeholder');
                    input.removeAttribute('data-error-shown');
                }
            }
        });

        if (!formIsValid) {
            event.preventDefault();
            return;
        }

        // If form is valid, show custom alert and prevent form submission
        event.preventDefault();  // Prevent actual form submission
        showCustomAlert('Tak for din besked, vi kontakter dig inden for X antal dage');
    });

    // Custom alert functionality
    const customAlertOverlay = document.getElementById('messageSent');
    const customAlertMessage = document.getElementById('customAlertMessage');
    const customAlertButton = document.getElementById('customAlertButton');

    function showCustomAlert(message) {
        customAlertMessage.textContent = message;
        customAlertOverlay.style.display = 'flex';
    }

    customAlertButton.addEventListener('click', function() {
        customAlertOverlay.style.display = 'none';
    });

