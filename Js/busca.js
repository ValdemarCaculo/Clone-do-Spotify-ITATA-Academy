document.addEventListener('DOMContentLoaded', () => {
    const inputPesquisa = document.getElementById('searchInput');

    inputPesquisa.addEventListener('keyup', async (e) => {
        if (e.key === 'Enter') {
            const termo = inputPesquisa.value.trim();
            if (!termo) return;

            const resultado = await buscar(termo, 12);
            renderizarMusicas(resultado.data);
        }
    });
});

function renderizarMusicas(musicas) {
    const container = document.querySelector('.categorias');
    container.innerHTML = '';

    musicas.forEach(musica => {
        const div = document.createElement('div');
        div.classList.add('cartaz');
        div.innerHTML = `
            <img src="${musica.album.cover_medium}" alt="">
            <span>${musica.title}</span>
            <small>${musica.artist.name}</small>
            <audio controls src="${musica.preview}"></audio>
        `;
        container.appendChild(div);
    });
}
