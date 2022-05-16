insert into   [order_payment] (
reference,
subtotal,
tax,
discount,
total,
payment_method,
[date],
customer,
[status],
email ,
phone ,
company,
avatar)
values 
('70d4d7d0',39.97,77.44,-10.17,73.31,'Credit Card',GETDATE(),'Dollie Bullock','Payment accepted','abbott@withinpixels.com','+1-202-555-0175','Saois','assets/images/avatars/Abbott.jpg'),
('2003479c',98.68,45.55,-10.25,24.51,'Credit Card',GETDATE(),'Holmes Hines','Payment accepted','abbott@withinpixels.com','+1-202-555-0175','Saois','assets/images/avatars/Abbott.jpg')