const toggleBtn = document.querySelector(".toggle-btn");
const navListFirstChild = document.querySelector(".nav-list li:first-child")
const navList = document.getElementById("nav")

toggleBtn.addEventListener("click", () => {
    toggleBtn.style.display = "none";
    navList.style.display = "block"
});

navListFirstChild.addEventListener("click", () => {
    navList.style.display = "none"
    toggleBtn.style.display = "block";
})

