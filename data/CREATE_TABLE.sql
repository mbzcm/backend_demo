create table [order_payment]
(
Id bigint identity(1,1),
reference varchar(100),
subtotal decimal(10,2),
tax decimal(10,2),
discount decimal(10,2),
total decimal(10,2),
payment_method varchar(100),
[date] datetime,
customer varchar(100),
[status] varchar(100),
email varchar(100),
phone varchar(20),
company varchar(100),
avatar varchar(100)
)
