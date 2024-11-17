import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const provinceSchema = new Schema({
    name: { type: String, required: true, unique: true }
});

export default mongoose.model('Province', provinceSchema);