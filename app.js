const express = require('express');
const app = express();
const port = 3000;

const boardsRouter = require('./routes/boards.js');
const connect = require("./schemas")
connect();

app.use(express.json());

app.use("/api", [boardsRouter])

app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!');
});