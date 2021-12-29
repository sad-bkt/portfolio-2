window.addEventListener('DOMContentLoaded', function() {
    let restore = JSON.parse(localStorage.getItem('task'));
    if (restore == null) {
        restore = ['сменная обувь', 'косметика', 'кошька'];
        localStorage.setItem('task', JSON.stringify(restore));
    }
    write();
});

function read() {
    let restore = JSON.parse(localStorage.getItem('task'));
    if (restore == null) {
        restore = [];
    }
  return restore
}

function write() {
    let restore = read();
    let output = "";
    for(let i = 0; i < restore.length; i++) {
        let template = document.querySelector('#temp');
        let label = template.content.querySelectorAll("label");
        label[0].textContent = restore[i];
        let button = template.content.querySelectorAll("button");
        button[0].addEventListener("click", function () {
                delete_it(i);
            });
        output += template.content;
    }
    document.getElementById("task_list").innerHTML = output;
}

function delete_it(i) {
    let restore = read();
    restore.splice(i, 1);
    localStorage.setItem('task', JSON.stringify(restore));
    write();
}

function clear_all() {
    localStorage.setItem('task', JSON.stringify([]));
    write();
}

function add() {
    let restore = read();
    let taskInput = document.getElementById("task_input");
    if (taskInput.value != "") {
        console.log(taskInput.value);
        restore.push(taskInput.value);
        localStorage.setItem('task', JSON.stringify(restore));
        write();
    }
}

