const giftBox = document.getElementById("giftBox");
const envelope = document.getElementById("envelope");
const giftLid = document.querySelector(".gift-lid");

giftBox.addEventListener("click", () => {


    /* فتح الغطاء */

    giftLid.style.transition = "0.8s ease";

    giftLid.style.transformOrigin = "left center";

    giftLid.style.transform = "translateY(-35px) rotate(-18deg)";

    /* اختفاء الهدية */

    setTimeout(() => {

        giftBox.style.transition = ".6s";

        giftBox.style.opacity = "0";

        giftBox.style.transform = "scale(.8)";

    },700);

    /* ظهور الظرف */

    setTimeout(() => {

        giftBox.style.display = "none";

document.getElementById("hint").style.display = "none";

envelope.style.display = "block";

envelope.style.opacity = "0";


envelope.style.transform = "translate(-50%,-50%) scale(.8)";
envelope.style.transition = ".8s ease";

setTimeout(() => {

    envelope.style.opacity = "1";
    envelope.style.transform = "translate(-50%,-50%) scale(1)";

},50);

    },1200);

});
console.log("JS Loaded");
/* =========================
   OPEN LETTER
========================= */

const letter = document.getElementById("letter");
const typingText = document.getElementById("typingText");
const continueBtn = document.getElementById("continueBtn");

const message = `كل لحظة معاك كانت أجمل ذكرى في حياتي ❤️
وده مجرد بداية للمفاجأة...`;

envelope.addEventListener("click", () => {

    envelope.style.display = "none";

    letter.classList.remove("hidden");
    letter.style.display = "flex";

    letter.style.opacity = "0";

letter.style.transform = "scale(.85)";

letter.style.transition = ".5s ease";

setTimeout(() => {

    letter.style.opacity = "1";

    letter.style.transform = "scale(1)";

},50);

    typingText.innerHTML = "";

    let i = 0;

    function type() {

       if(i < message.length){

    if(message.charAt(i) === "\n"){

        typingText.innerHTML += "<br>";

    }else{

        typingText.innerHTML += message.charAt(i);

    }

    i++;

    setTimeout(type,40);

}else{

    continueBtn.classList.remove("hidden");
    continueBtn.style.display = "inline-block";

}

    }

    type();

});