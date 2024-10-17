function toggleMoreText() {
    var moreText = document.getElementById("more-text");
    var moreBtn = document.getElementById("more-btn");

    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "block";
        moreBtn.textContent = "See Less";
    } else {
        moreText.style.display = "none";
        moreBtn.textContent = "More About";
    }
}
