"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("./routes/v1/user"));
const auth_1 = __importDefault(require("./routes/v1/auth"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// routes
app.use('/api/v1/users', user_1.default);
app.use('/api/v1/auth', auth_1.default);
app.use((req, res, next) => {
    const err = new Error('Not Found');
    next(err);
});
app.use((err, req, res, next) => {
    res.status(500).send(err.message);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});
