//Esperamos a que el DOM este completamete cargado
document.addEventListener('DOMContentLoaded', () => {
//Obtememos es formulario y el contenedor de entradas
    const formulario = document.getElementById('blog-form');
    const entradasDiv = document.getElementById('entradas');

    let entradas = JSON.parse(localStorage.getItem(entradas)) || [];

    //Manejador del evento 'submit' del formulario
    formulario.addEventListener('submit', function(e) {
        e.preventDefault(); //Evita que la pagina se recargue al enviar el formulario
    })
})