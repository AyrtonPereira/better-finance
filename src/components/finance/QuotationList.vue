<script setup>
import Quotation from "@/components/finance/Quotation.vue";
const props = defineProps({
  title: { type: String, required: true },
  label: { type: String, required: true },
  type: { type: String, required: true },
  quotationArray: { type: Array, required: true },
  quotationObject: { type: Object, required: true },
  lastUpdate: { type: String, required: true },
});
</script>
<template>
  <div class="flex flex-col bg-indigo-400 rounded p-4 drop-shadow-xl">
    <div
      class="bg-black/80 rounded text-white text-center p-2 mb-5 flex flex-col"
    >
      <h1 class="text-3xl font-bold">{{ props.title }}</h1>
      <span class="text-lg">{{ props.label }}</span>
      <span class="text-xs">Última atualização: {{ props.lastUpdate }}</span>
    </div>
    <div v-if="props.quotationArray" class="flex flex-wrap justify-center">
      <Quotation
        v-for="currency in props.quotationArray"
        v-key="currency[quotationObject.name]"
        :name="currency[quotationObject.name]"
        :value="currency[quotationObject.value]"
        :variation="currency[quotationObject.variation]"
        class="mx-2 my-2 w-48"
        :type="props.type"
      />
    </div>
    <div v-else class="flex items-center justify-center p-4">
      <span class="text-2xl text-white"
        >Nenhuma informação para ser exibida</span
      >
    </div>
  </div>
</template>
