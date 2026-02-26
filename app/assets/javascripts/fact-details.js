const generateTextBtn = document.getElementById("generate-text-btn");
const originalText= document.getElementById("original-text");
const generatedSummary= document.getElementById("generated-summary-form");
const generatedSummaryDelete = document.getElementById("generated-summary-delete");
const reviewFact = document.getElementById("reviewFact");
const reviewFact2 = document.getElementById("reviewFact-2");
const includeScheduleBox = document.getElementById("include-schedule-box");

generateTextBtn.addEventListener("click", (event) => {
  generatedSummary.style.display = 'block';
  generateTextBtn.style.display = 'none';
  originalText.disabled = true;
})

generatedSummaryDelete.addEventListener("click", (event) => {
  event.preventDefault();
  generatedSummary.style.display = 'none';
  generateTextBtn.style.display = 'block';
  originalText.disabled = false;
})

reviewFact.addEventListener("click", (event) => {
  includeScheduleBox.style.display = 'block';
})

reviewFact2.addEventListener("click", (event) => {
  includeScheduleBox.style.display = 'none';
})