//Esperamos a que el DOM este completamete cargado
document.addEventListener('DOMContentLoaded', () => {
//Obtememos el formulario y el contenedor de entradas
    const formulario = document.getElementById('blog-form');
    const entradasDiv = document.getElementById('entradas');

    let entradas = JSON.parse(localStorage.getItem('entradas')) || [];

    function guardarEntradas () {
        localStorage.setItem('entradas', JSON.stringify(entradas));
    }

    function renderEntradas() {
        entradasDiv.innerHTML = '';  //Limpiar antes de renderizar

        entradas.forEach((entrada, index) => {
            const entradaDiv = document.createElement('div');
            entradaDiv.classList.add('entrada');
            entradaDiv.setAttribute('data-id', index);

            entradaDiv.innerHTML = `
            <h2>${entrada.titulo}</h2>
            <p>${entrada.contenido}</p>
            <div class = "entrada-buttons">
                <button class = "edit-btn"> Edit </button>
                <button class = "delete-btn"> Delete </button> 
            </div>
            `;

            entradasDiv.prepend(entradaDiv); //Mostrar la mas reciente arriba
        });
    }

    formulario.addEventListener('submit', function(e) {
        e.preventDefault();

        const titulo = document.getElementById('titulo').value;
        const contenido = document.getElementById('contenido').value;

        const nuevaEntrada ={ titulo, contenido};
        entradas.push(nuevaEntrada);
        guardarEntradas();
        renderEntradas();
        formulario.reset();
    });


    entradasDiv.addEventListener('click', function(e) {
        const target = e.target;
        const entradaDiv = target.closest('.entrada');
        const id = entradaDiv.getAttribute('data-id');

        if (target.classList.contains('delete-btn')) {
            //Borrar entrada
            entradas.splice(id, 1);
            guardarEntradas();
            renderEntradas();

        }

        if (target.classList.contains('edit-btn')) {
            //Editar entrada
            const entrada = entradas[id];
            const nuevoTitulo = prompt('Editar titulo: ', entrada.titulo);
            const nuevoContenido = prompt('Editar contenido: ', entradaContedido);

            if (nuevoTitulo !== null && nuevoContenido !== null) {
                entradas[id] = {
                    titulo: nuevoTitulo,
                    contenido: nuevoContenido
                };
                guardarEntradas();
                renderEntradas();
            }
        }
    });

    renderEntradas();
    
});