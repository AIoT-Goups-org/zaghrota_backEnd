import mongoose from "mongoose";

const decorationSchema = new mongoose.Schema({
    imageUrl: { type: String, required: true }, // URL of the image
    description: { type: String, required: true } // Arabic text description
});
const Decoration = mongoose.model('decoration', decorationSchema);

export default Decoration;