import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    googleId: { type: String, required: true },
    imageUrl: { type: String, required: true },
    email: { type: String, required: true },
    name: { type: String, required: true },
    givenName: { type: String, required: true },
    familyName: { type: String, required: true },
}, {
    versionKey: false,
})

export default mongoose.model('user', userSchema);