const mongoose = require("mongoose")
const BookingSchema = new mongoose.Schema({
  slotId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "EventSlot",
    required: [true , "Slot ID is required"],
  },  
studentName: {
    type: String,
    required: [true , "Student Name is required"],
    trim: true
},
email:{
type: String,
required: [true , "Email is required"],
},
rollNo:{
    type: String,
},
bookingStatus:{
    type: String,
    enum: ["Booked", "cancelled"],
    default: "Booked"
}
}, { timestamps: true })

module.exports = mongoose.model("Booking", BookingSchema)
