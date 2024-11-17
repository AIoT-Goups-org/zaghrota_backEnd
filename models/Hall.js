import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const hallSchema = new Schema({
    name: { type: String, required: true },
    city: { type: Schema.Types.ObjectId, ref: 'City', required: true },
    phone: String,
    facebook: String,
    instagram: String,
    photos: String,
    location: String
});

export default mongoose.model('Hall', hallSchema);