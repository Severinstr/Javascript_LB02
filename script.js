window.onload = function () {
    let accounts = [];


    function login() {

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;



        const accountsJSON = localStorage.getItem('accounts');



        if (accountsJSON) {
            accounts = JSON.parse(accountsJSON);
        }


        for (let i = 0; i < accounts.length; i++) {
            if (
                accounts[i].username === username &&
                accounts[i].password === password
            ) {
                /*e**/
                document.getElementById("message").innerHTML =
                    "Logged in successfully!";
                window.location.href = "einkauf/einkauf.html";
                return;
            }
        }


        document.getElementById("message").innerHTML =
            "Invalid username or password";

    }


    function createAccount() {

        const username = document.getElementById("new-username").value;
        const password = document.getElementById("new-password").value;


        for (let i = 0; i < accounts.length; i++) {
            if (accounts[i].username === username) {

                document.getElementById("message").innerHTML =
                    "Username already taken";
                return;
            }
        }

        const newAccount = { username: username, password: password };
        accounts.push(newAccount);

        saveAccountsToJSON();

        document.getElementById("message").innerHTML =
            "Account created successfully!";
    }
    function saveAccountsToJSON() {

        const accountsJSON = JSON.stringify(accounts);
        localStorage.setItem('accounts', accountsJSON);

    }

    document.getElementById('loginbutton').addEventListener("click", login);

    document.getElementById('createbutton').addEventListener("click", createAccount);






};