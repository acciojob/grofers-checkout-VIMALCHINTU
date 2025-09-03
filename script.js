// Select all cells with class="price"
let prices = document.querySelectorAll(".price");
let sum = 0;

// Calculate the total
prices.forEach(cell => {
  sum += parseInt(cell.textContent, 10);
});

// Get the table
let table = document.getElementById("newtable");

// Create a new row
let newRow = document.createElement("tr");
newRow.classList.add("total-row");

// Create "Total" label cell
let totalLabel = document.createElement("td");
totalLabel.textContent = "Total";

// Create total value cell
let totalValue = document.createElement("td");
totalValue.textContent = sum;

// Append cells into the row
newRow.appendChild(totalLabel);
newRow.appendChild(totalValue);

// Append row into the table
table.appendChild(newRow);
