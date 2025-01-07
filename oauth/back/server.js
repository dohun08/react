const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
app.use(express.json());
app.use(cors())

app.post('/api/auth/login', async (req, res) => {
    const { token } = req.body;

    try {
        // Google API에 사용자 정보 요청
        const response = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        const userInfo = response.data;

        // 사용자 정보 처리 (예: 데이터베이스에 저장)
        console.log(userInfo);

        // 사용자 정보를 클라이언트에 응답
        res.status(200).json(userInfo);
    } catch (error) {
        console.error("Error fetching user info:", error);
        res.status(401).json({ message: 'Invalid token' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});