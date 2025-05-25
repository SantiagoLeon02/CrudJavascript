const datos = [
    // 'Crear una tarea', 
    // 'Supervisar la tienda'
];
const addButtonTask = document.getElementById('add-button');

function mostrarTarea(){
    const ul = document.getElementById('list-tasks');
    ul.innerHTML = '';
    datos.forEach((dato,index) =>{
        const li = document.createElement('li');
        
        const remove = document.createElement('button');
        remove.textContent ="Eliminar";
        remove.className = "btn btn-remove";
        remove.addEventListener('click',()=> removetask(index));

        const edit = document.createElement('button');
        edit.textContent = "Editar"
        edit.className = "btn btn-edit";
        edit.addEventListener('click', editTask);
        
        li.textContent = dato;
        li.appendChild(edit);
        li.appendChild(remove);
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

function removetask(index){
    datos.splice(index, 1);
    console.log("Se elimino la tarea")
    mostrarTarea();
}

function editTask(){
    console.log("Se edto la tarea");
}

// mostrarTarea();
addButtonTask.addEventListener('click', addTask);




