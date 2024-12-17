const login = document.getElementById('nome');
const senha = document.getElementById('password');

function autenticarUsuario(){
    if (login.value === '' || senha.value === '')
    {

    } else {
        window.localStorage.setItem('login', login.value);
        validarUsuario();
    }
}

function validarUsuario()
{
    console.log(login.value + senha.value);
    window.location.href = '../view/pagina-inicial.html';
}