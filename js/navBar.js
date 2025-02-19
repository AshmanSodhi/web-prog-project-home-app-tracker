let buttons = document.getElementsByClassName("nbAct");

for (let button of buttons) {
    button.addEventListener("mouseenter", function() {
        this.style.backgroundColor = "white";
    });

    button.addEventListener("mouseleave", function() {
        this.style.backgroundColor = "";
    });
}


const logo = document.querySelector('.topnav .logo');

logo.addEventListener('click', function() {
    console.log('Logo clicked!');
    window.location.href = 'homepage.html';
});

