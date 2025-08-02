// toggle style switcher

const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () =>{
    document.querySelector(".style-switcher").classList.toggle("open");
})

//hide style when screen will scroll
window.addEventListener("scroll", () =>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        //if styler switcher scrooled then close it
        document.querySelector(".style-switcher").classList.remove("open")
    }
})







// Theme colors

const alternativeStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternativeStyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
}






//theme light and dark mode

const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");

// Save preference to localStorage
if(document.body.classList.contains("dark")){
    localStorage.setItem("theme", "dark");
} else {
    localStorage.setItem("theme", "light");
}

})


// window.addEventListener("load", () => {
//     if(document.body.classList.contains("dark")){
//         dayNight.querySelector("i").classList.add("fa-sun");
//     }
//     else{
//         dayNight.querySelector("i").classList.add("fa-moon");
//     }
// })

window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.remove("dark");
        dayNight.querySelector("i").classList.add("fa-moon");
    } else {
        document.body.classList.add("dark"); // default to dark
        dayNight.querySelector("i").classList.add("fa-sun");
    }
});
