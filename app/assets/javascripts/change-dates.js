const outcomeDay = document.getElementById("outcome-day");
const outcomeMonth = document.getElementById("outcome-month");
const outcomeYear = document.getElementById("outcome-year");
const reconsiderationDay = document.getElementById("reconsideration-day");
const reconsiderationMonth = document.getElementById("reconsideration-month");
const reconsiderationYear = document.getElementById("reconsideration-year");
const appealRequestDay = document.getElementById("appeal-request-day");
const appealRequestMonth = document.getElementById("appeal-request-month");
const appealRequestYear = document.getElementById("appeal-request-year");
const changeDates = document.getElementById("change-dates");
const revertDates = document.getElementById("revert-dates");

changeDates.addEventListener("click", (event) => {
  revertDates.style.display = 'block';
  changeDates.style.display = 'none';
  outcomeDay.disabled = false;
  outcomeMonth.disabled = false;
  outcomeYear.disabled = false;
  reconsiderationDay.disabled = false;
  reconsiderationMonth.disabled = false;
  reconsiderationYear.disabled = false;
  appealRequestDay.disabled = false;
  appealRequestMonth.disabled = false;
  appealRequestYear.disabled = false;
})

revertDates.addEventListener("click", (event) => {
  revertDates.style.display = 'none';
  changeDates.style.display = 'block';
  outcomeDay.disabled = true;
  outcomeMonth.disabled = true;
  outcomeYear.disabled = true;
  reconsiderationDay.disabled = true;
  reconsiderationMonth.disabled = true;
  reconsiderationYear.disabled = true;
  appealRequestDay.disabled = true;
  appealRequestMonth.disabled = true;
  appealRequestYear.disabled = true;
})
