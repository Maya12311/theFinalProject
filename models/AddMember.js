const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
   
    flatmate: String,
    relationship: String,
    age: Number,
    
  
    owner: {
      type: Schema.Types.ObjectId,  
      ref: 'User'
    }
    
  },
  
  
  {
    timestamps: true,
  }
);

const AddMember = model("AddMember", userSchema);

module.exports = AddMember;