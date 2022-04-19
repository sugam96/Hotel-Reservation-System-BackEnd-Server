const mongoose = require("mongoose");

//Reservation Model
const ReservationSchema = new mongoose.Schema({
    room_type: {
        type: String,
        required: [true, "Please Enter a Room Type"]
    },
    from_date : {
        type: Date,
        required: [true, "Please Enter From Date"]
    },
    to_date: {
        type: Date,
        required: [true, "Please Enter To Date"]
    },
    breakfast: {
        type: Boolean,
        required: true
    },
    air_conditioner: {
        type: Boolean,
        required: true
    },
    wake_up_service: {
        type: Boolean,
        required: true
    }

})
module.exports=mongoose.model("Reservation",ReservationSchema);