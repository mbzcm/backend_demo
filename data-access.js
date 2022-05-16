const DataSourceMsql = require('./data-source-msql');
const { GET_ALL_ORDERS, GET_ORDER, UPDATE_ORDER, WHERE_ORDER} = require('./database.constant')
const fs = require('fs');
const path = require('path');

module.exports = {
    async updateOrder(payload) {
      console.log('----updateOrder----');
      const { id, newStatus } = payload;
      const query = `${UPDATE_ORDER} '${newStatus}' ${WHERE_ORDER} ${id}`;
      console.log(query)
      const result = await DataSourceMsql.executeStatement(query);
      return result;
    },
    
  async getOrders(payload) {
    console.log('----getOrders----');
    const query = GET_ALL_ORDERS;
    const result = await DataSourceMsql.executeStatement(query);
    return result;
  },
  
  async getOrder(payload) {
    console.log('----getOrders----');
    const { id } = payload;
    const query =  `${GET_ORDER} ${id}`;
    const result = await DataSourceMsql.executeStatement(query);
    const item = result[0];
    console.log('*** item ***', item);
    return item;
  },
  

   
  };
  