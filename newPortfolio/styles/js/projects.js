document.addEventListener('DOMContentLoaded', function() {
    const allProjects = document.querySelectorAll('.projects-project');
    allProjects.forEach(el => {
        let name = el.querySelector('.projects-project-name');
        let imageContainer = el.querySelector('.projects-project-image');
        let image = imageContainer.querySelector('img');

        el.addEventListener('mouseover', function() {
            name.style.left = '3rem';
            imageContainer.style.transform = 'scale(.9)';
            image.style.transform = 'rotate(20deg)';
            image.style.filter = 'grayscale(100%)';
        })
        el.addEventListener('mouseout', function() {
            name.style.left = '-25rem';
            imageContainer.style.transform = 'scale(1)';
            image.style.transform = 'rotate(0deg)';
            image.style.filter = 'grayscale(0%)';
        })
    })
})