// server.js
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const PORT = 8080;

// CORS 및 JSON 요청 본문 파싱 미들웨어 설정
app.use(cors({
    origin: 'http://localhost:3000', // 클라이언트 주소를 명확히 지정
    credentials: true, // 자격 증명 정보 허용
}));
app.use(express.json());

// MySQL 데이터베이스 연결 설정
const db = mysql.createConnection({
    host: "localhost",
    user: "root",  // MySQL 사용자 이름
    password: "3154",  // MySQL 비밀번호
    database: "todo",  // 사용할 데이터베이스 이름
});

// MySQL 연결 확인
db.connect((err) => {
    if (err) {
        console.error("데이터베이스에 연결할 수 없습니다:", err);
        return;
    }
    console.log("MySQL 데이터베이스에 연결되었습니다.");
});

// 할 일 목록 조회
app.get("/get", (req, res) => {
    db.query("SELECT * FROM todos", (err, results) => {
        if (err) return res.status(500).json({ error: "데이터 조회 실패" });
        res.json(results);
    });
});

// 새로운 할 일 추가
app.post("/insert", (req, res) => {
    const { task } = req.body;
    if (!task) {
        return res.status(400).json({ error: "할 일을 입력해 주세요." });
    }
    db.query("INSERT INTO todos (task) VALUES (?)", [task], (err, result) => {
        if (err) return res.status(500).json({ error: "할 일 추가 실패" });
        res.status(201).json({ id: result.insertId, task, completed: false });
    });
});

// 할 일 삭제
app.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    db.query("DELETE FROM todos WHERE id = ?", [id], (err, result) => {
        if (err) return res.status(500).json({ error: "할 일 삭제 실패" });
        res.status(204).send(); // 성공 응답
    });
});

// 할 일 상태(완료/미완료) 변경
app.patch("/completed/:id", (req, res) => {
    const { id } = req.params;
    db.query("UPDATE todos SET completed = true WHERE id = ?", [id], (err, result) => {
        if (err) return res.status(500).json({ error: "할 일 상태 변경 실패" });
        res.json({ id, completed: true }); // completed 값을 항상 true로 응답
    });
});


// 서버 시작
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT}에서 시작되었습니다.`);
});
