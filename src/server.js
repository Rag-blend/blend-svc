const express = require('express');
const productRouter = require('./routes/product-routes');
const bodyParser = require('body-parser');
const cors=require('cors')
const app = express();
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
app.use(productRouter)
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})