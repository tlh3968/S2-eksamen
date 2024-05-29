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
    
        const handleFocusOrClick = function() {
            input.classList.remove('error');
            input.style.backgroundColor = ''; 
            input.style.color = ''; 
    
            // Restore the original placeholder if error was shown
            if (input.hasAttribute('data-error-shown')) {
                input.placeholder = input.getAttribute('data-original-placeholder');
                input.removeAttribute('data-error-shown');
            }
        };
    
        // Add focus and click event listener
        input.addEventListener('focus', handleFocusOrClick);
        input.addEventListener('click', handleFocusOrClick);
    });

    form.addEventListener('submit', function(event) {
        let formIsValid = true;
        const requiredInputs = getRequiredInputs();
       
        requiredInputs.forEach(input => {
            if (!input.value.trim()) { //Checks if input is empty or only has a space
                formIsValid = false;
                input.classList.add('error');
                input.style.backgroundColor = 'lightcoral'; 
                input.style.color = 'white'; 

                // Store the original placeholder if not already stored
                if (!input.hasAttribute('data-error-shown')) {
                    input.setAttribute('data-original-placeholder', input.placeholder);
                    input.placeholder = 'Skal udfyldes*';
                    input.setAttribute('data-error-shown', 'true');
                }
            } else {
                input.classList.remove('error');
                input.style.backgroundColor = ''; 
                input.style.color = ''; 

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
        event.preventDefault(); 
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
        //Console.log ("hello world")
    });

 
