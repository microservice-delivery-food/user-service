import { Schema, model } from "mongoose";

interface userInterface {
    name: String,
    email: String,
    password: String,
}

const userSchema = new Schema<userInterface>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
}, { timestamps: true })


export default model<userInterface>('User', userSchema);    