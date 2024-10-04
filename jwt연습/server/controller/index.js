const userDataBase = require('../db');
const jwt = require('jsonwebtoken');

const login = (req, res, next) =>{
    const { email, password } = req.body;
    const userInfo = userDataBase.filter(item => email === item.email)[0];

    if (!userInfo) {
        res.status(403).json("Email not found");
    } else {
        try {
            // access 토큰 발급
            const accessToken = jwt.sign({
                id: userInfo.id,
                email: userInfo.email,
                userName: userInfo.userName,
            }, process.env.ACCESS_SECRET, {
                expiresIn: '1m',
                issuer: 'About Tech'
            });

            // refresh 토큰 발급
            const refreshToken = jwt.sign({
                id: userInfo.id,
                email: userInfo.email,
                userName: userInfo.userName,
            }, process.env.REFRESH_SECRET, {
                expiresIn: '24h',
                issuer: 'About Tech'
            });

            // 토큰을 헤더에 담아서 응답 보내기
            res.setHeader('Authorization', `Bearer ${accessToken}`);
            res.setHeader('x-refresh-token', refreshToken); // refresh token도 헤더로 전달할 수 있음

            return res.status(200).json({ message: 'Login success', accessToken, refreshToken });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Something went wrong' });
        }
    }
    // const {email, password} = req.body;
    // const userInfo = userDataBase.filter(item =>{
    //     return email==item.email;
    // })[0];
    // if(!userInfo){
    //     res.status(403).json("not email");
    // }
    // else{
    //     try{
    //         //access토큰 발급
    //         const accesstoken = jwt.sign({
    //             id:userInfo.id,
    //             email:userInfo.email,
    //             userName:userInfo.userName,
    //         }, process.env.ACCESS_SECRET, {
    //             expiresIn:'1m',
    //             issuer:'About Tech'
    //         })

    //         //refresh토큰 발급
    //         const refreshtoken = jwt.sign({
    //             id:userInfo.id,
    //             email:userInfo.email,
    //             userName:userInfo.userName,
    //         }, process.env.REFRESH_SECRET, {
    //             expiresIn:'24h',
    //             issuer:'About Tech'
    //         })

    //         //토큰 발송
    //         res.cookie("accesstoken", accesstoken, {
    //             secure: false, 
    //             httpOnly: true,
    //         });
    
    //         res.cookie("refreshtoken", refreshtoken, {
    //             secure: false, 
    //             httpOnly: true,
    //         });
    
    //         return res.status(200).json('login success');
    //     }catch(error){
    //         console.log(error);
    //     }
    // }
}
const accesstoken = (res, req) =>{

}
const refreshtoken = (res, req) =>{

}
const loginSuccess = (res, req) =>{

}
const logout = (res, req) =>{

}
module.exports ={
    login,
    accesstoken,
    refreshtoken,
    loginSuccess,
    logout
}


