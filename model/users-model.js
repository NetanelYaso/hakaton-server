const mongoose = require("mongoose");
const schema = mongoose.Schema;

const usersSchema = schema(
    {
        name: { type: String },
        email: { type: String, required: true },
        password: { type: String, required: true },
    },
    { timestamps: true }
);
const userModel = mongoose.model("user", usersSchema);

module.exports = userModel;
