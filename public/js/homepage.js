document.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;

    const image1 = document.getElementById("image1");
    const image2 = document.getElementById("image2");
    const image3 = document.getElementById("image3");

    // Adjust the scroll speed for each image (multiplier controls speed)
    image1.style.transform = `translateY(${scrollPosition * 0.7}px)`;  // Slower
    image2.style.transform = `translateY(${scrollPosition * 0.5}px)`;  // Medium speed
    image3.style.transform = `translateY(${scrollPosition * 0.3}px)`;

    // Alternatively, you can use backgroundPositionY for a background parallax effect
    // image1.style.backgroundPositionY = scrollPosition * 0.3 + "px";
    // image2.style.backgroundPositionY = scrollPosition * 0.5 + "px";
    // image3.style.backgroundPositionY = scrollPosition * 0.7 + "px";
});