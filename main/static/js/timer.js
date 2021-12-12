(function iife () {
    const launchTimestamp = Date.now();

    window.addEventListener('load', () => {
        const loadTime = Date.now() - launchTimestamp;
        const newElement = document.createElement('section');
        // newElement.classList.add('class-name');
        newElement.innerHTML = `<div>Страница загрузилась за ${loadTime} миллисекунд</div>`
        document.querySelector('section').insertAdjacentElement('beforebegin', newElement);
    })
})()