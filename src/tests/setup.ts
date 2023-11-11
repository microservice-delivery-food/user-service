import mongoose from "mongoose";

beforeEach(async () => {
    // @ts-ignore
    return await mongoose.connect(`mongodb://${process.env.TEST_DB_HOST}:${process.env.TEST_DB_PORT}/${process.env.TEST_DB_NAME}`);
});

afterEach(async () => {
    // await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
});
