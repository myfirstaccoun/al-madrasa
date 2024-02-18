window.addEventListener("scroll", scrollFunc);
function scrollFunc() {
    let divs = document.querySelectorAll(".advantage");

    for(let i = 0; i < divs.length; i++) {
        let windowHeight = window.innerHeight;
        let div_top = divs[i].getBoundingClientRect().top;
        let revealPoint = 150;
        console.log(`${i}, windowHeight: ${windowHeight}, div_top: ${div_top}`);
        if(revealPoint < windowHeight - div_top) {
            divs[i].classList.add("show");
        } else {
            divs[i].classList.remove("show");
        }
    }
}