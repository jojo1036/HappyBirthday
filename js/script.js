document.addEventListener("DOMContentLoaded", function () {
    const coverPage = document.getElementById("coverPage");
    const openPageButton = document.getElementById("openPageButton");
    const videoPage = document.getElementById("videoPage");
    const surpriseButton = document.getElementById("surpriseButton");
    const surpriseContent = document.getElementById("surpriseContent");
    const cardPage = document.getElementById("cardPage");
    const openCardButton = document.getElementById("openCardButton");
    const cardContent = document.getElementById("cardContent");

    openPageButton.addEventListener("click", function () {
        coverPage.style.display = "none";
        videoPage.style.display = "block";
    });

    const video = videoPage.querySelector("video");
    video.addEventListener("ended", function () {
        videoPage.style.display = "none";
        cardPage.style.display = "block"; // Corrected from "interactivePage"
    });

    surpriseButton.addEventListener("click", function () {
        surpriseContent.style.display = "block";
    });

    openCardButton.addEventListener("click", function () {
        cardContent.style.display = "block";
    });
});
