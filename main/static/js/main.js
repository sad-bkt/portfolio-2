(function iife () {
    const launchTimestamp = Date.now();

    window.addEventListener('load', () => {
        const loadTime = Date.now() - launchTimestamp;
        const newElement = document.createElement('section');
        newElement.classList.add('page-block');
        newElement.innerHTML = `<span>Страница загрузилась за <span class="timer">${loadTime} миллисекунд</span></span>`
        document.querySelector('.page-header').insertAdjacentElement('afterend', newElement);
    })
})();