document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            
            if (response.ok) {
                alert('Login successful');
            } else {
                const errorMessage = await response.text();
                alert(errorMessage);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            
            if (response.ok) {
                alert('Registration successful');
                window.location.href = '/login'; // Redirect to login page after successful registration
            } else {
                const errorMessage = await response.text();
                alert(errorMessage);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        }
    });
});
