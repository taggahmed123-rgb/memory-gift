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
const letterTitle = document.querySelector("#letter h2");
const storyLabel = document.querySelector(".story-label");
const storyTitle = document.querySelector(".story-title");
const memoryCaption = document.querySelector(".memory-caption p");

const message = clientData.letterMessage;

storyLabel.textContent = clientData.storyLabel;
storyTitle.innerHTML = `
    ${clientData.storyTitleLine1}
    <br>
    <span class="story-title-line" dir="auto">
    ${clientData.storyTitleLine2}
    <span class="story-heart">♥</span>
</span>
`;
envelope.addEventListener("click", () => {

    letterTitle.textContent = clientData.letterTitle;

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
    memoryCaption.textContent = clientData.caption;
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

const memories = clientData.memories;

let currentMemory = 0;

const memoryCard = document.getElementById("memoryCard");
const memoryImage = document.getElementById("memoryImage");
const memoryMessage = document.getElementById("memoryMessage");

const prevMemory = document.getElementById("prevMemory");
const nextMemory = document.getElementById("nextMemory");

const memoriesSection = document.getElementById("memories");

memoriesSection.style.display = "none";

const memoryDotsContainer = document.getElementById("memoryDots");

const audioButton = document.getElementById("audioButton");
const audioButtonText = document.getElementById("audioButtonText");

if (clientData.audio && clientData.audio.file) {
    audioButton.style.display = "flex";
    audioButtonText.textContent = clientData.audio.buttonText || "";
}

const homeSection = document.querySelector(".home");
const audioSection = document.getElementById("audioSection");
const audioTitle = document.getElementById("audioTitle");
const audioLabel = document.getElementById("audioLabel");
const audioTrackName = document.getElementById("audioTrackName");
const audioPlayer = document.getElementById("audioPlayer");
const audioPlayButton = document.getElementById("audioPlayButton");
const backToMemories = document.getElementById("backToMemories");
backToMemories.addEventListener("click", () => {

    audioPlayer.pause();

    audioSection.style.display = "none";
    memoriesSection.style.display = "block";

});
const audioProgressBar = document.getElementById("audioProgressBar");
const audioProgress = document.querySelector(".audio-progress");
const audioProgressThumb = document.getElementById("audioProgressThumb");
let isDraggingAudio = false;
audioProgressThumb.addEventListener("pointerdown", () => {
    isDraggingAudio = true;

    audioProgressThumb.style.transform =
        "translate(-50%, -50%) scale(1.35)";
});
audioProgress.addEventListener("pointermove", (e) => {

    if (!isDraggingAudio) return;

    const rect = audioProgress.getBoundingClientRect();

    let position = e.clientX - rect.left;

    position = Math.max(0, Math.min(position, rect.width));

    const percentage = position / rect.width;

    audioPlayer.currentTime =
        percentage * audioPlayer.duration;

});
document.addEventListener("pointerup", () => {
    isDraggingAudio = false;

    audioProgressThumb.style.transform =
        "translate(-50%, -50%) scale(1)";
});
audioProgress.addEventListener("click", (e) => {

    const rect = audioProgress.getBoundingClientRect();

    const clickPosition = e.clientX - rect.left;

    const percentage = clickPosition / rect.width;

    audioPlayer.currentTime =
        percentage * audioPlayer.duration;

});
const audioCurrentTime = document.getElementById("audioCurrentTime");
const audioDuration = document.getElementById("audioDuration");

function formatTime(seconds) {
    if (!Number.isFinite(seconds)) return "0:00";

    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    return `${minutes}:${secs.toString().padStart(2, "0")}`;
}

audioPlayer.addEventListener("loadedmetadata", () => {
    audioDuration.textContent = formatTime(audioPlayer.duration);
});

audioPlayer.addEventListener("timeupdate", () => {

    audioCurrentTime.textContent =
        formatTime(audioPlayer.currentTime);

    if (audioPlayer.duration) {
        const progress =
            (audioPlayer.currentTime / audioPlayer.duration) * 100;

        audioProgressBar.style.width = `${progress}%`;
        audioProgressThumb.style.left = `${progress}%`;
    }
});

audioPlayer.src = clientData.audio.file;

audioPlayButton.addEventListener("click", () => {
    audioPlayer.addEventListener("ended", () => {
    audioPlayButton.classList.remove("playing");
    audioProgressBar.style.width = "0%";
audioProgressThumb.style.left = "0%";
audioCurrentTime.textContent = "0:00";
});

    if (audioPlayer.paused) {
        audioPlayer.play();
        audioPlayButton.classList.add("playing");
    } else {
        audioPlayer.pause();
        audioPlayButton.classList.remove("playing");
    }

});

audioButton.addEventListener("click", () => {

    homeSection.style.display = "none";

    memoriesSection.style.display = "none";

    audioSection.style.display = "flex";

    audioTitle.textContent = clientData.audio.title || "";
    audioTrackName.textContent = clientData.audio.trackName || "";
    audioLabel.textContent = clientData.audio.eyebrow;
    audioPlayer.src = clientData.audio.file;

});


function showMemory(index) {

    currentMemory = index;

    memoryCard.classList.remove("flipped");

    memoryImage.src = memories[index].image;

    memoryMessage.textContent = memories[index].message;

    memoryDotsContainer.innerHTML = "";

memories.forEach((memory, i) => {
    const dot = document.createElement("span");

    if (i === index) {
        dot.classList.add("active");
    }

    memoryDotsContainer.appendChild(dot);
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

const giftTitle = document.getElementById("giftTitle");

if (giftTitle && clientData.giftTitle) {
    giftTitle.textContent = clientData.giftTitle;
}