// TABLE

const bundleStartTable = document.getElementById("bundle-start-table");
const bundleInprogressTable = document.getElementById("bundle-inprogress-table");
const appealStartTable = document.getElementById("appeal-start-table");
const bundleStartLinkTable = document.getElementById("bundle-start-link-table");

bundleStartLinkTable.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("TEST")
  bundleStartTable.style.display = 'none';
  bundleInprogressTable.style.display = 'table-row';
  appealStartTable.style.display = 'table-row';
})