<script setup>
import { onMounted, computed } from "vue";
import QuotationList from "@/components/finance/QuotationList.vue";
import store from "@/store";
import FinanceService from "@/service/FinanceService";

FinanceService.initiateStore();

const quotations = computed(() => {
  return store.getters["finance/getQuotations"];
});

const filterQuotations = (quotationList) => {
  const listKeys = Object.keys(quotationList);
  const newQuotationList = {};

  for (const quotation of listKeys) {
    if (quotationList[quotation].name)
      newQuotationList[quotation] = quotationList[quotation];
  }
  return newQuotationList;
};

onMounted(async () => {
  FinanceService.getFinanceData();
  setInterval(() => {
    FinanceService.getFinanceData();
  }, 120000);
});
</script>
<template>
  <div>
    <div class="p-4">
      <QuotationList
        v-if="quotations.currencies"
        class="mb-3"
        title="Moedas"
        label="Cotações dos valores de moedas"
        type="currencies"
        :lastUpdate="quotations.currencies[0].time"
        :quotationArray="filterQuotations(quotations.currencies[0].data)"
        :quotationObject="{
          name: 'name',
          value: 'buy',
          variation: 'variation',
        }"
      />
      <QuotationList
        v-if="quotations.stocks"
        class="mb-3"
        title="Ações"
        label="Veja as bases de ações ao redor do mundo"
        type="stocks"
        :lastUpdate="quotations.stocks[0].time"
        :quotationArray="filterQuotations(quotations.stocks[0].data)"
        :quotationObject="{
          name: 'name',
          value: 'points',
          variation: 'variation',
        }"
      />
      <QuotationList
        v-if="quotations.bitcoin"
        class="mb-3"
        title="Bitcoin"
        label="Veja as cotações de Bitcoin"
        type="bitcoin"
        :lastUpdate="quotations.bitcoin[0].time"
        :quotationArray="filterQuotations(quotations.bitcoin[0].data)"
        :quotationObject="{
          name: 'name',
          value: 'last',
          variation: 'variation',
        }"
      />
    </div>
  </div>
</template>
