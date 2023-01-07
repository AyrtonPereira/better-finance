<script setup>
import { computed } from "vue";
const props = defineProps({
  name: { type: String, required: true },
  variation: { type: Number, required: true },
  value: { type: Number, required: true },
  type: { type: String, required: true },
});

const variationType = computed(() => {
  return props.variation > 0 ? "bg-green-500" : "bg-red-500";
});

const valueParsed = computed(() => {
  return props.value?.toFixed(2) || 0;
});
</script>
<template>
  <div
    class="flex flex-col items-center text-white bg-black/70 rounded py-2 px-4 text-center justify-around"
  >
    <p class="mt-3 mb-2">
      <span :class="`${variationType} px-2 py-1 rounded text-base`"
        >{{ props.variation }} %</span
      >
    </p>
    <p class="font-weight-normal text-white mb-2 mt-3 text-xl">
      {{ type == "currency" ? "R$ " : "" }} {{ valueParsed }}
    </p>
    <p class="text-light text-uppercase font-13 font-weight-bold text-xs">
      {{ name }}
    </p>
  </div>
</template>
