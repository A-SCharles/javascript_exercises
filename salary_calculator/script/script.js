

// Calculate Button
const calculate = document.getElementById('calculate');

calculate.addEventListener('click',()=>{
    var hours = document.getElementById('hours').value;
    var rate = document.getElementById('rate').value;
    var total = hours * rate;
    var display = document.getElementById('display').value;
    document.getElementById('display').innerHTML =
    "My salary is : R" + total;
})

// Reset Button
const reset = document.getElementById('reset');

reset.addEventListener('click',()=>{
    hours.value = '';
    rate.value = '';
    
    document.getElementById('display').innerHTML = "My salary is : R"
});