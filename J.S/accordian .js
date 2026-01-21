
const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
  header.addEventListener("click", () => {
    const body = header.nextElementSibling;
    const btn = header.querySelector(".toggle");

    if (body.style.display === "block") {
      body.style.display = "none";
      btn.textContent = "+";
    } else {
      document.querySelectorAll(".accordion-body").forEach(b => b.style.display = "none");
      document.querySelectorAll(".toggle").forEach(t => t.textContent = "+");

      body.style.display = "block";
      btn.textContent = "-";
    }
  });
});