document.addEventListener("DOMContentLoaded", () => {
    const gridSize = 5;
    const gridContainer = document.getElementById("grid-container");

    // Create the initial grid
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.addEventListener("click", () => toggleCell(i, j));
            gridContainer.appendChild(cell);
        }
    }

    function toggleCell(row, col) {
        const cellIndex = row * gridSize + col;
        const cell = gridContainer.children[cellIndex];
        cell.classList.toggle("active");

        // Toggle surrounding cells
        toggleAdjacentCell(row - 1, col);
        toggleAdjacentCell(row + 1, col);
        toggleAdjacentCell(row, col - 1);
        toggleAdjacentCell(row, col + 1);
    }

    function toggleAdjacentCell(row, col) {
        if (row >= 0 && row < gridSize && col >= 0 && col < gridSize) {
            const cellIndex = row * gridSize + col;
            const cell = gridContainer.children[cellIndex];
            cell.classList.toggle("active");
        }
    }
});
