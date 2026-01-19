const menuBtn = document.getElementById("menuBtn");
    const navbarMenu = document.getElementById("navbarMenu");
    const menuIcon = menuBtn.querySelector("i");

    menuBtn.addEventListener("click", () => {
      navbarMenu.classList.toggle("active");

      // Change icon
      if (navbarMenu.classList.contains("active")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
      } else {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
      }
    });

    // Close menu when clicking any nav link
    document.querySelectorAll(".navlink").forEach((link) => {
      link.addEventListener("click", () => {
        navbarMenu.classList.remove("active");
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
      });
    });