const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    eventType: {
      type: String,
    },
    theme: String,
    eventInfo: String,
    date: String,
    
  
    owner: {
      type: Schema.Types.ObjectId,  
      ref: 'User'
    }
    


    
  },
  
  
  {
    timestamps: true,
  }
);

const Event = model("Event", userSchema);

module.exports = Event;