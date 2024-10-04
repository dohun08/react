const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser')
const cors = require('cors')

const {login,
    accesstoken,
    refreshtoken,
    loginSuccess,
    logout} 
    = require('./controller')
dotenv.config()
const app = express()
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:'http://localhost:3000',
    method:['GET', 'POST'],
    credentials: true
}));


app.post('/login', login);
app.get('/accesstoken', accesstoken);
app.get('/refreshtoken', refreshtoken);
app.get('/login/success', loginSuccess);
app.post('/logout', logout);

app.listen(process.env.PORT, ()=>{
    console.log(`${process.env.PORT}에서 실행중입니다.`)
});