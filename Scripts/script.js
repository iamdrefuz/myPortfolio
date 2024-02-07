const header = document.querySelector("header")
function stickyNavbar(){
    header.classList.toggle("scrolled",window.pageYOffset>0);
}

window.addEventListener("scroll", stickyNavbar)


let sr = ScrollReveal({
    distance:"60px",
    duration:2500,

}
)
 ScrollReveal({ reset:false});    //scroll animate reset false
sr.reveal(".showcase-info", {delay:600})
sr.reveal(".showcase-img", {origin:"top",delay:500})
sr.reveal(".about-info", {origin:"top",delay:300})
sr.reveal(".about-grid", {origin:"left",delay:300})
sr.reveal(".card-1, .srr-1", {origin:"top",delay:300,distance:"100px"})
sr.reveal(".card-2, .srv-2", {origin:"right",delay:300,distance:"100px"})
sr.reveal(".card-3, .srv-3", {origin:"left",delay:300,distance:"100px"})
sr.reveal(".card-4, .srv-4", {origin:"button",delay:300,distance:"100px"})
sr.reveal(".box-heading", {origin:"left",delay:300,distance:"100px"})
sr.reveal(".services-info ", {origin:"bottom",delay:300,distance:"100px"})
sr.reveal(".contact-info ", {origin:"bottom",delay:300,distance:"100px"})
sr.reveal(".sub-info ", {origin:"right",delay:300,distance:"100px"})



// skills=================


const first_skill = document.querySelector(".skill:first-child")
const sk_counters = document.querySelectorAll(".counter span")
const progress_bars = document.querySelectorAll(".skill svg circle")
const ml_section = document.querySelector(".milestones")
const ml_counters = document.querySelectorAll(".number span")
const links = document.querySelectorAll(".nav-link")
const toggle_btn =document.querySelector(".toggle-btn")
const hamburger=document.querySelector(".hamburger")

window.addEventListener("scroll" , ()=>{
    activeLink();
    if(!skillPlayed )skillCounter()
    
})

function hasReached(el){
    let topPosition = el.getBoundingClientRect().top;
    if(window.innerHeight >= topPosition + el.offsetHeight){
        return true
    }else{
        return false
    }
}

function updateCount(num, maxNum){
      let currentNumber =+ num.innetText;
      if (currentNumber < maxNum){
        num.innetText = currentNumber + 1;
        setTimeout( ()=> {
            updateCount(num,maxNum)
        }, 12);
      }
}

let skillPlayed = false
function skillCounter(){
    
    if(!hasReached(first_skill)) return
    sk_counters.forEach((counter, i) =>{
        skillPlayed = true
        let target= counter.dataset.target;
        let strokeValue = 427 - 427 * (target/100)
        console.log(target);
        setTimeout(() => {
            updateCount(counter , target)
        }, 400);
        progress_bars[i].style.setProperty("--target", strokeValue)

        
    })
    
    progress_bars.forEach((p) => (p.style.animation = "progress 2s  ease-in-out forwards" ))
}


let mixer = mixitup(".porfolio-gallery", {
    selectors:{
        target: ".prt-card",
    },
    animation:{
        duration:500,
    }
})



function activeLink(){

}
let firtTheme = localStorage.getItem("dark")
function changeTheme(){
    if(!document.body.classList.contains("dark")){
        document.body.classList.add("dark")
        toggle_btn.classList.replace("uil-moon", "uil-sun")
        localStorage.setItem("dark", 1)
    }
    else{
        document.body.classList.remove("dark")
        toggle_btn.classList.replace("uil-sun", "uil-moon")
        localStorage.setItem("dark", 0)
    }
} 

toggle_btn.addEventListener("click", ()=>{
     changeTheme()
})


hamburger.addEventListener("click", ()=>{
    document.body.classList.toggle("open");
    document.body.classList.toggle("stopScrolling")
})

links.forEach((link) => 
link.addEventListener('click', ()=>{
    document.body.classList.remove("open");
    document.body.classList.remove("stopScrolling")
})
);









var telegram_bot_id = "6012325190:AAGkCR-6sZR2gq6nrX7R10GoM68OrJD21Z4"; 
var chat_id = -1001914812479; 
var u_name, email, message ,grade ,phone;
var ready = function() {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;
    phone = document.getElementById("phone").value
    message = "\nSalom @drefuz Team sizga xabar bor"  +"\n" + "Ismi: " + u_name + "\nEmail: " + email + "\nPhone"+ phone+ "\nIzoh: " + message;
};
var sendtelegram = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    document.getElementById("phone").value = ""
   
    return false;
};