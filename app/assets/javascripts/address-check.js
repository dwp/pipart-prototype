document.getElementById('new-details-form').addEventListener('submit', function (e) {
  const postcodeInput = document.getElementById('postcode');
  const postcodeGroup = document.getElementById('postcode-group');
  const errorMessage = document.getElementById('postcode-error');

  const postcode = postcodeInput.value.trim();

  const ukPostcodeRegex = /^([A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}|GIR ?0AA)$/i;

  // Reset state
  postcodeGroup.classList.remove('govuk-form-group--error');
  errorMessage.style.display = 'none';

  if (!ukPostcodeRegex.test(postcode)) {
    e.preventDefault();

    // Add error styling
    postcodeGroup.classList.add('govuk-form-group--error');
    errorMessage.style.display = 'block';

    // Optional: add aria-describedby for accessibility
    postcodeInput.setAttribute('aria-describedby', 'postcode-error');

    // Focus field
    postcodeInput.focus();
  }
});