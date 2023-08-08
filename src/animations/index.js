import gsap from "gsap";

export const preLoaderAnim = () => {

    gsap.to(".preloader", {
        duration: 3,
        opacity: 1,
        onComplete: hidePreloader,
    });
};

const hidePreloader = () => {
    const contentToHide = document.querySelector(".content-to-hide");
    
    gsap.to(".preloader", {
        duration: 1,
        opacity: 0,
        onComplete: () => {
            const preloader = document.querySelector(".preloader");
            if (preloader) {
                preloader.style.display = "none";
            }
            
            if (contentToHide) {
                contentToHide.style.opacity = 1;
            }
        },
    });
};
