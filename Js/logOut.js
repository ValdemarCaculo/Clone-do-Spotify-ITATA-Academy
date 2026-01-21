        document.addEventListener('DOMContentLoaded', function() {
            const btnLogout = document.getElementById('btn-logout');
            
            if(btnLogout) {
                btnLogout.addEventListener('click', function(event) {
                    event.preventDefault();
                    
                    // Confirmar logout
                    if(confirm('Tem certeza que deseja terminar a sessão?')) {
                        localStorage.removeItem('usuarioLogado');
                        window.location.href = 'login.html';
                    }
                });
            }
        });