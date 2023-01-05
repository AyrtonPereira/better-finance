import FinanceModel from "@/model/FinanceModel";

class FinanceService {
  async getFirstData() {
    const results = await FinanceModel.getFinanceData();
    return results;
  }
}

export default new FinanceService();
