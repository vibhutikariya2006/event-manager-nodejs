const Booking = require("../models/Booking")
const EventSlot = require("../models/EventSlot")

exports.bookslot = async(req, res)=>{
    const id = req.params.id
    const {slotId, studentName, email, rollNo} = req.body
if(!slotId || !studentName || !email || !rollNo){
    return res.status(401).json({message: "All fields are required"})
}

const extbook = await Booking.findOne({email})
if(extbook){
    return res.status(400),json({message: "Event Already Booked"})
}

const book = await Booking.create({
slotId: id,
studentName,
email,
rollNo
})


}