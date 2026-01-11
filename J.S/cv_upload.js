const uploadBox = document.querySelector(".upload-content");
const fileInput = document.getElementById("fileInput");

uploadBox.addEventListener("dragover", (e) => {
    e.preventDefault();
    uploadBox.style.background = "#eee";
});

uploadBox.addEventListener("dragleave", () => {
    uploadBox.style.background = "#fff";
});

uploadBox.addEventListener("drop", (e) => {
    e.preventDefault();
    uploadBox.style.background = "#fff";
    fileInput.files = e.dataTransfer.files;
});