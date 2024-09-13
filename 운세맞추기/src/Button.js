import React from 'react';
import styled from "styled-components";
import { useState } from "react";
import './css/result.css'

function ButtonBox() {
    const [result, setresult] = useState("오늘의 운세는 뭘까아아요오오옹??");
    if(result === 9){
        setresult("오늘은 무슨일을해도 전부다 해결될겁니다!!!!!!!")
    }
    else if(result === 8){
        setresult("앗~ 조심 조심! 성급히 서두르다 급한 마음에 큰 실수를 할 수 있으니, 자신을 살짝 낮추는 지혜로움을 길러보세요. 육체적 휴식과 정신적 여유로움이 필요한 하루 이군요.")
    }
    else if(result === 7 ){
        setresult("흠...오늘 좀 앞길이 좀 깜깜하신데요?")
    }
    else if(result === 6) {
        setresult("오늘 좋아하는 사람한테 고백각?")
    }
    else if(result === 5){
        setresult("하는 일에서 발전과 기쁨이 따르는 하루 이군요. 특히 재혼을 고민하고 있다면 더는 걱정 근심 하지 말고 선택하세요. 오늘은 어떤 사안이든 뒤로 미루지 말고 결정이 빠를수록 좋아요.")
    }
    else if(result === 4){
        setresult("오늘 코딩좀 되는 날인데요? 당장 책상으로가서 키보드를 두드리세요")
    }
    else if(result === 3){
        setresult("지금 이런거 하고 있을때냐?")
    }
    else if(result === 2){
        setresult("혹시 이때까지 착하게 사셨나요...? 그렇지 않으시다면 뒤통수를 조심하세요..!")
    }
    else if(result === 1){
        setresult( "탕탕 후루후루 탕탕탕 후루루루ㅜㅜ 후배님들에게 맛있는걸 사주는건 어떠신가요?")
    }
    else if(result === 0){
        setresult("error!!!!! error!!!!! 비상사태애ㅐㅐ 오늘은 아무것도 하지마세요 진짜 그냥 집에 코오오옥 박혀있으세요!!!!!")
    }

    let ran;
    const textClass = document.getElementById("result")
  const rand = ()=>{
      ran = Math.floor(Math.random() * 10);
      setresult(ran)
      textClass.classList.add("colorA")
      setTimeout(()=>textClass.classList.remove("colorA"), 200)
  }

  return (
      <Container>
          <Box>
              <div className={'text'}>
                  <h1 className={'title'}>당신의 운세는...!</h1>
                  <h3 id={'result'} className={`resultText`}>{result}</h3>
              </div>
              <Button onClick={rand}>
                  확인하기
              </Button>
          </Box>
      </Container>
  );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
`;
const Box = styled.div`
    width: 40%;
    height: 70%;
    background-color: white;
    position: relative;
    border-radius: 30px;;
`;
const Button = styled.button`
    background-color: #63bcff;
    border-radius: 30px;
    border: 1px solid white;
    width: 50%;
    height: 10%;
    color: white;
    font-size: 20px;
    font-weight: 600;
    position: absolute;
    bottom: 20%;
    left: 24.5%;
    &:hover {
        background: #38aaff;
        cursor: pointer;
    }

    &:active {
        background-color: #0091ff;
        transition: 0.05s;
    }
`;
export default ButtonBox;

