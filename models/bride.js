import mongoose from "mongoose";

const brideSchema = new mongoose.Schema({
    imageUrl: { type: String, required: true }, // URL of the image
    description: { type: String, required: true } // Arabic text description
});
const Bride = mongoose.model('bride', brideSchema);

export default Bride;