const mongoose = require('mongoose');
const schema = mongoose.Schema;

const todoSchema = new schema({
    title: String,
    description: String,
    completed:{
        type: Boolean,
        default: false
    }
});

const Todo = mongoose.model('Todo',todoSchema);

module.exports = Todo;