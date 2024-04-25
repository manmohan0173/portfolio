// var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");


var typed = new Typed(".auto-type",{
    strings : ["Web Deeveloper", "Programmer", "Dost"],
    typeSpeed : 50,
    backSpeed : 50,
    loop : true
  })

  document.addEventListener("mousemove", function (dets) {
    blur.style.left = dets.x  + "px";
    blur.style.top = dets.y  + "px";
  });

gsap.from(".heroimage",{
  delay:0.4,
  opacity:0,
  duration:1,
  y:60
})

gsap.from(".infosection",{
  delay:0.4,
  opacity:0,
  duration:1,
  y:60
})

gsap.to(".navbar", {
  backgroundColor: "black",
  duration: 0.5,
  height: "12vh",
  scrollTrigger: {
    trigger: ".navbar",
    scroller: "body",
    // markers:true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.to(".herosection", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: ".herosection",
    scroller: "body",
    // markers: true,
    start: "top -30%",
    end: "top -70%",
    scrub: 2,
  },
});
gsap.to(".cards", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "cards",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});
gsap.from(".card", {
 delay:0.4,
  opacity:0,
  duration:1,
  y:60,
  scrollTrigger: {
    trigger: "card",
    scroller: "body",
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

