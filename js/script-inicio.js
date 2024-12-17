const nomeUsuario = document.getElementById('login');
const login = window.localStorage.getItem('login');

nomeUsuario.innerText = login;
console.log(nomeUsuario);