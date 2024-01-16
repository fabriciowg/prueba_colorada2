const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const closeBtn = document.querySelector('.close');
const menu1 = document.querySelector('.menu');
const retroceder = document.querySelector('.left');
const avanzar = document.querySelector('.right');


imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        aparecerImagen(imagen.getAttribute('src'));
    });
})

const aparecerImagen = (imagen) => {
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    menu1.style.opacity = '0';
}

 //Función para cerrar vista ampliada
const cerrarImagen = () => {
    imagenesLight.src = '';
    contenedorLight.classList.remove('show');
    imagenesLight.classList.remove('showImage');
    menu1.style.opacity = '1';
}

closeBtn.addEventListener('click', cerrarImagen);

let imagenActual = 0;
const totalImagenes = imagenes.length;

// Función para avanzar en el carrusel
const avanzarImagen = () => {
    imagenActual = (imagenActual + 1) % totalImagenes;
    const nuevaImagen = imagenes[imagenActual].getAttribute('src');
    imagenesLight.src = nuevaImagen;
};

// Función para retroceder en el carrusel
const retrocederImagen = () => {
    imagenActual = (imagenActual - 1 + totalImagenes) % totalImagenes;
    const nuevaImagen = imagenes[imagenActual].getAttribute('src');
    imagenesLight.src = nuevaImagen;
};

// Event listeners para avanzar y retroceder
avanzar.addEventListener('click', avanzarImagen);
retroceder.addEventListener('click', retrocederImagen);


