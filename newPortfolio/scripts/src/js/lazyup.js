const css = `<style>
.lazyUp {
    opacity: 0;
    position: relative;
    top: 9rem;
}
.animatedUp {
    animation: animateUp .5s .5s ease normal forwards;
}

@keyframes animateUp{
    0% {
        opacity: 0;
        top: 9rem;
    }
    100% {
        opacity: 1;
        top: 0;
    }
}
</style>`
const head = document.querySelector('head');
head.insertAdjacentHTML('beforeend',css);
const lazyElements = document.querySelectorAll('.lazyUp');
const lazyElementsLeft = document.querySelectorAll('.lazyLeft');
lazyElements.forEach(el => {
    el.style.opacity = 0;
});
window.addEventListener('scroll', function() {
    lazyElements.forEach(el => {
        let scrolled = window.pageYOffset+window.screen.height-150;
        if(scrolled > el.offsetTop && !el.classList.contains('animatedUp')) {
            el.classList.add('animatedUp');
        }
    });
    lazyElementsLeft.forEach(el => {
        let scrolled = window.pageYOffset+window.screen.height-150;
        if(scrolled > el.offsetTop && !el.classList.contains('animatedLeft')) {
            el.classList.add('animatedLeft');
        }
    });
});

