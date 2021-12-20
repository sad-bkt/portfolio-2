window.onload = function() {
    var table = document.getElementById("tabletodo");
    var tableTemplate = document.getElementById("tabletemplate");

    for (var i = 0; i < localStorage.length; i++) {
        var data = JSON.parse(localStorage[i]);
        var newC = tableTemplate.content.firstElementChild.cloneNode(true);;
        var rd = newC.getElementsByTagName("td");
        rd[0].textContent = data["nameTask"];
        rd[1].textContent = data["desc"];
        rd[2].textContent = data["who"];
        table.appendChild(newC);
    }

    let frm = document.querySelector("#moduleform").innerHTML;

    document.getElementById('new_task').onclick = async function () {
        let dlg = new BsDialogs({backdrop: true})
        dlg.form('Добваление задачи', 'Добавить', frm)
        let ret = await dlg.onsubmit()

        if (typeof ret != 'undefined')
            submitFunc(ret)
    }

    document.getElementById('yes_no').onclick = async function () {
        let ret = await new BsDialogs().yes_no('Очистить задачи', 'Вы в этом уверены????')

        if(ret == "yes")
            clean();
    }

    loadComment();
}

function clean() {
    var table = document.getElementById("tabletodo");
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
    localStorage.clear();
}

function submitFunc(obj) {
    var table = document.getElementById("tabletodo");

    table = document.getElementById("tabletodo");
    var tableTemplate = document.querySelector("#tabletemplate");
    var newC = tableTemplate.content.firstElementChild.cloneNode(true);;
    var rd = newC.getElementsByTagName("td");
    rd[0].textContent = obj.nameTask;
    rd[1].textContent = obj.desc;
    rd[2].textContent = obj.who;

    table.appendChild(newC);
    localStorage.setItem(localStorage.length, JSON.stringify(obj));

    document.getElementById("nameTask").value = "";
    document.getElementById("desc").value = "";
    document.getElementById("who").value = "";

    return false;
}