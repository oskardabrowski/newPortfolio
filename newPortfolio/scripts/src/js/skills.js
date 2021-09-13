document.addEventListener('DOMContentLoaded', function() {
    const skillsList = document.querySelectorAll('.skills-container-group-element');
    skillsList.forEach(el => {
        el.addEventListener('mouseover', function() {
            const color = el.getAttribute('colorOfSVG');
            el.style.fill = color;
        });
        el.addEventListener('mouseout', function() {
            el.style.fill = 'white';
        })
    })
})