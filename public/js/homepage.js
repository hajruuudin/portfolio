document.addEventListener("scroll", () => {
    const scrollableElement = document.scrollingElement || document.documentElement;
    const scrollPosition = scrollableElement.scrollTop;

    const image1 = document.getElementById("image1");
    const image2 = document.getElementById("image2");
    const image3 = document.getElementById("image3");
    const header = document.getElementById("header");
    const imagebg = document.getElementById("imagebg");
    const navbar = document.getElementById("navbarContainer");

    image1.style.transform = `translateY(${scrollPosition * 0.7}px)`;
    image2.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    image3.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    imagebg.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    header.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    header.style.opacity = `${1 - scrollPosition * 0.002}`;
    
    if(window.scrollY > navbar.scrollHeight){
        navbar.style.transform = `translateY(-120px)`
    } else {
        navbar.style.transform = `translateY(120px)`
    }
});