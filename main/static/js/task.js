    let restore = ['сменная обувь', 'косметика', 'кошька'];
    localStorage.setItem('task', JSON.stringify(restore));
    write();

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
            output += '<div class=task><input type="checkbox"><label>' +
                restore[i] +
                '</label><button onclick="delete_it(' +
                i +
                ')" class="task_button_delete">Удалить</button></div>';
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

