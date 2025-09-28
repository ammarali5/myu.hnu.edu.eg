const logoutBtn = document.getElementById("log_out");

logoutBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});




const menuBtn = document.getElementById("menu-btn");
const navDrawer = document.getElementById("nav-side-bar");

menuBtn.addEventListener("click", () => {
  // toggle between hidden and visible
  if (navDrawer.style.transform === "translateX(0px)") {
    navDrawer.style.transform = "translateX(-256px)"; // hide
  } else {
    navDrawer.style.transform = "translateX(0px)"; // show
  }
});




const homeLink = document.getElementById("home-link"); // 🏠 Homee
const paymentsLink = document.getElementById("payments-link") // 💳 Online Payments

const homeSection = document.getElementById("home-section");
const paymentsSection = document.getElementById("payments-section");

function showSection(section) {
  // hide all sections
  homeSection.style.display = "none";
  paymentsSection.style.display = "none";
  
  // show the chosen section
  section.style.display = "block";
  navDrawer.style.transform = "translateX(-256px)"; // hide
}

// click events
homeLink.addEventListener("click", (e) => {
  e.preventDefault();
  showSection(homeSection);
});

paymentsLink.addEventListener("click", (e) => {
  e.preventDefault();
  showSection(paymentsSection);
});
