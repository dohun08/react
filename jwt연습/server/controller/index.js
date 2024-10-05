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
            res.cookie("accesstoken", accessToken, {
                secure:false,
                httpOnly:true,
            })
            
            res.cookie("refreshtoken", refreshToken, {
                secure:false,
                httpOnly:true,
            })

            return res.status(200).json({ message: 'Login success', accessToken, refreshToken });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Something went wrong' });
        }
    }
}
const accesstoken = (req, res) =>{
    try{
        const token = req.cookies.accesstoken;
        const data = jwt.verify(token, process.env.ACCESS_SECRET);

        const userData = userDataBase.filter((item)=>{
            return item.email === data.email;
        })[0];
        
        const {password, ...others} = userData;
        res.status(200).json(others);
    }catch(error){
        res.status(500).json(error);
    }
}
const refreshtoken = (req, res) => {
    try {
        // 쿠키에서 refreshToken을 가져오기
        const token = req.cookies.refreshtoken;  // 'req.cookies'로 수정
        
        // 토큰이 없는 경우 처리
        if (!token) {
            return res.status(403).json({ message: 'Refresh token not found' });
        }

        // refresh 토큰 검증
        const data = jwt.verify(token, process.env.REFRESH_SECRET);

        // 유저 데이터베이스에서 유저 정보를 찾기
        const userData = userDataBase.filter((item) => {
            return item.email === data.email;
        })[0];

        // 유저가 없는 경우 처리
        if (!userData) {
            return res.status(404).json({ message: 'User not found' });
        }

        console.log(userData);

        // 새로운 accessToken 발급
        const accessToken = jwt.sign({
            id: userData.id,
            email: userData.email,
            userName: userData.userName,
        }, process.env.ACCESS_SECRET, {
            expiresIn: '1m',
            issuer: 'About Tech',
        });

        // 새로 발급된 accessToken을 쿠키에 저장
        res.cookie("accesstoken", accessToken, {
            secure: false,
            httpOnly: true,
        });

        // 성공적으로 토큰을 재발급했다는 응답
        res.status(200).json("Access token recreated");
    } catch (error) {
        console.error("Error during refresh token process: ", error);
        res.status(500).json({ message: 'Error during token refresh' });
    }
};

const loginSuccess = (req, res) =>{
    try{
        const token = req.cookies.accessToken;
        const data = jwt.verify(token, process.env.ACCESS_SECRET);

        const userData = userDataBase.filter((item)=>{
            return data.email === item.email;
        })[0];

        res.status(200).json(userData);

    }catch(error){
        res.status(500).json(error);
    }
}
const logout = (req, res) =>{
    try{
        res.cookie('accesstoken', '');
        res.status(200).json("logout success");
    }catch(error){
        res.status(500).json(error);
    }
}

module.exports ={
    login,
    accesstoken,
    refreshtoken,
    loginSuccess,
    logout
}


