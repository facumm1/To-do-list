const entradaDatos = document.querySelector('.entrada-datos');
const botonEnviar = document.querySelector('.boton-enviar');
const ul = document.querySelector('ul');
const empty = document.querySelector('.empty-message');
const addbox = document.querySelector('.add-box');

entradaDatos.addEventListener('focus', cambiarColor);
entradaDatos.addEventListener('blur', devolverColor); 


function cambiarColor(elemento){
    elemento.target.style.background = '#ededed';
}

function devolverColor(elemento){
    elemento.target.style.background = '#fff';
}

botonEnviar.addEventListener('click', (e) => {
    e.preventDefault();

    const textInput = entradaDatos.value;

    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = textInput;

    if (textInput == ""){
        alert("Debes llenar el campo requerido!");
    }
    else{
        li.appendChild(p);
        li.appendChild(eliminarTask());
        ul.appendChild(li);
        entradaDatos.value = "";
        empty.style.display = "none";
        addbox.style.display = "block";
        numeroTasks.style.animation = "animacionColor 1s infinite";
    }
});

botonEnviar.Enviar

function eliminarTask(){
    const eliminarTarea = document.createElement("button");

    eliminarTarea.textContent = "X";
    eliminarTarea.className = "boton-tarea";

    eliminarTarea.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);

        const numeroTasks = document.querySelectorAll('li');

        if(numeroTasks.length === 0){
            addbox.style.display = "none";
            empty.style.display = "block";
        }
    });

    return eliminarTarea;
}





