const faqHeaders = document.querySelectorAll(".faq-header");

faqHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const body = header.nextElementSibling;
    const btn = header.querySelector(".faq-toggle");

    if (body.style.display === "block") {
      body.style.display = "none";
      btn.textContent = "+";
    } else {
      document.querySelectorAll(".faq-body").forEach(b => b.style.display = "none");
      document.querySelectorAll(".faq-toggle").forEach(t => t.textContent = "+");

      body.style.display = "block";
      btn.textContent = "-";
    }
  });
});