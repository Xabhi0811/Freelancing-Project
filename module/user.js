const mongoose = require("mongoose")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt') 


const useSchema = new mongoose.Schema({
  fullname:{
    firstname: {
         type:String,
         required: true,
         minlenght:[3, 'first name must be at least 3 charcters']
    },

    lastname:{
        type: String,
        minlenght:[3," last name must be 3 charcters"]
    }
  },
        password:{
          type: String,
          required: true,
          minlenght: [6,"passord must be 6 digit"]
        },
})

module.exports = useSchema 