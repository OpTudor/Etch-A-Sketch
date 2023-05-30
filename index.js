const gridContainer = document.getElementById("grid-container");
const button = document.getElementById("button");
button.addEventListener("click", changeSize);
function removeGrid() {
  gridContainer.innerHTML = "";
}
function changeSize() {
  let size = prompt("Grid size:");
  if (size > 99) {
    alert("Maximum size is 99. Please choose a smaller size.");
    changeSize();
  } else {
    removeGrid();
    createGrid(size);
  }
}
function changeColor(e) {
  e.target.style.backgroundColor = "black";
}

function createGrid(x) {
  gridContainer.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${x}, 1fr)`;
  for (let row = 1; row <= x; row++)
    for (let column = 1; column <= x; column++) {
      let cell = document.createElement("div");
      cell.addEventListener("mouseover", changeColor);
      cell.className = "cell";
      gridContainer.appendChild(cell);
    }
}
createGrid(16);
