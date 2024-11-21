import mongoose from "mongoose";

const buffetSchema = new mongoose.Schema({
    hash: { type: String, required: true },
    type: { type: String, required: true },
    name: { type: String, required: true },
    amount: { type: String, required: true },
});

const Buffet = mongoose.model('buffet', buffetSchema);

export default Buffet;