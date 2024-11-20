import mongoose from "mongoose";

const bridegroomSchema = new mongoose.Schema({
    imageUrl: { type: String, required: true }, // URL of the image
    description: { type: String, required: true } // Arabic text description
});
const Bridegroom = mongoose.model('bridegroom', bridegroomSchema);

export default Bridegroom;