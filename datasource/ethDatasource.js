const { RESTDataSource } = require("apollo-datasource-rest");

// Vitalik's Ethereum Address
const eth_address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

// Etherscan Data Source Class
class EtherDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.etherscan.io/api";
  }

  async etherBalanceByAddress() {
    const response = await this.get("", {
      module: "account",
      action: "balance",
      address: eth_address,
      tag: "latest",
      apikey: process.env.ETHERSCAN_API,
    });

    return response;
  }

  async totalSupplyOfEther() {
    const response = await this.get("", {
      module: "stats",
      action: "ethsupply",
      apikey: process.env.ETHERSCAN_API,
    });

    return response;
  }
}

module.exports = EtherDataSource;
