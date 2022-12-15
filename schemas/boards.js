const mongoose = require("mongoose");

const boardsSchema = new mongoose.Schema({
    boardId: {
        type: Number,
        required: true,
        unique: true
    },
    content: {
        type: String
    }
});

module.exports = mongoose.model("Boards", boardsSchema);
