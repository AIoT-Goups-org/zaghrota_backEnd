import mongoose from "mongoose";

const decorationCarSchema = new mongoose.Schema({
    imageUrl: { type: String, required: true }
});

const DecorationCar = mongoose.model('decorationCar', decorationCarSchema);

export default DecorationCar;