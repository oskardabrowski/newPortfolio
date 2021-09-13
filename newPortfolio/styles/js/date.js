document.addEventListener('DOMContentLoaded', function() {
    const dateSpan = document.querySelector('.CopyrightDate');
    const date = new Date();
    const year = date.getFullYear();
    dateSpan.textContent = year;
})