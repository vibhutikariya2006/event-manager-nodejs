const EventSlot = require("../models/EventSlot")

exports.addEvent = async(req, res)=>{
    try {
        const {eventName , date, startTime, endTime, location, capacity} = req.body

        if(!eventName || !date || !startTime || !endTime ||!location ||!capacity){
            return res.status(401).json({message: "All Fields are required"})
        }

        const existevent = await EventSlot.findOne({eventName})

        if(existevent){
            return res.status(400).json({message: "Event Already existed"})
        }

        const event = await EventSlot.create({
            eventName,
            date,
            startTime,
            endTime,
            location,
            capacity
        })

        return res.status(200).json({message: "Event Added Successfully"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Something Went Wrong"})
    }
}

exports.getevent = async(req,res)=>{
try {
       const id = req.params.id

    const event = await EventSlot.findById(id)
    if(!event){
        return res.status(404).json({message: "Event not found"})
    }
    return res.status(200).json({message: "Event Found Successfully", event}) 
} catch (error) {
    return res.status(500).json({message: "Something went wrong"})
}
}
exports.getallevent = async(req,res)=>{
try {

    const event = await EventSlot.findOne()
    if(!event){
        return res.status(404).json({message: "Event not found"})
    }
    return res.status(200).json({message: "Events: ", event}) 
} catch (error) {
    return res.status(500).json({message: "Something went wrong"})
}
}
exports.updateevent = async(req,res)=>{
try {
       const id = req.params.id

    const event = await EventSlot.findByIdAndUpdate(id, {
         eventName,
            date,
            startTime,
            endTime,
            location,
            capacity

    }, {new: true, runValidators: true})
    if(!event){
        return res.status(404).json({message: "Event not found"})
    }
    return res.status(200).json({message: "Event Update Successfully", event}) 
} catch (error) {
    return res.status(500).json({message: "Something went wrong"})
}
}

exports.deleteevent = async(req,res)=>{
try {
       const id = req.params.id

    const event = await EventSlot.findByIdAndDelete(id)
    if(!event){
        return res.status(404).json({message: "Event not found"})
    }
    return res.status(200).json({message: "Event Found Successfully", event}) 
} catch (error) {
    return res.status(500).json({message: "Something went wrong"})
}
}