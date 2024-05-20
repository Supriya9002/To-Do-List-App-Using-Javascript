
const todoList =document.getElementById('todo-list');
const add = document.getElementById('add')
const record = document.getElementById('records');

//console.log(todoList, add, record);

var recordStorage = [];
var isEdit = false, currentIndex = -1;
record.innerHTML = ''
add.addEventListener('click', ()=>{
    
    if(isEdit && todoList.value!= ''){
        recordStorage[currentIndex]= todoList.value;
        currentIndex = -1;
        add.textContent = 'Add'
        isEdit = false;
        todoList.value = '';
        display();
    }
    else if(todoList.value!= ''){
        console.log(typeof(todoList.value))
        var list = todoList.value.toLowerCase();
        list = list.charAt(0).toUpperCase() + list.slice(1);
        if(!checkDuplicate(list)){
            recordStorage.push(list);
            console.log(recordStorage)
            todoList.value = '';
            display();
        }else{
            alert('Duplicate Data Dose not allow')
            todoList.value = '';
        }
    }
    else{
        alert('Please enter a to-do item.');
    }
})

function display(){
    let statement = '';
    recordStorage.forEach((list, i)=>{
        statement += 
     `<tr>
        <th scope="row">${i+1}</th>
        <td>${list}</td>
        <td><i class="btn text-white fa fa-edit btn-info mx-2 edit-btn" onclick="edit(${i})"></i> <i class="btn btn-danger text-white fa fa-trash delete-btn" onclick="deleteList(${i})"></i></td>
      </tr>`
    });
    record.innerHTML = statement;
    console.log(recordStorage)
}

function edit(inx){
    todoList.value = recordStorage[inx];
    add.textContent = 'Save Changes';
    isEdit =true;
    currentIndex = inx;
}


function deleteList(inx){
    recordStorage.splice(inx, 1);
    display();
}

function checkDuplicate(list){
    const data = recordStorage.includes(list)
    console.log(data)
    return data;
}

