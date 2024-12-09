if (window.innerWidth > 768) { 
    document.addEventListener("scroll", () => {
        const scrollableElement = document.scrollingElement || document.documentElement;
        const scrollPosition = scrollableElement.scrollTop;

        const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

        const image1 = document.getElementById("image1");
        const image2 = document.getElementById("image2");
        const image3 = document.getElementById("image3");
        const imagebg = document.getElementById("imagebg");
        const header = document.getElementById("header");

        image1.style.transform = `translateY(${clamp(scrollPosition * 0.7, -200, 200)}px)`;
        image2.style.transform = `translateY(${clamp(scrollPosition * 0.5, -200, 200)}px)`;
        image3.style.transform = `translateY(${clamp(scrollPosition * 0.3, -200, 200)}px)`;
        imagebg.style.transform = `translateY(${clamp(scrollPosition * 0.1, -100, 100)}px)`;

        header.style.transform = `translateY(${clamp(scrollPosition * 0.3, -100, 100)}px)`;
        header.style.opacity = `${1 - scrollPosition * 0.002}`;
        imagebg.style.opacity = `${1 - scrollPosition * 0.001}`;
    });
}

document.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbarContainer");

    if (window.scrollY > navbar.scrollHeight) {
        navbar.style.transform = `translateY(-120px)`;
    } else {
        navbar.style.transform = `translateY(120px)`;
    }
})

