// Efecto de escritura de texto letra por letra
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector('.typewriter');
    const text = textElement.textContent; // Obtener el texto del h2
    textElement.textContent = ''; // Limpiar el contenido de texto (para escribirlo letra por letra)
    const cursor = document.querySelector('.cursor');
    
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            textElement.textContent += text[index];
            index++;
            setTimeout(typeWriter, 100); // Escribir cada letra con un delay de 100ms
        } else {
            cursor.style.animation = 'none'; // Detener la animación del cursor una vez que se ha escrito todo
        }
    }

    typeWriter();
});
