const Service = require('./service');

module.exports = {
  async updateOrder(payload) {
    console.log('----updateOrder----');
    console.log(payload)
    const result = await Service.updateOrder(payload);
    return result;
  },
  async getOrder(payload) {
    console.log('----getOrder----');
    console.log(payload)
    const result = await Service.getOrder(payload);
    return result;
  },
  
  async getOrders(payload) {
    console.log('----getOrders----');
    console.log(payload)
    const result = await Service.getOrders(payload);
    return result;
  },
  

 
};
