document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-login');
    const idade = document.getElementById('idade');
    const nome = document.getElementById('nome');
    const senha = document.getElementById('senha');
    const caixa = document.querySelector('.caixa');

    function clearError() {
        if (!caixa) return;
        caixa.innerHTML = '';
    }

    function showError(message) {
        if (!caixa) return;
        clearError();
        const box = document.createElement('div');
        box.className = 'error-box';
        box.innerHTML = `
            <div class="error-content">${message}</div>
            <button type="button" class="error-close" aria-label="Fechar">×</button>
        `;
        caixa.appendChild(box);
        const btn = box.querySelector('.error-close');
        btn.addEventListener('click', clearError);
    }

    if (!form) return;

    form.addEventListener('submit', (e) => {
        const age = parseInt(idade.value, 10);

        clearError();

        if (isNaN(age) || age < 18) {
            e.preventDefault();
            showError('Você precisa ter 18 anos ou mais para entrar.');
            return;
        }

        // Idade válida — limpar mensagem e permitir envio
        clearError();
    });
});