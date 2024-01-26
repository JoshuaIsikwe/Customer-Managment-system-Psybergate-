const express = require('express');
const app = express();
const db = require('./Database/cust')
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post("/customers", async(req, res)=>{
  const customer = {
   firstName: req.body?.firstName ?? '',
   surname: req.body?.surname ?? '',
   cell: req.body?.cell ?? '',
   physicalAddress: req.body?.physicalAddress ?? '',
   postalAddress: req.body?.postalAddress ?? '',
   comments: req.body?.comments ?? '',
  }
  const results = await db.createCustomer(customer);
  res.status(201).json({id : results[0]});
});

app.get("/customers", async(req, res)=>{
  const customers = await db.getAllCustomers();
  res.status(200).json({customers})
})
app.get("/customers/:id", async(req, res)=>{
  const id = await db.getCustomer(req.params.id, req.body);
  res.status(200).json(id)
})

 app.patch("/customers/:id", async(req, res)=>{
  const id = await db.updateCustomer(req.params.id, req.body);
  res.status(200).json({id});
 });

 app.delete("/customers/:id", async(req, res)=>{
  await db.updateCustomer(req.params.id, req.body);
  res.status(200).json({id});
 });



const port =  process.env.PORT || 3000; 
//Start server 
  app.listen(port, () => {
    console.log(`Psybergate app listening on port ${port}`)
  })