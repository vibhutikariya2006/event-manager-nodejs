const mongoose = require("mongoose")

const EventSlotSchema = new mongoose.Schema({
eventName: {
    type: String,
    required: [true , "Event Name is required"],
    trim: true
},
date:{
type: Date,
required: [true , "Date is required"],
},
startTime:{
    type: String,
    required: [true , "Start Time is required"],
},
endTime:{
    type: String,
    required: [true , "End Time is required"],
},
location:{
    type: String,
    required: [true , "Location is required"],
},
capacity:{
    type: Number,
    required: [true , "Capacity is required"],
},
status:{
    type: String,
    enum: ["open", "closed"],
    default: "open"
}


}, {timestamps:true})

module.exports = mongoose.model("EventSlot", EventSlotSchema)