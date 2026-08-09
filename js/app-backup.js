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

/* =========================
   CONTINUE BUTTON
========================= */

continueBtn.addEventListener("click", () => {

    letter.style.opacity = "0";
    letter.style.transform = "scale(.95)";
    letter.style.transition = ".5s ease";

    setTimeout(() => {

        letter.style.display = "none";

const memoriesSection = document.getElementById("memories");

memoriesSection.classList.remove("hidden");
memoriesSection.style.display = "flex";

memoriesSection.style.opacity = "0";
        memoriesSection.style.transition = ".6s ease";

        setTimeout(() => {

            memoriesSection.style.opacity = "1";

        }, 50);

    }, 500);

});

/* =========================
   MEMORIES DATA
========================= */

const memories = [

    {
        image: "images/photo1.jpg",
        message: "اكتب هنا رسالة الصورة الأولى ❤️"
    },

    {
        image: "images/memory2.jpg",
        message: "اكتب هنا رسالة الصورة الثانية ❤️"
    },

    {
        image: "images/memory3.jpg",
        message: "اكتب هنا رسالة الصورة الثالثة ❤️"
    },

    {
        image: "images/memory4.jpg",
        message: "اكتب هنا رسالة الصورة الرابعة ❤️"
    },

    {
        image: "images/memory5.jpg",
        message: "اكتب هنا رسالة الصورة الخامسة ❤️"
    },

    {
        image: "images/memory6.jpg",
        message: "اكتب هنا رسالة الصورة السادسة ❤️"
    },

    {
        image: "images/memory7.jpg",
        message: "اكتب هنا رسالة الصورة السابعة ❤️"
    }

];

let currentMemory = 0;

const memoryCard = document.getElementById("memoryCard");
const memoryImage = document.getElementById("memoryImage");
const memoryMessage = document.getElementById("memoryMessage");

const prevMemory = document.getElementById("prevMemory");
const nextMemory = document.getElementById("nextMemory");

const memoriesSection = document.getElementById("memories");

memoriesSection.style.display = "none";
letter.style.display = "none";
envelope.style.display = "none";

const memoryDots = document.querySelectorAll(".memory-dots span");


function showMemory(index) {

    currentMemory = index;

    memoryCard.classList.remove("flipped");

    memoryImage.src = memories[index].image;

    memoryMessage.textContent = memories[index].message;

    memoryDots.forEach((dot, i) => {

        dot.classList.toggle(
            "active",
            i === index
        );

    });

}


/* Flip */

memoryCard.addEventListener("click", () => {

    memoryCard.classList.toggle("flipped");

});

let touchStartX = 0;
let touchEndX = 0;

memoryCard.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

memoryCard.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;

    const swipeDistance = touchEndX - touchStartX;

    // اسحب من اليمين للشمال → الصورة التالية
    if (swipeDistance < -50) {
        currentMemory++;

        if (currentMemory >= memories.length) {
            currentMemory = 0;
        }

        showMemory(currentMemory);
    }

    // اسحب من الشمال لليمين → الصورة السابقة
    if (swipeDistance > 50) {
        currentMemory--;

        if (currentMemory < 0) {
            currentMemory = memories.length - 1;
        }

        showMemory(currentMemory);
    }
}, { passive: true });


/* Previous */

prevMemory.addEventListener("click", () => {

    currentMemory--;

    if (currentMemory < 0) {
        currentMemory = memories.length - 1;
    }

    showMemory(currentMemory);

});


/* Next */

nextMemory.addEventListener("click", () => {

    currentMemory++;

    if (currentMemory >= memories.length) {
        currentMemory = 0;
    }

    showMemory(currentMemory);

});


/* البداية */

showMemory(0);