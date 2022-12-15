const express = require("express");
const router = express.Router();


// Create 입력
const Boards = require("../schemas/boards.js");
router.post("/boards/", async (req, res) => {
    const {boardId, content} = req.body;

    const createBoards = await Boards.create(
        {boardId, content}
    );

    res.json({boards: createBoards});
})

// Read 읽기
router.get("/boards", async (req, res) => {
    const boards = await Boards.find({});

    res.json({"boards": boards})
});

module.exports = router;

// Udate 수정
router.put("/boards/:boardId", async (req, res) => {
    const {boardId} = req.params;
    const {content} = req.body;

    const existsBoard = await Boards.find({boardId});
    if (existsBoard.length) {
        await Boards.updateOne(
            {boardId: boardId},
            {$set: {content:content}}
            )
    }
    res.status(200).json({success:true});
})

// Delete 삭제
router.delete("/boards/:boardId", async (req, res) => {
    const {boardId} = req.params;

    const existsBoard = await Boards.find({boardId});
    if (existsBoard.length) {
        await Boards.deleteOne({boardId});
    }

    res.json({result:"success"});
})
