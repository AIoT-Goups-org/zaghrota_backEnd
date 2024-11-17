import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const citySchema = new Schema({
    name: { type: String, required: true, unique: true },
    province: { type: Schema.Types.ObjectId, ref: 'Province', required: true }
});

export default mongoose.model('City', citySchema);