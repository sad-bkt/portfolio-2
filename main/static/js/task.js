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
    // let output = "";
    let container = document.getElementById("task_list");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for(let i = 0; i < restore.length; i++) {
        let template = document.querySelector('#temp');
        let clone = template.content.cloneNode(true);
        let label = clone.querySelectorAll("label");
        label[0].textContent = restore[i];
        let button = clone.querySelectorAll("button");
        button[0].addEventListener("click", function () {
                delete_it(i);
            });
        // output += clone;
        document.getElementById("task_list").appendChild(clone);
    }

    // innerHTML = output;
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

