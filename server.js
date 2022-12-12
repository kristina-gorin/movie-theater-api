const express = require("express");
const app = express();
const port = 3000;
const {db} = require("./db");
const userRouter = require('./routes/users');

app.get('/',(req,res)=>{
    res.send("the root path GET endpoint works")
})
//express routers
app.use('/users',userRouter)


app.listen(port, () => {
    db.sync();
    console.log("Your server is listening on port " + port);
})