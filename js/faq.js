document.addEventListener("DOMContentLoaded", function () {
  
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling; // Get the next sibling (the answer)
      answer.classList.toggle("open"); // Toggle the 'open' class
    });
  });
});