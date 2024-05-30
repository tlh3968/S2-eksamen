    const form = document.querySelector('.contact-form');
    const requiredSelectors = ['#name', '#email', '#company'];

   
    const getRequiredInputs = () => {
        return requiredSelectors.map(selector => form.querySelector(selector));
    };

    const requiredInputs = getRequiredInputs();
    requiredInputs.forEach(input => {
        input.setAttribute('data-original-placeholder', input.placeholder);
    
        const handleFocusOrClick = function() {
            input.classList.remove('error');
            input.style.backgroundColor = ''; 
            input.style.color = ''; 
    
            
            if (input.hasAttribute('data-error-shown')) {
                input.placeholder = input.getAttribute('data-original-placeholder');
                input.removeAttribute('data-error-shown');
            }
        };
    
        input.addEventListener('focus', handleFocusOrClick);
        input.addEventListener('click', handleFocusOrClick);
    });

    form.addEventListener('submit', function(event) {
        let formIsValid = true;
        const requiredInputs = getRequiredInputs();
       
        requiredInputs.forEach(input => {
            if (!input.value.trim()) { 
                formIsValid = false;
                input.classList.add('error');
                input.style.backgroundColor = 'lightcoral'; 
                input.style.color = 'white'; 

              
                if (!input.hasAttribute('data-error-shown')) {
                    input.setAttribute('data-original-placeholder', input.placeholder);
                    input.placeholder = 'Skal udfyldes*';
                    input.setAttribute('data-error-shown', 'true');
                }
            } else {
                input.classList.remove('error');
                input.style.backgroundColor = ''; 
                input.style.color = ''; 

            
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
     
        event.preventDefault(); 
        showCustomAlert('Tak for din besked, vi kontakter dig inden for X antal dage');
    });

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

 
