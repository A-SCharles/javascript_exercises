function calculate() {
  const gender = document.querySelectorAll('input[name="gender"]');
  let selectedGender;

  //const display = document.getElementById('display')

  for (const radioButton of gender) {
    if (radioButton.checked) {
      selectedGender = radioButton.value;
      break;
    }
  }
  const age = document.getElementById("age").value;
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  let bmi = weight / (height * height);

  document.getElementById("display").innerHTML = `
  <p>Your Gender is: ${selectedGender}</p>
    <p>Your BMI is: ${bmi}</p> 
`;
}
