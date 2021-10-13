const express= require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const randomstring = require('randomstring')
const nodemailer = require("nodemailer");
const fs = require('fs');
var handlebars = require('handlebars');
const { promisify } = require('util');
const path=require('path')



const readFile = promisify(fs.readFile)
// const routesUrls = require('./routes/routs')
const cors = require('cors')
const signUpTemplateCopy = require('./models/SignUpModels')

dotenv.config()
mongoose.connect( process.env.DATABASE_ACCESS,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  let transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user: 'bhavya132@gmail.com',
        pass: '@Mani132'
    }
});

  async function sendMail(data) {

    let html=await readFile(path.join(__dirname,'index.html'), 'utf8')
    var template = handlebars.compile(html);
    var replacements = {
         name: data.fullname
    };
    var htmlToSend = template(replacements);

    const mailOptions={
        from:'bhavya132@gmail.com',
        to:['bhavytaggarwal@gmail.com','2019uce0056@iitjammu.ac.in'],
        subject:"Thanks for Registeration",
        html:htmlToSend
    };
    transporter.sendMail(mailOptions,function(err, info){
        if(err)
           console.log(err)
        else 
           console.log(info)
    })
}




app.use(express.json())
app.use(cors())
app.post('/signup',async (request,res)=>{

    console.log("======================")
    console.log(request.body)
    const user = await signUpTemplateCopy.find({number:request.body.number});
    // console.log(user.length)
    if(user.length!=0){
       res.status(401).send("User with this number already exists")
    } 
    else{
    const signedUpUser = new signUpTemplateCopy({
       fullName:request.body.fullName,
       number:request.body.number,
       email:request.body.email,
       address:request.body.address,
       college:request.body.college,
    })

    signedUpUser.save()
    .then(data=>{
        sendMail(data)
        res.json(data)
      
    })
    .catch(error =>{
        res.json(error)
    })
}
 })
 
app.listen(4000,()=> console.log("server is up and running"))