// requesting API
async function getData() {
    let collections = await fetch("https://pokeapi.co/api/v2/");
    let data = collections.json();
    return data;
  }

  async function displayData() {
    let data = await getData();
    data.results.forEach((item) => {
        console.log(`${item[]}`)
    //   let result = `

    //   `;
    html += result;
  });
  let container = document.querySelector(".container");
  container.innerHTML = html;
}