//typing animation

var typed = new Typed(".typing",{
    strings: ["web Desiner","web Developer", "Graphic Designer", "YouTuber"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
})










// ====Aside===



// color change home about services portfolio and Contact 
// when i click one

const nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList = navList.length,
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length;


for(let i=0; i<totalNavList; i++){
    const a = navList[i].querySelector("a");
    a.addEventListener("click", function(){

        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("back-section");
        }

        //when i click one other color active will be remove. otherwise after click one one then click another both will showed active.
        for(let j=0; j<totalNavList; j++){
            if(navList[j].querySelector("a").classList.contains("active")){
                allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }

        //active showed when i click one
        this.classList.add("active");
        showSection(this);


        //toggol button hide after click any item of aside
        if(window.innerWidth <1200){
            asideSectionTogglerBtn();
        }
    })
}

//control active of section
function showSection(element){
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("active");
    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active");
}




//hire me button controller

function updateNev(element){
    for(let i=0; i<totalNavList; i++){
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#contact")[1];
    }
}

document.querySelector(".hire-me").addEventListener("click", function(){
    showSection(this);
    updateNev(this);
})





//toggoler control

const navTogglerBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", ()=>{
    asideSectionTogglerBtn();
})

function asideSectionTogglerBtn(){
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");

    for(let i=0; i<totalSection; i++){
        allSection[i].classList.toggle("open");
    }
}