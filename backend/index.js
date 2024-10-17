const express = require('express');
const app = express();
const port=5000;
const userRouter=require('./Routers/userRouter')
const productRouter = require('./Routers/productRouter');
const cors=require('cors');

app.use(cors({
    origin:'http://localhost:3000'
}));

app.use(express.json());
app.use('/product',productRouter);
app.use('/user',userRouter);


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})