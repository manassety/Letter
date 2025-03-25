document.addEventListener("DOMContentLoaded", function () {
    // Click Me Button Animation (Bounce Effect)
    gsap.from(".btn-click", {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: "bounce.out",
    });

    // Profile Image Hover Effect (Scale Up)
    document.querySelector(".scale-hover").addEventListener("mouseenter", function () {
        gsap.to(this, { scale: 1.2, duration: 0.3 });
    });

    document.querySelector(".scale-hover").addEventListener("mouseleave", function () {
        gsap.to(this, { scale: 1, duration: 0.3 });
    });

    // Heartbeat Animation (Looping Pulse)
    gsap.to(".btn-heart", {
        scale: 1.1,
        repeat: -1,
        yoyo: true,
        duration: 0.8,
        ease: "power1.inOut",
    });
});
