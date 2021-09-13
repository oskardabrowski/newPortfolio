document.addEventListener("DOMContentLoaded", function() {
    function showMenu() {
        let menuBtn, menuBtns, changedToClose, changedToHide, colorizer, visible;
        let windowWidth;
        menuBtn = document.querySelector('.navigator-menu');
        menuBtns = document.querySelector('.navigator-btns');
        colorizer = document.querySelector('.navigator-colorizer');
        changedToClose = menuBtn.querySelectorAll('.navigator-menu-visible');
        changedToHide = menuBtn.querySelector('.navigator-menu-hidden');
        visible = false;
        windowWidth = window.innerWidth;
        if(windowWidth > 1100) {
            menuBtns.style.clipPath = "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)";
            colorizer.style.clipPath = "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%)";
        } else {
            menuBtns.style.clipPath = "circle(0% at 100% 0)";
            colorizer.style.clipPath = "circle(0% at 100% 0)";
        }
        menuBtn.addEventListener("click", function() {
            if(!visible) {
                if(windowWidth > 1100) {
                    menuBtns.style.clipPath = "polygon(50% 0%, 75% 50%, 50% 100%, 25% 50%)";
                    colorizer.style.clipPath = "polygon(45% 0, 55% 0, 80% 50%, 80% 50%, 55% 100%, 45% 100%, 20% 50%, 20% 50%)";
                } else if (windowWidth > 600) {
                    menuBtns.style.clipPath = "circle(105% at 100% 0)";
                    colorizer.style.clipPath = "circle(120% at 100% 0)";
                } else {
                    menuBtns.style.clipPath = "circle(150% at 100% 0)";
                    colorizer.style.clipPath = "circle(150% at 100% 0)";
                }
                changedToHide.classList.add('hideOrShow');
                changedToClose.forEach(el => {
                    el.classList.add('changeToClose');
                })
                visible = true;
            } else {
                if(windowWidth > 1100) {
                    menuBtns.style.clipPath = "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)";
                    colorizer.style.clipPath = "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%, 50% 50%)";
                } else {
                    menuBtns.style.clipPath = "circle(0% at 100% 0)";
                    colorizer.style.clipPath = "circle(0% at 100% 0)";
                }
                changedToHide.classList.remove('hideOrShow');
                changedToClose.forEach(el => {
                    el.classList.remove('changeToClose');
                })
                visible = false;
            }
        });
    }
    showMenu();

    window.addEventListener('resize', function() {
        showMenu();
    });
});