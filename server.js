const express = require("express");
const app = express();
const port = 3000;
const {db} = require("./db");
const userRouter = require('./routes/users');
const showRouter = require('./routes/shows')

app.get('/',(req,res)=>{
    res.send("the root path GET endpoint works")
})
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))
//express routers
app.use('/users',userRouter)
app.use('/shows',showRouter)

app.listen(port, () => {
    db.sync();
    console.log("Your server is listening on port " + port);
})