module.exports = {
  
  
    GET_ALL_ORDERS:
    `select id,reference,subtotal,tax,discount,total,payment_method,date,customer,status from order_payment`,


    GET_ORDER:
    `select id,reference,subtotal,tax,discount,total,payment_method,date,customer,status,email,phone,company,avatar from order_payment where Id = `,


    UPDATE_ORDER:
    `update order_payment set status = `,
    WHERE_ORDER:  `where Id = `,
  
  };
  