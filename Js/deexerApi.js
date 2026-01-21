const URL_DEEZER = "https://api.deezer.com";

function buscar(query, limit=10){
    const url = `${URL_DEEZER}/search?q=${encodeURIComponent(query)}&limit=${limit}`
       return fetch(`https://cors.isomorphic-git.org/${url}`)
        .then(res => res.json());
}

function buscarPorGenero(genreId, limit = 10) {
    const url = `${URL_DEEZER}/genre/${genreId}/artists?limit=${limit}`;
    return fetch(`https://cors.isomorphic-git.org/${url}`)
        .then(res => res.json());
}

/**
 * Buscar playlist pública
 */
function buscarPlaylist(id) {
    const url = `${URL_DEEZER}/playlist/${id}`;
    return fetch(`https://cors.isomorphic-git.org/${url}`)
        .then(res => res.json());
}