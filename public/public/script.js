document.getElementById('maritalStatus').addEventListener('change', function() {
  document.getElementById('marriedSection').style.display = this.value === 'married' ? 'block' : 'none';
});

document.getElementById('bornAgain').addEventListener('change', function() {
  const details = document.getElementById('bornAgainDetails');
  details.style.display = this.value === 'yes' ? 'block' : 'none';
});

document.getElementById('baptised').addEventListener('change', function() {
  const details = document.getElementById('baptisedDetails');
  details.style.display = this.value === 'yes' ? 'block' : 'none';
});

document.getElementById('servingDepartment').addEventListener('change', function() {
  const details = document.getElementById('servingDepartmentDetails');
  details.style.display = this.value === 'no' ? 'block' : 'none';
});


