<script setup>
import { onMounted } from "vue";
import Chart from "chart.js/auto";

const props = defineProps({
  labels: { type: Array, required: true },
  values: { type: Array, required: true },
  quotationType: { type: String, required: true },
  description: { type: String, required: true },
});

onMounted(async () => {
  const data = {
    labels: props.labels,
    datasets: [
      {
        label: props.description,
        data: props.values,
        fill: false,
        color: "#fff",
      },
    ],
  };

  new Chart(document.getElementById(`${props.quotationType}-chart`), {
    type: "line",
    data: data,
    options: {
      plugins: {
        legend: {
          position: "top",
        },
      },
      layout: {
        padding: 8,
      },
    },
  });
});
</script>
<template>
  <div class="flex w-full md:w-3/4 lg:w-1/2">
    <canvas class="bg-white/90 rounded" :id="`${props.quotationType}-chart`">
    </canvas>
  </div>
</template>
