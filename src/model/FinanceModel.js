import api from "@/api";

class FinanceModel {
  async getFinanceData() {
    const financeData = await api
      .get("finance?format=json-cors")
      .then((response) => response)
      .catch((err) => err);
    return financeData;
  }
}

export default new FinanceModel();
