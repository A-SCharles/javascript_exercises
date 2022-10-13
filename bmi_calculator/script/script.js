let gender = document.querySelectorAll('input[name="gender"]');
function calculate() {
  let selectedGender;

  //const display = document.getElementById('display')

  for (const radioButton of gender) {
    if (radioButton.checked) {
      selectedGender = radioButton.value;
      break;
  }
  }
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);
  let category;

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 25) {
    category = "Healthy weight";
  } else if (bmi > 25 && bmi <= 30) {
    category = "Overweight";
  } else if (bmi > 30 && bmi <= 35) {
    category = "Obese Class 1";
  } else if (bmi > 35 && bmi <= 40) {
    category = "Obese Class 2";
  } else if (bmi > 40) {
    category = "Obese Class 3";
  }

  document.getElementById("display").innerHTML = `
  <p>Your Gender is: ${selectedGender}</p>
  <p>Your BMI is: ${bmi}</p> 
  <p>You are: ${category}</p>
`;
}

const btnClear = document.getElementById('clear');
btnClear.addEventListener('click', () => {
  // for (radioButton of gender)
  document.getElementById('age').value = ''
  document.getElementById('Male').checked = false
  document.getElementById('Female').checked = false
  document.getElementById('weight').value = ''
  document.getElementById('height').value = ''
  document.getElementById('display').innerHTML = '';
})