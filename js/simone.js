
   /* const form = document.querySelector('.contact-form');
    const requiredInputs = form.querySelectorAll('input[required], textarea[required]');

    form.addEventListener('submit', function(event) {
        let formIsValid = true;
        console.log ("Hello") 
        requiredInputs.forEach(input => {
            if (!input.value.trim()) {
                formIsValid = false;
                input.classList.add('error');
                if (!input.placeholder.includes('skal udfyldes')) {
                    input.placeholder += ' - skal udfyldes';
                }
            } else {
                input.classList.remove('error');
                input.placeholder = input.placeholder.replace(' - skal udfyldes', '');
            }
        });
        
        if (!formIsValid) {
            event.preventDefault();
            return;
        }
        
           
        // If form is valid, show success message
        alert('Tak for din besked, vi kontakter dig inden for X antal dage');
    });

