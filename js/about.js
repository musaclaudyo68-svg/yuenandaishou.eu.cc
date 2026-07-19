/* =========================
   UKPay About Page JS
========================= */



/* =========================
   Mobile Menu
========================= */


const menuBtn = document.getElementById("menuBtn");

const menu = document.getElementById("menu");



if (menuBtn && menu) {


    menuBtn.addEventListener("click", () => {


        menu.classList.toggle("show");


    });


}




// 点击菜单链接关闭

const links = document.querySelectorAll("nav a");



links.forEach(link => {


    link.addEventListener("click", () => {


        if (menu.classList.contains("show")) {


            menu.classList.remove("show");


        }


    });


});







/* =========================
   Scroll Reveal Animation
========================= */


const revealElements = document.querySelectorAll(

    ".content-box, .feature-grid div, .service, .principle-grid div"

);





const revealObserver = new IntersectionObserver(


    (entries) => {


        entries.forEach(item => {


            if (item.isIntersecting) {


                item.target.classList.add("show");


            }


        });


    },


    {


        threshold: 0.15


    }



);






revealElements.forEach(el => {


    el.classList.add("reveal");


    revealObserver.observe(el);


});










/* =========================
   Add Animation CSS
========================= */


const style = document.createElement("style");



style.innerHTML = `



.reveal{


    opacity:0;


    transform:

    translateY(40px);


    transition:

    all .8s ease;


}



.reveal.show{


    opacity:1;


    transform:

    translateY(0);


}



.feature-grid div:nth-child(2),

.service:nth-child(2),

.principle-grid div:nth-child(2){


    transition-delay:.15s;


}




.feature-grid div:nth-child(3),

.service:nth-child(3),

.principle-grid div:nth-child(3){


    transition-delay:.3s;


}




.service:nth-child(4),

.principle-grid div:nth-child(4){


    transition-delay:.45s;


}



`;



document.head.appendChild(style);









/* =========================
   Header Scroll Effect
========================= */


const header = document.querySelector(".header");



window.addEventListener("scroll", () => {


    if (window.scrollY > 40) {


        header.style.boxShadow =

            "0 12px 40px rgba(0,0,0,.12)";


    } else {


        header.style.boxShadow = "none";


    }



});










/* =========================
   Smooth Anchor Scroll
========================= */


document.querySelectorAll('a[href^="#"]').forEach(anchor => {


    anchor.addEventListener("click", function (e) {


        const target = document.querySelector(

            this.getAttribute("href")

        );


        if (target) {


            e.preventDefault();


            target.scrollIntoView({


                behavior: "smooth",


                block: "start"


            });



        }



    });



});









/* =========================
   Page Loading Effect
========================= */


window.addEventListener("load", () => {


    document.body.classList.add("loaded");


});