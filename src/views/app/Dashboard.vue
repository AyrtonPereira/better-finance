<script setup>
import { onMounted, reactive } from "vue";
import Header from "@/components/layout/Header.vue";
import QuotationList from "@/components/finance/QuotationList.vue";

const state = reactive({
  finance: {
    by: "default",
    valid_key: false,
    results: {
      currencies: {
        source: "BRL",
        USD: {
          name: "Dollar",
          buy: 5.2253,
          sell: 5.2253,
          variation: 0.0,
        },
        EUR: {
          name: "Euro",
          buy: 5.563,
          sell: 5.5617,
          variation: 0.001,
        },
        GBP: {
          name: "Pound Sterling",
          buy: 6.3202,
          sell: null,
          variation: 0.001,
        },
        ARS: {
          name: "Argentine Peso",
          buy: 0.0292,
          sell: null,
          variation: -0.166,
        },
        CAD: {
          name: "Canadian Dollar",
          buy: 3.887,
          sell: null,
          variation: 0.001,
        },
        AUD: {
          name: "Australian Dollar",
          buy: 3.5971,
          sell: null,
          variation: -0.0,
        },
        JPY: {
          name: "Japanese Yen",
          buy: 0.0396,
          sell: null,
          variation: -0.11,
        },
        CNY: {
          name: "Renminbi",
          buy: 0.7641,
          sell: null,
          variation: 0.0,
        },
        BTC: {
          name: "Bitcoin",
          buy: 93858.484,
          sell: 93858.484,
          variation: 0.109,
        },
      },
      stocks: {
        IBOVESPA: {
          name: "BM&F BOVESPA",
          location: "Sao Paulo, Brazil",
          points: 108941.63,
          variation: 1.21,
        },
        IFIX: {
          name: "Índice de Fundos de Investimentos Imobiliários B3",
          location: "Sao Paulo, Brazil",
          points: 2847.51,
          variation: -0.29,
        },
        NASDAQ: {
          name: "NASDAQ Stock Market",
          location: "New York City, United States",
          points: 10569.29,
          variation: 2.56,
        },
        DOWJONES: {
          name: "Dow Jones Industrial Average",
          location: "New York City, United States",
          points: 33624.9,
          variation: 2.11,
        },
        CAC: {
          name: "CAC 40",
          location: "Paris, French",
          points: 6860.95,
          variation: 1.47,
        },
        NIKKEI: {
          name: "Nikkei 225",
          location: "Tokyo, Japan",
          points: 25973.85,
          variation: 0.59,
        },
      },
      available_sources: ["BRL"],
      taxes: [],
    },
    execution_time: 0.0,
    from_cache: true,
  },
});

onMounted(() => {
  console.log("Mountou");
});
</script>
<template>
  <div>
    <Header />
    <div class="p-4">
      <QuotationList
        class="mb-3"
        title="Moedas"
        label="Cotações dos valores de moedas"
        type="currency"
        :quotationArray="state.finance.results.currencies"
        :quotationObject="{
          name: 'name',
          value: 'buy',
          variation: 'variation',
        }"
      />
      <QuotationList
        class="mb-3"
        title="Ações"
        label="Veja as bases de ações ao redor do mundo"
        type="stocks"
        :quotationArray="state.finance.results.stocks"
        :quotationObject="{
          name: 'name',
          value: 'points',
          variation: 'variation',
        }"
      />
    </div>
  </div>
</template>
