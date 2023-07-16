var alerted = localStorage.getItem('alerted') || '';
if (alerted != 'yes') {
    alert("Welcome to the clone page of 'amazon.com'.\n(This is not the official site of Amazon.)");
    localStorage.setItem('alerted', 'yes');
}


// Image slider
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}