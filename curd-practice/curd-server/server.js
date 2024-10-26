const express = require('express')
const app = express()
const port = 8080;
const connection = require('./DB.js');
var cors = require('cors')
app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    connection.query('SELECT * FROM todos', (err, results, fields) => {
      if (err) {
        console.error('쿼리 실행 실패:', err.stack);
        res.status(500).send('쿼리 실행 실패');
        return;
      }
      res.json(results);
    });
  });


app.post('/insert', (req, res) =>{
  connection.query(`insert into todos (task) values('${req.body.task}')`, (err, results, fields) => {
    if (err) {
      console.error('쿼리 실행 실패:', err.stack);
      res.status(500).send('쿼리 실행 실패');
      return;
    }
    res.status(200).send()
  });
  
})

app.delete('/delete/:id', (req, res) =>{
  const id = req.params.id
  connection.query(`delete from todos where id = ${id}`, (err, results, fields) =>{
    if(err){
      console.error('쿼리 실행 실패:', err.stack);
      res.status(500).send('쿼리 실행 실패');
      return;
    }
    res.status(200).send()
  })
})
app.patch('/completed/:id', (req, res) =>{
  const id = req.params.id
  console.log(id)
  connection.query(`UPDATE todos set completed = 'true' where id = ${id}`,(err, results, fields) =>{
    if(err){
      console.error('쿼리 실행 실패:', err.stack);
      res.status(500).send('쿼리 실행 실패');
      return;
    }
    res.status(200).send()
  })
})
app.listen(port, ()=>{
    console.log(`서버가 http://localhost:${port}에서 실행 중`);
})