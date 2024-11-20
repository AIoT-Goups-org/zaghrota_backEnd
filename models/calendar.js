import mongoose from "mongoose";

const calendarSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

const Calendar = mongoose.model("Calendar", calendarSchema);


export default Calendar;
