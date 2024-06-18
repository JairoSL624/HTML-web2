// gallery.js
document.addEventListener('DOMContentLoaded', function() {
    let gallery = document.querySelector('.gallery');
    let images = [
        '../img/producto4.jpg',
        '../img/producto5.jpg',
        '../img/producto6.jpg'
    ];

    images.forEach(src => {
        let img = document.createElement('img');
        img.src = src;
        gallery.appendChild(img);
    });
});
