const loginFormHandler = async (event) => {
    event.preventDefault();
    //console.log('nice')

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        // /api/users/login is just a place holder until we do the api routes
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        const json = await response.json()

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to log in');
        }
    }
};

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

document.querySelector('.login-form').addEventListener('submit', function (evt) {
    evt.preventDefault();
    loginFormHandler()
});
