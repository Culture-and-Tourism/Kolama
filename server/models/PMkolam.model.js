import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PMkolamSchema = new Schema({
    
    name: { type: String, required: false },
    location: { type: String, required: false },
    artCategory: { type: String, required: false },
    title: { type: String, required: false },
    phoneNo: { type: String, required: false },
    email: { type: String, required: false },
    description: { type: String, required: false },
    cover: { type: String, required: false },
 
});

// export default = PMKolam = mongoose.model("pmkolam", PMkolamSchema);

export default mongoose.model('pmkolam',PMkolamSchema);