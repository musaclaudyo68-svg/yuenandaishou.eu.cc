/* =========================
   UKPay Website JS
========================= */



/* =========================
   Hero Slider
========================= */


const slides = document.querySelectorAll(".slide");

const dots = document.querySelectorAll(".dot");


let currentSlide = 0;


let slideTimer;



function showSlide(index) {


    slides.forEach((slide) => {

        slide.classList.remove("active");

    });



    dots.forEach((dot) => {

        dot.classList.remove("active");

    });



    slides[index].classList.add("active");

    dots[index].classList.add("active");


    currentSlide = index;


}




function nextSlide() {


    currentSlide++;


    if (currentSlide >= slides.length) {

        currentSlide = 0;

    }


    showSlide(currentSlide);


}





function startSlider() {


    slideTimer = setInterval(() => {

        nextSlide();

    }, 5000);


}




function resetSlider() {


    clearInterval(slideTimer);

    startSlider();


}





dots.forEach((dot, index) => {


    dot.addEventListener("click", () => {


        showSlide(index);


        resetSlider();


    });


});



if (slides.length > 0) {

    startSlider();

}








/* =========================
   Mobile Menu
========================= */


const menuBtn = document.getElementById("menuBtn");

const navMenu = document.getElementById("navMenu");



if (menuBtn) {



    menuBtn.addEventListener("click", () => {


        navMenu.classList.toggle("show");


    });



}







/* 点击菜单后自动关闭 */


const navLinks = document.querySelectorAll("nav a");


navLinks.forEach(link => {


    link.addEventListener("click", () => {


        if (navMenu.classList.contains("show")) {


            navMenu.classList.remove("show");


        }


    });


});










/* =========================
   Scroll Animation
========================= */


const observer = new IntersectionObserver(

    (entries) => {


        entries.forEach(entry => {


            if (entry.isIntersecting) {


                entry.target.classList.add("show");


            }



        });


    },


    {

        threshold: 0.15

    }

);





const animateItems = document.querySelectorAll(

    ".card,.advantage,.three-box div"

);



animateItems.forEach(item => {


    item.classList.add("hidden");


    observer.observe(item);


});









/* =========================
   Add Animation CSS
========================= */


const style = document.createElement("style");


style.innerHTML = `


.hidden{

opacity:0;

transform:translateY(40px);

transition:.8s ease;

}



.show{

opacity:1;

transform:translateY(0);

}


`;



document.head.appendChild(style);









/* =========================
   Header Scroll Effect
========================= */


const header = document.querySelector(".header");



window.addEventListener("scroll", () => {


    if (window.scrollY > 50) {


        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,.08)";


    } else {


        header.style.boxShadow = "none";


    }


});








/* =========================
   Prevent Empty Button Jump
========================= */


document.querySelectorAll(".btn").forEach(btn => {


    btn.addEventListener("click", (e) => {


        if (btn.getAttribute("href") === "#") {


            e.preventDefault();


        }


    });


});