let html = "";
// function gets API data
async function getData() {
  let collections = await fetch("https://randomuser.me/api?results=3");
  let data = collections.json();
  return data;
}
// Function to convert and display data
async function displayData() {
  let data = await getData();
  data.results.forEach((item) => {
    // console.log(item);
    // console.log(
    // `${item['name'].title} - ${item['name'].first}`);
    let result = `
        <div class="card m-3 p-3 text-center" style="width:400px">
            <img class="rounded-circle w-50 mx-auto" src="${item["picture"].large}" alt="Card image">
            <div class="card-body">
            <p class="card-text">My name is</p>
            <h4 id="test" class="card-title">${item["name"].first} ${item["name"].last}</h4>

                <ul class="values_list horizontal_center" id="values_list">
                    <li>
                    <i onmouseover="show('My name is','${item['name'].first} ${item['name'].last}')" class="fa-solid fa-circle-user"></i>
                    </li>
                
                    <li>
                    <i onmouseover="show('My Email is','${item['email']}')" class="fa-solid fa-envelope"></i>
                    </li>
                
                    <li>
                    <i onmouseover="show('My Birthday is','${item['dob'].date}')" class="fa-solid fa-calendar-days"></i>
                    </li>
                
                    <li>
                    <i onmouseover="show('My address is','${item['location']['street'].number} ${item['location']['street'].name} ${item['location'].city}')" class="fa-solid fa-map-location-dot"></i>
                    </li>
                    
                    <li>
                    <i onmouseover="show('My Phone Number is','${item['cell']}')" class="fa-solid fa-phone"></i>
                    </li>
                </ul>
            </div>
        </div>
        `;
    html += result;
  });
  let container = document.querySelector(".container");
  container.innerHTML = html;
}
// calls function
displayData();

function show(text, content) {
    document.querySelector('.card-text').innerHTML = text;
    document.querySelector('.card-title').innerHTML = content;
}