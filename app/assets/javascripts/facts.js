const showFiltersBtn = document.getElementById("show-filters");
const hideFiltersBtn = document.getElementById("hide-filters");
const filterOptions = document.getElementById("filter-box-2");

showFiltersBtn.addEventListener("click", (event) => {
  showFiltersBtn.style.display = 'none';
  hideFiltersBtn.style.display = 'block';
  filterOptions.style.display = 'block';
})

hideFiltersBtn.addEventListener("click", (event) => {
  showFiltersBtn.style.display = 'block';
  hideFiltersBtn.style.display = 'none';
  filterOptions.style.display = 'none';
})

function isAnyFact1Selected() {
  return [...document.querySelectorAll('input[type="checkbox"][name="fact-1-select"]')]
    .some(cb => cb.checked);
}

function handleFact1Change() {
  if (isAnyFact1Selected()) {
    document.getElementById("facts-multi-include").disabled = false;
    document.getElementById("facts-multi-reject").disabled = false;
  } else {
    document.getElementById("facts-multi-include").disabled = true;
    document.getElementById("facts-multi-reject").disabled = true;
  }
}


document.addEventListener('change', (e) => {
  if (
    e.target.matches &&
    e.target.matches('input[type="checkbox"][name="fact-1-select"]')
  ) {
    handleFact1Change();
  }
});
