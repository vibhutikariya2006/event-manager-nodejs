const express = require("express")
const { addEvent, getevent, updateevent, deleteevent, getallevent } = require("../controllers/slotController")
const { bookslot } = require("../controllers/bookingController")

const router  = express.Router()

router.post("/addevent", addEvent)
router.get("/getevent", getevent)
router.get("/getallevent", getallevent)
router.put("/updateevent", updateevent)
router.delete("/deleteevent", deleteevent)
router.post("/bookslot/:id", bookslot)
module.exports = router