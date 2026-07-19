/* =========================
   UKPay News JS
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




// 点击菜单关闭

document.querySelectorAll("nav a")
    .forEach(link => {


        link.addEventListener("click", () => {


            if (menu.classList.contains("show")) {


                menu.classList.remove("show");


            }


        });


    });







/* =========================
   Header Shadow
========================= */


const header = document.querySelector(".header");



window.addEventListener("scroll", () => {


    if (window.scrollY > 50) {


        header.style.boxShadow =

            "0 10px 35px rgba(0,0,0,.12)";


    } else {


        header.style.boxShadow = "none";


    }


});








/* =========================
   News Card Animation
========================= */


const cards = document.querySelectorAll(".news-card");



const observer = new IntersectionObserver(


    (entries) => {


        entries.forEach(item => {


            if (item.isIntersecting) {


                item.target.classList.add("show");


            }


        });


    },

    {

        threshold: .15

    }


);





cards.forEach(card => {


    card.classList.add("hidden");


    observer.observe(card);


});









/* =========================
   Dynamic Animation CSS
========================= */


const style = document.createElement("style");



style.innerHTML = `



.hidden{


opacity:0;


transform:

translateY(40px);


}



.news-card.show{


opacity:1;


transform:

translateY(0);


transition:.7s ease;


}



`;



document.head.appendChild(style);








/* =========================
   Smooth Scroll
========================= */


document.querySelectorAll('a[href^="#"]')
    .forEach(anchor => {


        anchor.addEventListener("click", function (e) {


            let target = document.querySelector(

                this.getAttribute("href")

            );



            if (target) {


                e.preventDefault();


                target.scrollIntoView({

                    behavior: "smooth"

                });


            }



        });


    });








/* =========================
 Page Load
========================= */


window.addEventListener("load", () => {


    document.body.classList.add("loaded");


});

/* =========================
 Mobile Menu
========================= */


const menuBtn =
    document.getElementById("menuBtn");


const menu =
    document.getElementById("menu");



if (menuBtn) {


    menuBtn.onclick = function () {


        menu.classList.toggle("show");


    }



}






/* =========================
 Close Menu
========================= */


document.querySelectorAll("nav a")
    .forEach(item => {


        item.onclick = function () {


            if (menu) {

                menu.classList.remove("show");

            }


        }



    });









/* =========================
 Scroll Header
========================= */


window.addEventListener(
    "scroll",
    () => {


        const header =
            document.querySelector(".header");


        if (window.scrollY > 50) {


            header.style.boxShadow =
                "0 5px 25px rgba(0,0,0,.08)";


        } else {


            header.style.boxShadow = "none";


        }


    });







/* =========================
 Back Top Button
========================= */


const topBtn = document.createElement("div");


topBtn.innerHTML = "↑";


topBtn.style.position = "fixed";


topBtn.style.right = "25px";


topBtn.style.bottom = "30px";


topBtn.style.width = "45px";


topBtn.style.height = "45px";


topBtn.style.background = "#006cff";


topBtn.style.color = "#fff";


topBtn.style.borderRadius = "50%";


topBtn.style.display = "none";


topBtn.style.alignItems = "center";


topBtn.style.justifyContent = "center";


topBtn.style.cursor = "pointer";


topBtn.style.fontSize = "22px";


topBtn.style.zIndex = "999";



document.body.appendChild(topBtn);





window.addEventListener(
    "scroll",
    () => {


        if (window.scrollY > 500) {


            topBtn.style.display = "flex";


        } else {


            topBtn.style.display = "none";


        }


    });





topBtn.onclick = function () {


    window.scrollTo({


        top: 0,


        behavior: "smooth"


    });


};







/* =========================
 Lazy Load
========================= */


document
    .querySelectorAll("img")
    .forEach(img => {


        img.loading = "lazy";


    });