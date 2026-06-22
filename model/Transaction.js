const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema(
    {
     user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
     },
     type:{
        type: String,
        required: true,
        enum: ["income","expense"]
     },
     category:{
        type: String,
        default: "uncategorized"
     },
     amount:{
        type: Number,
        required: true,
        min: 0
     },
     date:{
        type: Date,
        default: Date.now
     },
     description:{
        type: String,
        require: false
     }
    },
    {timestamps:true}
);

module.exports = mongoose.model("Transaction",transactionSchema);