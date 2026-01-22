gsap.registerPlugin(ScrollTrigger);


var cursor = document.querySelector("#cursor");
var cursorblur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
    cursorblur.style.left = dets.x -200+ "px"
    cursorblur.style.top = dets.y-200 + "px"

})



var h4all = document.querySelectorAll("#nav h4")


h4all.forEach(function (elem) {
    
    elem.addEventListener("mouseenter", function () {

        cursor.style.scale = 3
        cursor.style.border = "0.6px solid #fff"
        cursor.style.backgroundColor = "transparent"
        elem.style.color = "#000"

    })
    elem.addEventListener("mouseleave", function () {
        cursor.style.scale = 1
        cursor.style.border = "0px solid #95c11e"
        cursor.style.backgroundColor = "#95c11e"
        elem.style.color = "#fff"

    })
})



let images = ["https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/hero-5.jpg?strip=all&sharp=", "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-about-1.jpg?strip=all&sharp=1", "https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-menu-e1702553754869.jpg?strip=all&sharp=1"];
let index = 0;

let dots = document.querySelectorAll(".dot");
setInterval(() => {
    index = (index + 1) % images.length;
    document.getElementById("slide").src = images[index];

    dots.forEach(d => d.classList.remove("active"));
    dots[index].classList.add("active");

}, 2000);



gsap.to("#nav", {
    backgroundColor: "#000",
    height: "90px",
    duration: 1,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        scrub: 2
    }
})


gsap.to("#main", {
    backgroundColor: "#000",

    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -10%",
        end: "top 50%",
        scrub: true



    }
})

gsap.from("#about-us img,#about-us-in", {
    y: 50,
    opacity: 0,
    duration: 3,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",

        start: "top 75%",
        end: "top 55%",
        scrub: 1

    }

})


gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",

        start: "top 70%",
        end: "top 65%",
        scrub: 1
    }
})


gsap.from("#open", {
    y: -70,
    x: -70,
    duration: 2,
    scrollTrigger: {
        trigger: "#open",
        scroller: "body",
        // markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub: 2.2
    }
})

gsap.from("#close", {
    y: 70,
    x: 70,
    duration: 2,
    scrollTrigger: {
        trigger: "#open",
        scroller: "body",
       
        start: "top 55%",
        end: "top 45%",
        scrub: 2.2
    }
})

gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        
        start: "top 75%",
        end: "top 70%",
        scrub: 2
    }
})


document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, { rotateX: 10, rotateY: -10, duration: 0.4 });
  });
  card.addEventListener("mouseleave", () => {
    gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.4 });
  });
});
