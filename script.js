// ==========================
// PROBAGS LLP
// Premium Website JS
// ==========================

// Progress Bar
const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

const totalHeight =
document.documentElement.scrollHeight -
window.innerHeight;

const progress =
(window.scrollY / totalHeight) * 100;

progressBar.style.width =
progress + "%";

});



// Header Blur

const header =
document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>30){

header.style.padding="14px 22px";
header.style.boxShadow="0 10px 30px rgba(0,0,0,.08)";
header.style.background="rgba(255,255,255,.88)";

}else{

header.style.padding="18px 22px";
header.style.boxShadow="none";
header.style.background="rgba(255,255,255,.72)";

}

});



// Fade Reveal

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.18});


document
.querySelectorAll(".section,.feature,.sizes,.contact,.card")
.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});



// Hero Parallax

const heroImage =
document.querySelector(".hero-image img");

window.addEventListener("scroll",()=>{

let y =
window.scrollY;

heroImage.style.transform =
`translateY(${y*.18}px)`;

});




// Active Nav

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=
section.offsetTop-150;

if(scrollY>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});



// Card Hover Animation

document
.querySelectorAll(".card")
.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=
card.getBoundingClientRect();

const x=
e.clientX-rect.left;

const y=
e.clientY-rect.top;

const rotateY=
((x/rect.width)-0.5)*12;

const rotateX=
((y/rect.height)-0.5)*-12;

card.style.transform=
`perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform=
"perspective(900px) rotateX(0deg) rotateY(0deg)";

});

});




// Smooth Button Animation

document
.querySelectorAll("a")
.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transition=".35s";

});

});




// Lazy Images

const lazyImages =
document.querySelectorAll("img");

const imageObserver =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const img=
entry.target;

img.src=
img.getAttribute("src");

imageObserver.unobserve(img);

}

});

});

lazyImages.forEach(img=>{

imageObserver.observe(img);

});




// Page Fade In

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});




// Hero Mouse Parallax

document.addEventListener("mousemove",(e)=>{

const x=
(window.innerWidth/2-e.clientX)/50;

const y=
(window.innerHeight/2-e.clientY)/50;

heroImage.style.filter=
"drop-shadow(0 40px 60px rgba(0,0,0,.18))";

heroImage.style.transform=
`translate(${x}px,${y}px)`;

});




// Simple Counter Animation (Future)

function animateValue(el,start,end,duration){

let range=end-start;

let current=start;

let increment=end>start?1:-1;

let step=Math.abs(Math.floor(duration/range));

let timer=setInterval(()=>{

current+=increment;

el.innerHTML=current;

if(current==end){

clearInterval(timer);

}

},step);

}



// Console Message 😊

console.log(
"%cWelcome to ProBags LLP",
"font-size:20px;color:#000;font-weight:bold;"
);

console.log(
"Packaging That Elevates Your Brand."
);
