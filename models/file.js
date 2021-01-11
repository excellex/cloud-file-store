const { Schema, model, Types } = require('mongoose')

module.exports = model('File', new Schema({
  name: {type: String, required: true},
  type: {type: String, required: true},
  date: {type: Date, default: Date.now()},
  accesslink: {type: String},
  size: {type: Number, default: 0},
  path: {type: String, default: ''},
  user: {type: Types.ObjectId, ref: 'User'},
  parent: {type: Types.ObjectId, ref: 'File'},
  childs: [{type: Types.ObjectId, ref: 'File'}],
}))
