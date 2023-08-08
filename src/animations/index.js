import gsap from "gsap";

export const preLoaderAnim = () => {
    gsap.from(".preloader", {
        duration: 2,
        onComplete: hidePreloader,
    });
};

const hidePreloader = () => {
    gsap.to(".preloader", {
        duration: 1,
        opacity: 0,
        onComplete: () => {
            const preloader = document.querySelector(".preloader");
            if (preloader) {
                preloader.style.display = "none";
            }
        },
    });
};
