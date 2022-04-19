//Importing Modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const helmet = require("helmet");

//Importing Models
const ReservationModel = require("./ReservationModel");

//App Variables
const myApp = express();
const port = 3000;

//Using Middleware Body-Parser, CORS
myApp.use(express.json());
myApp.use(cors())
myApp.use(helmet());

//MongoDB Connection
const connectDB = async () => {
    const response = await mongoose.connect("mongodb://localhost:27017/ReservationSystem-node");
}
connectDB();

//Requests

//get All
myApp.get('/ReservationHistory', async (req, res) => {
    const reservation = await ReservationModel.find();
    res.status(200).json({ status: true, data: reservation });
});

//get
myApp.get('/Reservation/:id', async (req, res) => {
    const reservation = await ReservationModel.findById(req.params.id);
    res.status(200).json({ status: true, data: reservation });
});
//post
myApp.post('/Reservation', async (req, res) => {
    const reservation = await ReservationModel.create(req.body);
    res.status(200).json({ status: true, data: reservation });
});
//delete
myApp.delete("/Reservation/:id", async (req, res) => {
    const reservation = await ReservationModel.findByIdAndRemove(req.params.id);
    res.status(200).json({ status: true, data: reservation });
})
//put
myApp.put("/Reservation/:id", async (req, res) => {
    const reservation = await ReservationModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    res.status(200).json({ status: true, data: reservation });
})
//Listener
myApp.listen(port, () => {
    console.log("Listening at Port 3000")
});