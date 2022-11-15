var mongoose = require('mongoose');
let ObjectId = mongoose.Schema.ObjectId;
var deepPopulate = require('mongoose-deep-populate')(mongoose);
var UserSchema = mongoose.Schema({
  email: String,
  first_name: String,
  last_name: String,
  password: String,
  phone: Number,
  created: { type: Date, default: Date.now },
  role: { type: String, enum: ['admin', 'user'], default: 'user' },
  status: { type: String, enum: ['active', 'delete'], default: 'active' },
});
module.exports = mongoose.model('User', UserSchema);
