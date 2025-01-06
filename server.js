import express from 'express'
import "dotenv/config"

const app = express();

const PORT = process.env.PORT || 3000

/*************** Middleware ********* */ 
app.use(express.json());
app.use(express.urlencoded({extended: false}))  //Middleware to parse URL-encoded data

app.get("/", function(req,res){
    return res.send("hey buddy");
})


/* ***************** Routers ******** */
import router from './routes/index.js';
app.use(router);

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})