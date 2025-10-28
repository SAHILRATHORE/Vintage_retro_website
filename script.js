function play() {
    gsap.from(".camera", {
        rotate: '0deg',
        duration: 2,
        delay: 1
    }, "a");
    gsap.from("#heading", {
        opacity: 0,
        duration: 2,
        delay: 1,
        scale: 0
    }, "a");
    gsap.from("#minicamera", {
        opacity: 0,
        duration: 2,
        delay: 1,
        scale: 0
    }, "a");
    gsap.from(".nav", {
        top: "-10%",
        duration: 2,
        delay: 1,
        opacity: 0
    }, "a");
    gsap.from("#p1sec1", {
        left: "-10%",
        duration: 2,
        delay: 1,
        opacity: 0
    }, "a")
    gsap.from("#p2sec1", {
        left: "-10%",
        duration: 2,
        delay: 1,
        opacity: 0
    }, "a")
    gsap.from("#p2sec2", {
        x: 500,
        duration: 2,
        delay: 1,
        opacity: 0,
    }, "a")
}
play()

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".page2",
        start: "0% 95%",
        end: "50% 78%",
        scrub: 1.2,
        // markers:true
    }
})
tl.to(".camera", {
    top: "88%",
    rotate: "90deg",
    scale: 1.3
})

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page3",
        start: "-20% 100%",
        end: "50% 30%",
        scrub: 1.2,
        // markers:true
    }
})
tl2.to(".camera", {
    top: "210%",
    left: "37%",
    rotate: "75deg",
    scale: 1.1
}, "b")
.to("#p2sec1",{
    top:"5%"
},"b")
gsap.from(".page3 .p3",{
    opacity:0,
    duration:1,
    y:50,
    scrollTrigger:{
        trigger:".page3 .p3",
        scroller:"body",
        // markers:true,
        start:"10% 100%",
        end:"50% 80%",
        scrub:1.2,
    }
})

var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page4",
        start: "0% 90%",
        end: "50% 45%",
        scrub: 1.2,
        // markers:true
    }
})
tl3.to(".camera", {
    top: "310%",
    left: "40%",
    rotate: "0deg",
    scale: 1.4
}, "c")


var tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page5",
        start: "0% 100%",
        end: "50% 30%",
        scrub: 1.2,
        // markers:true
    }
})
tl4.to(".camera", {
    top: "431%",
    left: "39%",
    scale: 0.95
}, "d")
.to(".p4img",{
    scale:0.2,
    opacity:0,
    scrub:1.2
}, "d")


gsap.to(".cameracontent #item1",{
    // duration:1,
    y:"-200",
    // opacity:0,
    scrollTrigger:{
        trigger:".page6",
        scroller:"body",
        //  markers:true,
        start:"10% 100%",
        end:"20% 80%",
        scrub:1.2,
    }
})
gsap.to(".cameracontent #item2",{
    // duration:1,
    y:"-100",
    // opacity:0,
    scrollTrigger:{
        trigger:".page6",
        scroller:"body",
        //  markers:true,
        start:"10% 100%",
        end:"20% 80%",
        scrub:1.2,
    }
})
gsap.from(".p6content",{
    duration:1,
    x:200,
    opacity:0,
    scrollTrigger:{
        trigger:".page6",
        scroller:"body",
        //  markers:true,
        start:"50% 90%",
        end:"70% 90%",
        scrub:1.2,
    }
})

