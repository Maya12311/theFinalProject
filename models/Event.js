const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    eventType: {
      type: String,
      // unique: true -> Ideally, should be unique, but its up to you
    },
    theme: String,
    date: Date,
    eventInfo: String
    
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Event = model("Event", userSchema);

module.exports = Event;