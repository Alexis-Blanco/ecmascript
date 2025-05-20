document.addEventListener("DOMContentLoaded", function () {
    // Efecto máquina de escribir
    const textElement = document.querySelector('.typewriter');
    const text = textElement.textContent;
    textElement.textContent = '';
    const cursor = document.querySelector('.cursor');
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            textElement.textContent += text[index];
            index++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();

    // Mapeo de versiones a ejemplos
    const ejemplos = {
        es5: `"use strict";
var nombre = "Juan";
var edad = 25;
console.log(nombre + " tiene " + edad + " años.");`,
        es6: `let nombre = "Juan";
const edad = 25;
const saludo = \`Hola, \${nombre}. Tienes \${edad} años.\`;
console.log(saludo);`,
        es8: `const obtenerDatos = async () => {
    let datos = await fetch("https://api.example.com");
    console.log(await datos.json());
};`,
        es11: `let grande = 1234567890123456789012345678901234567890n;
console.log(grande + 1n);

let persona = null;
console.log(persona?.nombre);`
    };

    // Cambiar código según versión seleccionada
    const versionSelect = document.getElementById("versionSelect");
    const codeBlock = document.getElementById("codeBlock");

    versionSelect.addEventListener("change", function () {
        codeBlock.textContent = ejemplos[this.value];
        Prism.highlightElement(codeBlock);
    });
});

