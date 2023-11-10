import mongoose from "mongoose";

beforeAll(async () => {
    // @ts-ignore
    return await mongoose.connect(`mongodb://${process.env.TEST_DB_HOST}:${process.env.TEST_DB_PORT}/${process.env.TEST_DB_NAME}`);
});

afterAll(async () => {
    await mongoose.connection.close();
});
