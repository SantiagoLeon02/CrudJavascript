const datos = [
    // 'Crear una tarea', 
    // 'Supervisar la tienda'
];
const addButtonTask = document.getElementById('add-button');

function mostrarTarea(){
    const ul = document.getElementById('list-tasks');
    ul.innerHTML = '';
    datos.map(dato =>{
        const li = document.createElement('li');
        li.textContent = dato;
        ul.appendChild(li);
    })
}

function addTask(){
    const task = document.getElementById('task');
    const valor = task.value;

    if(valor.trim() !== ''){
        datos.push(valor);
    }
    mostrarTarea();
}

// mostrarTarea();
addButtonTask.addEventListener('click', addTask);




