const btn =
    document.getElementById("menuBtn");


const menu =
    document.getElementById("menu");


if (btn) {

    btn.onclick = function () {

        menu.classList.toggle("show");

    }

}




document
    .getElementById("contactForm")
    .addEventListener(
        "submit",
        function (e) {


            e.preventDefault();


            alert(
                "感谢您的咨询，我们的商务团队会尽快联系您。"
            );


        }

    );