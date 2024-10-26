const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',      // MySQL 서버 호스트
  user: 'root',           // MySQL 사용자
  password: '3154', // MySQL 비밀번호
  database: 'todo'  // 사용하려는 데이터베이스 이름
});

connection.connect((err) => {
  if (err) {
    console.error('데이터베이스 연결 실패:', err.stack);
    return;
  }
  console.log('데이터베이스에 연결됨');
});

module.exports = connection;
