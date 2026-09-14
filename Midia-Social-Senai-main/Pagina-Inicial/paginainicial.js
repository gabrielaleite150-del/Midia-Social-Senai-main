document.querySelectorAll('.botaoCurtir').forEach(botao => {
    botao.addEventListener('click', () => {
        const icone = botao.querySelector('.material-icons');
        const contador = botao.nextElementSibling;
        const curtido = botao.dataset.curtido === 'true';
        let likes = parseInt(contador.textContent, 10);

        if (curtido) {
            icone.textContent = 'favorite_border';
            botao.dataset.curtido = 'false';
            likes -= 1;
        } else {
            icone.textContent = 'favorite';
            botao.dataset.curtido = 'true';
            likes += 1;
        }

        contador.textContent = likes;
    });
});