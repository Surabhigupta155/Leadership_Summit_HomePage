const express= require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const randomstring = require('randomstring')
// const routesUrls = require('./routes/routs')
const cors = require('cors')
const signUpTemplateCopy = require('./models/SignUpModels')

dotenv.config()
mongoose.connect( process.env.DATABASE_ACCESS,{
    // useNewUrlParser: true,
    // useUnifiedTopology: true
  })
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//     console.log("Connected successfully");
//   });

// to pass incoming and outgoing request we use body parser
app.use(express.json())
app.use(cors())
app.post('/signup',async (request,response)=>{

    let id=randomstring.generate(16)
    const signedUpUser = new signUpTemplateCopy({
       fullName:request.body.fullName,
       number:request.body.number,
       email:request.body.email,
       address:request.body.address,
       college:request.body.college,
    })
    console.log(signedUpUser)
    try {
        await signedUpUser.save();
        response.send(signedUpUser);
      } catch (error) {
        response.status(500).send(error);
      }
    // signedUpUser.save()
    // .then(data=>{
    //     res.json(data)
      
    // })
    // .catch(error =>{
    //     res.json(error)
    // })
 })
 
app.listen(4000,()=> console.log("server is up and running"))