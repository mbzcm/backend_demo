const DataAccess = require('./data-access');

module.exports = {
    async updateOrder(payload) {
      console.log('----updateOrder----');
      const result = await DataAccess.updateOrder(payload);
      return result;
    },
  async getOrder(payload) {
    console.log('----getOrder----');
    const result = await DataAccess.getOrder(payload);
    return result;
  },
  async getOrders(payload) {
    console.log('----getOrders----');
    const result = await DataAccess.getOrders(payload);
    return result;
  },  

   
  };
  