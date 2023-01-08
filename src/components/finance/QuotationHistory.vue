<script setup>
import { onMounted } from "vue";
import Chart from "chart.js/auto";

onMounted(async () => {
  (async function () {
    const labels = ["janeiro", "fevereiro", "março"];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Dataset 1",
          data: [1, 20, 30, 12, 5, 3, 51, 20],
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgb(255,255,255)",
        },
      ],
    };

    new Chart(document.getElementById("acquisitions"), {
      type: "line",
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Chart.js Line Chart",
          },
        },
      },
    });
  })();
});
</script>
<template>
  <div style="width: 800px"><canvas id="acquisitions"></canvas></div>
</template>
