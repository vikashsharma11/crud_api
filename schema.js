const mongoose  = require('mongoose');

const pschema = mongoose.Schema({
   "name": {type: String,require:true},
   "email":{type:String}

});


const schema = mongoose.model("testapi",pschema);
module.exports = schema;