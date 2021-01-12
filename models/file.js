const { Schema, model, Types } = require('mongoose')

module.exports = model('File', new Schema({
  type: {type: String, required: true},
  name: {type: String, required: true},
  path: {type: String, default: ''},
  size: {type: Number, default: 0},
  date: {type: Date, default: Date.now()},
  user: {type: Types.ObjectId, ref: 'User'},
  accesslink: {type: String},
  parent: {type: Types.ObjectId, ref: 'File'},
  childs: [{type: Types.ObjectId, ref: 'File'}],
}))
