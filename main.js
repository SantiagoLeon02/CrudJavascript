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
        const p = document.createElement('p');
        const div = document.createElement('div');
        div.className="button-style";
        
        const remove = document.createElement('button');
        remove.textContent ="Eliminar";
        remove.className = "btn btn-remove";
        remove.addEventListener('click',()=> removetask(index));

        const edit = document.createElement('button');
        edit.textContent = "Editar"
        edit.className = "btn btn-edit";
        edit.addEventListener('click',() => editTask(index));
        
        p.textContent = dato;
        div.appendChild(edit);
        div.appendChild(remove);
        li.appendChild(p);
        li.appendChild(div);
        ul.appendChild(li);
    })
}

function addTask(){
    const task = document.getElementById('task');
    const valor = task.value.trim();

    if(valor.trim() !== ''){
        datos.push(valor);
        mostrarTarea();
        task.value='';

    }
}

function removetask(index){
    datos.splice(index, 1);
    console.log("Se elimino la tarea")
    mostrarTarea();
}

function editTask(index){
    const ul = document.getElementById('list-tasks');
    const li = ul.children[index];

    const input = document.createElement('input');
    input.type = "text";
    input.value = datos[index];

    const saveBtn = document.createElement('button');
    saveBtn.textContent = "Guardar";
    saveBtn.className = "btn btn-saveTask";
    
    li.innerHTML='';
    li.appendChild(input);
    li.appendChild(saveBtn);

    saveBtn.addEventListener('click',()=>{
        datos[index] = input.value;
        mostrarTarea();
    });
}

addButtonTask.addEventListener('click', addTask);




