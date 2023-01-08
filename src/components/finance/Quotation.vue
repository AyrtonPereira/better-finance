<script setup>
import { computed } from "vue";
const props = defineProps({
  name: { type: String, required: true },
  variation: { type: Number, required: true },
  value: { type: Number, required: true },
  type: { type: String, required: true },
  coin: { type: String },
});

const variationType = computed(() => {
  return props.variation > 0 ? "bg-green-500" : "bg-red-500";
});

const valueParsed = computed(() => {
  return props.value?.toFixed(2) || 0;
});

const coinUsed = computed(() => {
  console.log("coin", props.coin);
  return props.type == "bitcoin" ? props.coin[0] : "R$";
});
</script>
<template>
  <div
    v-if="props.name"
    class="flex flex-col items-center text-white bg-black/70 rounded py-2 px-4 text-center justify-around cursor-pointer hover:shadow-2xl hover:bg-black/80 transition-all"
    @click="$emit('clicked')"
  >
    <p class="mt-3 mb-2">
      <span :class="`${variationType} px-2 py-1 rounded text-sm md:text-base`"
        >{{ props.variation }} %</span
      >
    </p>
    <p class="font-weight-normal text-white mb-2 mt-3 text-lg md:text-xl">
      {{ type == "stocks" ? "" : coinUsed }} {{ valueParsed }}
    </p>
    <p class="text-light text-uppercase font-13 font-weight-bold text-xs">
      {{ name }}
    </p>
  </div>
</template>
