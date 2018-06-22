import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        username: { type: String, required: true, lowercase: true, index: true },
        ip: { type: String, required: true },
        action: { type: String, required: true },
    },
    { timestamps: true}
)


export default mongoose.model("AppLogs", schema)