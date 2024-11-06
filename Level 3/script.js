function homeAnimation() {
    gsap.set(".marquee",{
        scale:2,
    })
    
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger: "#page1",
            // scroller:"body",
            start: "top 0%",
            end : "bottom top",
            scrub: 1,
            // markers: true,
            pin:true,
            stagger:2,
            
         }
    });
    
    
    tl.to(".video_layer",{
     '--clip' : '0%',
     ease : Power3,
     duration:2,
    
    } , 'a')
    tl.to(".marquee",{
     scale:1,
     ease : Power3,
     duration:2,
    } , 'a')
    tl.to(".lft",{
        xPercent:"5",
     ease : Power3,
     stagger:0.3,
    } ,'b' )
    tl.to(".rht",{
     xPercent:"-5",
     ease : Power3,
     stagger: .03,
    } ,'b' )
    
    
    
}
homeAnimation();

function BodyBackgrounds() {
    let pages = document.querySelectorAll(".section");

pages.forEach((e)=>{
    ScrollTrigger.create({
        trigger : e,
        start : "top 50%",
        end : "bottom -50%",
        // markers:true,
        onEnter: function () {
           document.body.setAttribute("theme", e.dataset.color)
        },
        onEnterBack: function () {
           document.body.setAttribute("theme", e.dataset.color)
        }
    })
})

}
BodyBackgrounds();



function page3animations(params) {
    gsap.to(".slide", {
        x: "-200%",
        ease:Power2,
        scrollTrigger: {
          trigger: '.container',
          start: "top top",
          end: "bottom 20%",
          scrub: 1,
          stagger:0.3,
        //   markers: true,
          pin: true,
        }
      });
}
page3animations();


function cardsanimations() {
    let carde = document.querySelectorAll(".card");

carde.forEach((e)=>{
    e.addEventListener("mousemove",(dets)=>{
        gsap.to(dets.currentTarget.querySelector(".card .div"),{
            x : gsap.utils.mapRange(0 , window.innerWidth , -200 , 200 , dets.x),
            opacity:1,
        })
    })
    e.addEventListener("mouseleave",(dets)=>{
        gsap.to(dets.currentTarget.querySelector(".card .div"),{
            x : gsap.utils.mapRange(0 , window.innerWidth , -200 , 200 , dets.x),
            opacity:0,
        })
    })
})
}

cardsanimations();

function paraanimation(params) {
    let clutter = "";

document.querySelector(".p-para").textContent.split("").forEach((element)=>{
    if (element == " ") {
        clutter += `<span>&nbsp</span>`;
    }
    clutter += `<span>${element}</span>`
})
console.log(clutter);
document.querySelector(".p-para").innerHTML = clutter;
gsap.set(".p-para span",{opacity:0.4,})
gsap.to(".p-para span",{
    opacity:1,
    stagger:0.01,
    scrollTrigger:{
        trigger:".p-para",
        start : "top 100%",
        end: "bottom top",
        scrub:0.1,
        ease:Power4,
        // markers:true,
    }
})

let clutter2 = "";

document.querySelector(".p-para2").textContent.split("").forEach((element2)=>{
    if (element2 == " ") {
        clutter2 += `<span>&nbsp</span>`;
    }
    clutter2 += `<span>${element2}</span>`
})

document.querySelector(".p-para2").innerHTML = clutter2;
gsap.set(".p-para2 span",{opacity:0.4,})
gsap.to(".p-para2 span",{
    opacity:1,
    stagger:0.01,
    scrollTrigger:{
        trigger:".p-para2",
        start : "top 100%",
        end: "bottom top",
        scrub:0.1,
        ease:Power4,
        // markers:true,
    }
})
}
paraanimation();


function capsules(params) {
    gsap.from(".capsule",{
        y:"30%",
        duration:2,
        stagger:1,
        scrollTrigger:{
            trigger: "#page6",
            start : "top 50%",
            end : "bottom bottom",
            scrub:3,
            ease:Power3,
            markers:true,
        }
    })
    
}
capsules();

function lasth1animation(params) {
    
let adder = "";
document.querySelector(".div2 h1").textContent.split("").forEach((ele)=>{
if (ele == " ") {
    adder+= `<h1>&nbsp</h1>`;
}
adder+= `<h1>${ele}</h1>`
})
document.querySelector(".div2").innerHTML = adder;

gsap.to(".div2 h1",{
    y:"-39%",
    duration:3,
    stagger:0.3,
    scrollTrigger:{
        trigger:"#footer",
        start:"top -30%",
        end: "bottom bottom",
        scrub:2,
        ease:Power3,
        // markers:true,
    }
})
}

lasth1animation();