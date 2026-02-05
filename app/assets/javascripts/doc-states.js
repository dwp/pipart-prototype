const bundleStart = document.getElementById("bundle-start");
const bundleInprogress = document.getElementById("bundle-inprogress");
const appealStart = document.getElementById("appeal-start");

const bundleStartLink = document.getElementById("bundle-start-link");
const bundleInprogressLink = document.getElementById("bundle-inprogress-link");

bundleStartLink.addEventListener("click", (event) => {
  event.preventDefault();
  bundleStart.style.display = 'none';
  bundleInprogress.style.display = 'block';
  appealStart.style.display = 'block';
})