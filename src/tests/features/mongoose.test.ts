import mongoose from "mongoose";

test('Mongoose connection is successful', () => {
    expect(mongoose.connection.readyState).toBe(1);
});

