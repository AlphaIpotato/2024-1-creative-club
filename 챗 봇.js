// 필요한 모듈 불러오기
const express = require('express');
const bodyParser = require('body-parser');

// Express 앱 생성
const app = express();
const port = 3000;

// JSON 파싱을 위한 미들웨어 설정
app.use(bodyParser.json());

// 챗봇 응답 함수
function respondToUser(message) {
    // 간단한 응답 로직. 여기서는 사용자의 입력을 그대로 다시 보냄.
    return `당신: ${message}`;
}

// 챗봇 엔드포인트
app.post('/chat', (req, res) => {
    const userMessage = req.body.message;
    const botResponse = respondToUser(userMessage);
    res.json({ message: botResponse });
});

// 서버 시작
app.listen(port, () => {
    console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});

