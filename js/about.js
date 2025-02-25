function toggleMoreText() {
    var moreText = document.getElementById("more-text");
    var moreBtn = document.getElementById("more-btn");

    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "block";
        moreBtn.textContent = "Less";
    } else {
        moreText.style.display = "none";
        moreBtn.textContent = "Read More";
    }
}