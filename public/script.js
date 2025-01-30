
let currentStep = 0;
const formSteps = document.querySelectorAll('.form-step');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');

// Show current step
function showStep(step) {
  formSteps.forEach((formStep, index) => {
    formStep.classList.toggle('active', index === step);
  });

  prevBtn.disabled = step === 0;
  nextBtn.style.display = step === formSteps.length - 1 ? 'none' : 'inline-block';
  submitBtn.style.display = step === formSteps.length - 1 ? 'inline-block' : 'none';
}

// Next button click
nextBtn.addEventListener('click', () => {
  if (currentStep < formSteps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
});

// Previous button click
prevBtn.addEventListener('click', () => {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
});

// Show description for "Born Again"
document.getElementById('bornAgain').addEventListener('change', (e) => {
  const description = document.getElementById('bornAgainDescription');
  description.style.display = e.target.value === 'yes' ? 'block' : 'none';
});

