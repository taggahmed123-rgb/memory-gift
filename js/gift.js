const giftBox = document.getElementById("giftBox");

giftBox.addEventListener("click", () => {

    giftBox.style.transform = "scale(0.95)";

    setTimeout(() => {
        giftBox.style.transform = "scale(1.05)";
    }, 120);

    setTimeout(() => {
        giftBox.style.transform = "scale(1)";
    }, 250);

});