const express = require('express')
const cors = require('cors')
var bodyParser = require('body-parser')
const Controller = require('./controller');
const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json());

app.get('/api/orders', async (req, res) => {
  console.log('----getOrder----');
  console.log(req);
  const payload = {...req.body}
  const result = await Controller.getOrders(payload);
  res.send(result)
})

app.get('/api/order/:id', async (req, res) => {
  console.log('----getOrder----');
  const payload = {...req.params}
  console.log(payload);
  const result = await Controller.getOrder(payload);
  res.send(result)
})

app.put('/api/order', async (req, res) => {
  console.log('----updateOrder----');
  const payload = {...req.body}
  const result = await Controller.updateOrder(payload);
  res.send(result)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})