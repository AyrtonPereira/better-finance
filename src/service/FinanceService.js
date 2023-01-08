import FinanceModel from "@/model/FinanceModel";
import store from "@/store";

class FinanceService {
  #quotationTypes = ["currencies", "stocks", "bitcoin"];
  initiateStore() {
    store.dispatch("finance/initiateStore");
  }
  async getFinanceData() {
    const request = await FinanceModel.getFinanceData();
    if (request.results) {
      const time = `${new Date().getHours()}:${new Date().getMinutes()}`;
      const quotationObjects = request.results;
      this.#quotationTypes.forEach((type) => {
        store.dispatch("finance/addQuotation", {
          type,
          time,
          data: quotationObjects[type],
        });
      });
      const quotations = await store.getters["finance/getQuotations"];
      localStorage.setItem(
        "quotations",
        JSON.stringify({
          currencies: quotations.currencies,
          bitcoin: quotations.bitcoin,
          stocks: quotations.stocks,
        })
      );
    }
  }

  async getQuotationHistory(type, name) {
    let history = {
      time: [],
      values: [],
      name: name,
    };

    const quotationList = await store.getters["finance/getQuotations"][type];

    for (const quotations of quotationList) {
      let quotation = quotations.data[name];
      if (quotation) {
        history.time.unshift(quotations.time);
        history.values.unshift(quotation.variation);
      }
    }
    console.log(history);
    return history;
  }
}

export default new FinanceService();
