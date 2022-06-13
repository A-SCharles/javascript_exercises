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
        <div class="card m-3 p-3" style="width:400px">
            <img class="rounded-circle w-50 mx-auto" src="${item["picture"].large}" alt="Card image">
            <div class="card-body">
                <h4 id="test" class="card-title">${item["name"].first} - ${item["name"].last}</h4>
                <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                <a href="#" class="btn btn-primary">See Profile</a>

                <p id="user_title"></p>
                <p id="user_value"></p>

                <ul class="values_list horizontal_center" id="values_list">
                    <li data-title="Hi, My name is" data-value="Aiden Carpenter" data-label="name" class="">
                    <i onmouseover="show('my name is','${item['name'].first} ${item['name'].last}')" class="fa-solid fa-circle-user"></i>
                    </li>
                
                    <li data-title="My email address is" data-value="aiden.carpenter@example.com" data-label="email" data-caps="false" class="">
                    <i onmouseover="show('my name is','${item['name'].first} ${item['name'].last}')" class="fa-solid fa-envelope"></i>
                    </li>
                
                    <li data-title="My birthday is" data-value="6/7/1975" data-label="birthday" class="">
                    <i onmouseover="show('my name is','${item['name'].first} ${item['name'].last}')" class="fa-solid fa-calendar-days"></i>
                    </li>
                
                    <li data-title="My address is" data-value="2590 Lakeshore Rd" data-label="location" class="">
                    <i onmouseover="show('my name is','${item['name'].first} ${item['name'].last}')" class="fa-solid fa-map-location-dot"></i>
                    </li>
                    
                    <li data-title="My phone number is" data-value="(927)-208-3044" data-label="phone" class="">
                    <i onmouseover="show('my name is','${item['name'].first} ${item['name'].last}')" class="fa-solid fa-phone"></i>
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