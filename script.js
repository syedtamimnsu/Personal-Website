//typing animation

var typed = new Typed(".typing",{
    strings: ["AI engineer","software engineer","problem solver", "full-stack developer", "backend developer" ],
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


        removeBackSection();

        //when i click one other color active will be remove. otherwise after click one one then click another both will showed active.
        for(let j=0; j<totalNavList; j++){
            if(navList[j].querySelector("a").classList.contains("active")){
                // allSection[j].classList.add("back-section");

                addBackSection(j);
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


//remove back section
function removeBackSection(){
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("back-section");
    }
}

//add back section

function addBackSection(num){
    allSection[num].classList.add("back-section");
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
//it will reached in contact section
function updateNev(element){
    for(let i=0; i<totalNavList; i++){
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];

        //color change about to contact section
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function(){
    const sectionIndex = this.getAttribute("date-section-index");
    showSection(this);
    updateNev(this);

    removeBackSection();
    addBackSection(sectionIndex);
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




//send email part

document.addEventListener("DOMContentLoaded", function () {
    // Initialize EmailJS with your user ID
    emailjs.init("your_user_id"); // Replace with your actual EmailJS user ID

    // Add event listener for the form submission
    document.querySelector(".contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from refreshing the page

        // Get the form input values
        const name = document.querySelector('input[placeholder="Name"]').value;
        const email = document.querySelector('input[placeholder="Email"]').value;
        const subject = document.querySelector('input[placeholder="Subject"]').value;
        const message = document.querySelector('textarea[placeholder="Message"]').value;

        // Check if all fields are filled
        if (name && email && subject && message) {
            // Send the email using EmailJS
            emailjs.send("your_service_id", "your_template_id", {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message,
                to_email: "syedtamim167@gmail.com"  // This is your email address
            }).then(
                function (response) {
                    // Success - email sent
                    alert("Message sent successfully!");
                    document.querySelector(".contact-form").reset(); // Reset the form
                },
                function (error) {
                    // Error - failed to send
                    console.error("Failed to send email", error);
                    alert("Failed to send message. Please try again.");
                }
            );
        } else {
            alert("Please fill in all fields.");
        }
    });
});

