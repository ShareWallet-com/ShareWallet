gsap.registerPlugin(ScrollTrigger);

Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

Shery.makeMagnet("#gif-container", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
});

const locoScroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true,
    smartphone: {
        smooth: true,
    },
    tablet: {
        smooth: true,
    },
});

locoScroll.on('scroll', ScrollTrigger.update);

ScrollTrigger.scrollerProxy('#main', {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector('#main').style.transform ? 'transform' : 'fixed',
});

ScrollTrigger.addEventListener('refresh', () => locoScroll.update());
ScrollTrigger.refresh();

gsap.from(["#page2 #middle #left", "#page2 #middle #right"], {
    scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        markers: false,
    },
    x: (index) => (index === 0 ? -900 : 900),
    opacity: 0,
    ease: "power2.out",
    duration: 1,
});

function triggerAnimation(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            Shery.textAnimate("#page8 h1", {
                style: 2,
                y: 10,
                delay: 0.1,
                duration: 2,
                ease: "cubic-bezier(0.23, 1, 0.320, 1)",
                multiplier: 0.1,
            });
            observer.disconnect();
        }
    });
}

const observer = new IntersectionObserver(triggerAnimation, {
    root: null,
    threshold: 0.1,
});

const target = document.querySelector("#page8 h1");
if (target) {
    observer.observe(target);
} else {
    console.warn("Target #page8 h1 not found for Intersection Observer.");
}
