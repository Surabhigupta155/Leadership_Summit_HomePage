const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')


// responsible for routing the request we get
router.post('/signup',(request,response)=>{
   const signedUpUser = new signUpTemplateCopy({
      fullName:request.body.fullName,
      username:request.body.username,
      email:request.body.email,
      password:request.body.password,
      Institute:request.body.Institute,
      ID:request.body.ID
   })
   signedUpUser.save()
   .then(data=>{
       response.json(data)
   })
   .catch(error =>{
       response.json(error)
   })
})

module.exports = router