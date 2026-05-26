// TABLE

const bundleStartAdd = document.getElementById("bundle-start-link");
const bundleStart = document.getElementById("bundle-start");
const caseDocSection = document.getElementById("case-doc-section");
const appealStart = document.getElementById("appeal-start");

bundleStartAdd.addEventListener("click", (event) => {
  event.preventDefault();
  bundleStart.style.display = 'none';
  caseDocSection.style.display = 'block';
  appealStart.style.display = 'block';
})