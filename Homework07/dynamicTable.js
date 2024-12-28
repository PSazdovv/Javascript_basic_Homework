const createTableButton = document.getElementById("createTableButton");

createTableButton.addEventListener("click", createDynamicTable);

function createDynamicTable() {
  const numRows = parseInt(document.getElementById("numRows").value);
  const numColumns = parseInt(document.getElementById("numColumns").value);

  if (isNaN(numRows) || numRows <= 0 || isNaN(numColumns) || numColumns <= 0) {
    alert("Please enter valid positive numbers for rows and columns.");
    return;
  }

  const table = document.createElement("table");

  for (let i = 0; i < numRows; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < numColumns; j++) {
      const cell = document.createElement("td");
      cell.textContent = `Row-${i + 1} Column-${j + 1}`;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  tableContainer.appendChild(table);
}
