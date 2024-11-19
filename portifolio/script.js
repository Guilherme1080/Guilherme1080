document.getElementById('dark-mode-toggle').addEventListener('change', function () {
    if (this.checked) {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
    } else {
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#fff';
    }
});
