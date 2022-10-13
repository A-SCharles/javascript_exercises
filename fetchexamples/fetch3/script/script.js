let html = "";
// function gets API data
async function getData() {
  let collections = await fetch("https://randomuser.me/api?results=18");
  let data = collections.json();
  return data;
}
// Function to convert and display data
async function displayData() {
  let data = await getData();
  data.results.forEach((item, index) => {
    let result = `
        <div id="${index}" class="card m-3 p-3 mx-auto text-center" style="width:380px">
            <img class="rounded-circle w-50 mx-auto" src="${item["picture"].large}" alt="Card image">
            <div class="card-body">
            <p class="card-text">My Name is</p>
            <h4 id="test" class="card-title">${item["name"].first} ${item["name"].last}</h4>

                <ul class="values_list horizontal_center" id="values_list">
                    <li>
                    <i onmouseover="show('Name', '${item['name'].first} ${item['name'].last}', ${index})" class="fa-solid fa-circle-user"></i>
                    </li>
                
                    <li>
                    <i onmouseover="show('Email','${item['email']}', ${index})" class="fa-solid fa-envelope"></i>
                    </li>
                
                    <li>
                    <i onmouseover="show('Birthday','${item['dob'].date}', ${index})" class="fa-solid fa-calendar-days"></i>
                    </li>
                
                    <li>
                    <i onmouseover="show('Address','${item['location']['street'].number} ${item['location']['street'].name} ${item['location'].city}', ${index})" class="fa-solid fa-map-location-dot"></i>
                    </li>
                    
                    <li>
                    <i onmouseover="show('Phone Number','${item['cell']}', ${index})" class="fa-solid fa-phone"></i>
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

function show(key, value, index) {
  // loops through API data so if any more results are added it'll still work
  for (var i = index; i <= index; i++ ) {
    if (index == i) {
      document.querySelectorAll('.card .card-title')[i].textContent = value ;
      document.querySelectorAll('.card .card-text')[i].textContent = `My ${key} is`;
    }
  }
}
