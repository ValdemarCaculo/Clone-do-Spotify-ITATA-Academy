document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');

    if(form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            validarLogin();
        });
    }
});

function validarLogin() {
    const LoginNome = document.getElementById('login-nome').value.trim();
    const LoginSenha = document.getElementById('login-senha').value.trim();
    const listaUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    
    const encontrarUsuario = listaUsuarios.find(u => {
        return (u.EmailUser === LoginNome || u.NomeUser === LoginNome) && u.SenhaUser === LoginSenha;
    });
    
    if(encontrarUsuario) {
        alert("Acesso Permitido");
        localStorage.setItem('usuarioLogado', JSON.stringify(encontrarUsuario));
        window.location.href = "index.html";
    } else {
        alert('Email/usuário ou senha incorretos!');
    }
}

