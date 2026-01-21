
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('spotifyForm');
    
    if(form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            cadastrarUsuario();
        });
    }
});

function cadastrarUsuario() {
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const nome = document.getElementById('name').value.trim();

    if(!email || !senha || !nome) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    if(senha.length < 6) {
        alert('A senha deve ter no mínimo 6 caracteres!');
        return;
    }

    let listaUsuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const emailJaExiste = listaUsuarios.some(u => u.EmailUser === email);
    
    if(emailJaExiste) {
        alert('Este email já está cadastrado!');
        return;
    }

    const novoUsuario = { 
        EmailUser: email, 
        SenhaUser: senha,
        NomeUser: nome 
    };

    listaUsuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(listaUsuarios));

    alert('Usuário cadastrado com sucesso!');
    document.getElementById('spotifyForm').reset();
    
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000);
}