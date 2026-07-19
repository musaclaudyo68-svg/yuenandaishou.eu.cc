/* =========================
   UKPay Advantages JS
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





// 点击导航自动关闭菜单

const menuLinks = document.querySelectorAll("nav a");


menuLinks.forEach(link => {


    link.addEventListener("click", () => {


        if (menu.classList.contains("show")) {


            menu.classList.remove("show");


        }


    });


});








/* =========================
   Scroll Animation
========================= */


const cards = document.querySelectorAll(".adv-card");



const observer = new IntersectionObserver(


    (entries) => {


        entries.forEach(entry => {


            if (entry.isIntersecting) {


                entry.target.classList.add("active");


            }


        });


    },


    {


        threshold: 0.15


    }




);





cards.forEach(card => {


    card.classList.add("hidden");


    observer.observe(card);


});









/* =========================
   Add Animation Style
========================= */


const animationStyle = document.createElement("style");


animationStyle.innerHTML = `



.hidden{

    opacity:0;

    transform:

    translateY(40px);

}



.adv-card.active{


    opacity:1;

    transform:

    translateY(0);

    transition:

    .8s ease;

}



`;



document.head.appendChild(animationStyle);








/* =========================
   Header Scroll Effect
========================= */


const header = document.querySelector(".header");



window.addEventListener("scroll", () => {


    if (window.scrollY > 50) {


        header.style.boxShadow =

            "0 10px 35px rgba(0,0,0,.08)";



    } else {


        header.style.boxShadow = "none";


    }



});








/* =========================
   Page Loading Animation
========================= */


window.addEventListener("load", () => {


    document.body.classList.add("loaded");


});
