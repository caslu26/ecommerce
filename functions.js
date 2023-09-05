        // JavaScript para alternar entre os formulários de login e cadastro
        var loginForm = document.getElementById("login-form");
        var signupForm = document.getElementById("signup-form");
        var loginLink = document.querySelector(".message a");

        function toggleForm() {
            loginForm.classList.toggle("hidden");
            signupForm.classList.toggle("hidden");
        }

        loginLink.addEventListener("click", toggleForm);        // JavaScript para alternar entre os formulários de login e cadastro
        var loginForm = document.getElementById("login-form");
        var signupForm = document.getElementById("signup-form");
        var loginLink = document.querySelector(".message a");

        function toggleForm() {
            loginForm.classList.toggle("hidden");
            signupForm.classList.toggle("hidden");
        }

        loginLink.addEventListener("click", toggleForm);



// validando o login 

 function validateSignup() {
        var newUsername = document.getElementById("new-username").value;
        var newPassword = document.getElementById("new-password").value;

        // Realize a validação dos campos, por exemplo, verifique se o usuário e a senha atendem aos requisitos.

        if (newUsername.length < 3 || newPassword.length < 6) {
            alert("Nome de usuário deve ter pelo menos 3 caracteres e senha deve ter pelo menos 6 caracteres.");
        } else {
            // Envie os dados para o servidor (fictício neste exemplo)
            sendDataToServer(newUsername, newPassword);
        }
    }

    function sendDataToServer(username, password) {
        // Aqui você faria uma requisição AJAX real para o servidor para salvar os dados.
        // Por exemplo, usando a API fetch ou XMLHttpRequest.
        // Neste exemplo, apenas imprimimos os dados no console.
        console.log("Dados a serem enviados para o servidor:");
        console.log("Nome de usuário: " + username);
        console.log("Senha: " + password);
    }