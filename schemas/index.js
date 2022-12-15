const mongoose = require("mongoose");

mongoose.set('strictQuery', true);
// 연결
const connect = () => {
    mongoose
        .connect("mongodb://127.0.0.1:27017/hw_blog")
        .catch(err => console.log(err));
};

// 연결 에러
mongoose
    .connection
    .on("error", err => {
        console.error("몽고디비 연결 에러", err);
    });

// connect 함수 내보냄
module.exports = connect;