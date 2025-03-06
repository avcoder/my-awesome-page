const btn = document.querySelector('#btnChange');
btn.addEventListener('click', () => {
    document.body.innerHTML = '<h1>Changed</h1>';
});