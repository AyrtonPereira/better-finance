<script setup>
import { reactive } from "vue";
import Quotation from "@/components/finance/Quotation.vue";
import QuotationHistoryVue from "@/components/finance/QuotationHistory.vue";
import FinanceService from "@/service/FinanceService";

const props = defineProps({
  title: { type: String, required: true },
  label: { type: String, required: true },
  type: { type: String, required: true },
  quotationArray: { type: Array, required: true },
  quotationObject: { type: Object, required: true },
  lastUpdate: { type: String, required: true },
});

const state = reactive({
  history: {},
});

const seeQuotationHistory = async (name) => {
  state.history = {};
  state.history = await FinanceService.getQuotationHistory(props.type, name);
};
</script>
<template>
  <div class="flex flex-col bg-indigo-400 rounded p-4 drop-shadow-xl">
    <div
      class="bg-black/80 rounded text-white text-center p-2 mb-5 flex flex-col"
    >
      <h1 class="text-xl md:text-2xl lg:text-3xl font-bold">
        {{ props.title }}
      </h1>
      <span class="text-sm md:text-base lg:text-lg mt-1">{{
        props.label
      }}</span>
      <span class="text-xs">Última atualização: {{ props.lastUpdate }}</span>
    </div>
    <div>
      <div v-if="props.quotationArray" class="flex flex-wrap justify-center">
        <Quotation
          v-for="(quotation, name) in props.quotationArray"
          v-key="quotation[quotationObject.name]"
          :name="quotation[quotationObject.name]"
          :value="quotation[quotationObject.value]"
          :variation="quotation[quotationObject.variation]"
          :coin="quotation.format || ''"
          class="mx-2 my-2 w-48"
          :type="props.type"
          @clicked="seeQuotationHistory(name)"
        />
      </div>
      <div v-else class="flex items-center justify-center p-4">
        <span class="text-xl lg:text-2xl text-white"
          >Nenhuma informação para ser exibida</span
        >
      </div>
    </div>

    <div class="flex justify-center my-3">
      <QuotationHistoryVue
        v-if="state.history.values"
        :quotationType="props.type"
        :description="state.history.name"
        :labels="state.history.time"
        :values="state.history.values"
      />
    </div>
  </div>
</template>
