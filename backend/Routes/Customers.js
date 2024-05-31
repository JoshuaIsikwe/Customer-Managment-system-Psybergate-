const express = require('express');
const app = express();
const db =require('../Database/cust')
const bodyParser = require('body-parser')

module.exports = (app) => {

app.post("/customers", async(req, res)=>{
  const results = await db.createCustomer(req.body);
  res.status(201).json({id : results[0]});
  console.log({req})
});
app.post("/customers", async(req, res)=>{
  const customer = {
   firstName: req.body?.firstName ?? '',
   surname: req.body?.surname ?? '',
   cell: req.body?.cell ?? '',
   physicalAddress: req.body?.physicalAddress ?? '',
   comment: req.body?.comment ?? '',
  }
  const results = await db.createCustomer(customer);
  res.status(201).json({id : results[0]});
});

app.get("/customers", async(req, res)=>{
  const customers = await db.getAllCustomers();
  res.status(200).json({customers})
})
//Api Routes

 app.patch("/customers/:id", async(req, res)=>{
  const id = await db.updateCustomer(req.params.id, req.body);
  res.status(200).json({id});
 });

 app.delete("/customers/:id", async(req, res)=>{
  await db.updateCustomer(req.params.id, req.body);
  res.status(200).json({id});
 });


}