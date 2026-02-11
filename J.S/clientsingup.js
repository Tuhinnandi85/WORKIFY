function togglePass(icon) {
  const input = icon.previousElementSibling;
  if (input.type === "password") {
    input.type = "text";
    icon.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.replace("fa-eye-slash", "fa-eye");
  }
}

function toggleRoles() {
  const roles = document.getElementById("roles");
  roles.style.display = roles.style.display === "flex" ? "none" : "flex";
}