let current_page = "main-page";
let previous_button = document.querySelector(".nav-button[aria-current='page']");

function switchPage(page, current_button){
    let current = document.getElementById(current_page);
    let new_page = document.getElementById(page);
    if (current_page == page) return;

    current.style.display = "none";
    new_page.style.display = "flex";
    current_page = page;

    previous_button.removeAttribute("aria-current");
    current_button.setAttribute("aria-current", "page");
    previous_button = current_button;
    
    let button = document.getElementById("rotating-button");
    button.innerText = "Click me for something to happen";
    button.style.transform = "rotate(0deg)";
}

function rotateButton(){
    let button = document.getElementById("rotating-button");
    button.innerText = "Whoosh!";
    if (button.style.transform == "rotate(360deg)"){
        button.style.transform = "rotate(0deg)";
        return;
    }
    button.style.transform = "rotate(360deg)";
}

let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('no-transition');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('no-transition');
    }, 300);
});