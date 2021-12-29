window.addEventListener('DOMContentLoaded', async function loadComments() {
    const container = document.getElementById('comments');
    let comments = []

    const randomId = Math.floor(Math.random() * 100 + 1);
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${randomId}/comments`)
        comments = await response.json();

        comments.forEach(comment => {
            const newComment = document.createElement("div");
            newComment.classList.add('comment');
            let template = document.querySelector('#temp');
            let clone = template.content.cloneNode(true);
            let div = clone.querySelectorAll("div");
            div[0].textContent = comment['name'];
            div[1].textContent = comment['email'];
            div[2].textContent = comment['body'];
            newComment.appendChild(clone);
            container.appendChild(newComment);
        });
    } catch (e) {
        const message = document.createElement("p")
        message.innerHTML = "Ошибка - не удалось загрузить комментарии"
        message.classList.add("error_message")
        container.appendChild(message)
        return
    } finally {
        document.getElementsByClassName("preloader")[0].style.display="none"
    }
})
