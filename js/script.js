document.addEventListener('DOMContentLoaded', () => {
    const noticiasDiv = document.getElementById('noticias');
    
    fetch('js/noticias.json')
        .then(response => response.json())
        .then(data => {
            const noticias = [
                {
                    titulo: "Productos nuevos de PC",
                    contenido: "Descubre los nuevos productos que tenemos en stock...",
                    enlace: "producto-nuevo.html"
                },
                {
                    titulo: "Guía para montar un ordenador",
                    contenido: "Sigue nuestra guía paso a paso para montar tu propio ordenador...",
                    enlace: "guia-montar-pc.html"
                }
            ];
            
            noticias.forEach(noticia => {
                const noticiaElement = document.createElement('div');
                noticiaElement.innerHTML = `
                    <h3>${noticia.titulo}</h3>
                    <p>${noticia.contenido} <a href="${noticia.enlace}">Leer más</a></p>
                `;
                noticiasDiv.appendChild(noticiaElement);
            });
        })
        .catch(error => console.error('Error cargando las noticias:', error));
});
