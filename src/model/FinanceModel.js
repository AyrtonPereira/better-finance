import api from "@/api";

class FinanceModel {
  async getFinanceData() {
    const financeData = await api.get("finance?key=fb33dfa4&format=json-cors");
    return financeData;
  }
}

export default new FinanceModel();
