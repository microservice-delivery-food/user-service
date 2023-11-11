import {Schema, model, Document} from "mongoose";
import bcrypt from 'bcrypt';

interface userInterface extends Document {
    name: String,
    email: String,
    password: String,
    comparePassword(candidatePassword: string, callback: (err: any, isMatch: boolean) => void): void;
}

const userSchema = new Schema<userInterface>({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
}, {timestamps: true})

const saltRounds = 10;

userSchema.pre('save', function (next) {
    const user = this as userInterface;
    const password: any = user.password;

    if (!user.isModified('password')) {
        return next();
    }

    bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) return next(err);

        bcrypt.hash(password,
            salt,
            (err, hash) => {
                if (err) return next(err);

                user.password = hash;
                next();
            });
    });
});

userSchema.methods.comparePassword = function (candidatePassword: any, callback: Function) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) return callback(err);
        callback(null, isMatch);
    });
};

export default model<userInterface>('User', userSchema);