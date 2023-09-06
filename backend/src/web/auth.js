// auth.js

// Defina auth como um objeto vazio
const auth = {};

auth.setAuthenticated = function (value) {
    console.log("setAuth: ", value);
    localStorage.setItem('isAuthenticated', JSON.stringify(value));
}

auth.isAuthenticated = function () {
    console.log("Lendo autenticação do usuário...");
    const storedValue = localStorage.getItem('isAuthenticated');
    return storedValue ? JSON.parse(storedValue) : false;
}
