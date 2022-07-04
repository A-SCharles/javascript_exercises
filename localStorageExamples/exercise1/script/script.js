// creating array of objects in localstorage
let details = JSON.parse(localStorage.getItem("details"))
  ? JSON.parse(localStorage.getItem("details"))
  : [
      {
        name: "Charles",
        color: "rgb(0,0,255)",
      },
    ];



// Adding data to localstorage
function addRecord() {
  details.push({
    name: document.getElementById("fName").value,
    color: document.getElementById("color").value,
  });
  localStorage.setItem("details", JSON.stringify(details));
}

document.querySelector("#add").addEventListener("click", addRecord);

(function loadData() {
  console.table(details[0].name);
})();

(function change() {
  let i = parseInt(Object.keys(details).length - 1);
  let c = details[i].color;
  document.querySelector(".change").style = `background-color: ${c}`;
  console.log(c);
})();
