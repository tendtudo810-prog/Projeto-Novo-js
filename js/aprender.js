document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-login');
    const idade = document.getElementById('idade');
    const nome = document.getElementById('nome');
    const senha = document.getElementById('senha');

    function clearInputErrors() {
        nome.classList.remove('erro');
        senha.classList.remove('erro');
        idade.classList.remove('erro');
        
        nome.placeholder = 'Adicione seu nome';
        senha.placeholder = 'Adicione sua senha';
        idade.placeholder = 'Adicione sua idade';
    }

    function showInputErrors() {
        nome.value = '';
        senha.value = '';
        idade.value = '';
        
        nome.classList.add('erro');
        senha.classList.add('erro');
        idade.classList.add('erro');
        
        nome.placeholder = '❌ Nome inválido';
        senha.placeholder = '❌ Senha inválida';
        idade.placeholder = '❌ Menor de 18 anos';
        
        nome.focus();
    }

    if (!form) return;

    form.addEventListener('submit', (e) => {
        const age = parseInt(idade.value, 10);

        if (isNaN(age) || age < 18) {
            e.preventDefault();
            showInputErrors();
            return;
        }

        // Idade válida — limpar erros e permitir envio
        clearInputErrors();
    });
});