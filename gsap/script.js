gsap.registerPlugin(ScrollTrigger);

gsap.to('.content',{
    xPercent: 100,
    scrollTrigger: {
        trigger: ".content",
        start: "top 80%",
        end: "top 15%",
        toggleActions: "none none none none",
        scrub: 1,
        markers: {
            startColor: 'black',
            endColor: "white",
            fontSize: '1.75rem',
        },
    }
})

gsap.to('.content2',{
    xPercent: -100,
    scrollTrigger: {
        trigger: ".content2",
        start: "top 80%",
        end: "top 15%",
        toggleActions: "play none none none",
        scrub: 1,
        markers: {
            startColor: 'red',
            endColor: "white",
            fontSize: '1.75rem',
        },
    }
})

var text = document.querySelector(".text");

text.addEventListener("mouseenter", function(){
    TweenMax.to(text, 0.5, {className: "+=highlight"});
});

text.addEventListener("mouseleave", function(){
    TweenMax.to(text, 0.5, {className: "-=highlight"});
});