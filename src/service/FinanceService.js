import FinanceModel from "@/model/FinanceModel";
import store from "@/store";

class FinanceService {
  #quotationTypes = ["currencies", "stocks", "bitcoin"];
  async getFinanceData() {
    const request = await FinanceModel.getFinanceData();
    if (request.results) {
      const time = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
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
  initiateStore() {
    store.dispatch("finance/initiateStore");
  }
}

export default new FinanceService();
