"use strict";

function fetchDataAndRenderChart() {
  fetch("http://localhost:3000/visualize")
    .then((response) => response.json())
    .then((fetchedData) => {
      // Context for the chart
      const ctx = document.getElementById("myChart");
      new Chart(ctx, fetchedData);
    })
    .catch((error) => console.log("Error fetching data: ", error));
}

window.addEventListener("DOMContentLoaded", () => {
  fetchDataAndRenderChart();
});
