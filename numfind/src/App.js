
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState} from "react";
import RemImage from './assets/Rem.jpg';
import RamImage from './assets/Ram.jpg';
import remaudio from './assets/audio/Rem.m4a'
import ramaudio from './assets/audio/Ram.m4a'

function App() {
    const [value, setValue] = useState("");
    const [rand, setrand] = useState(Math.floor(Math.random() * 101));
    const [count, setcount] = useState(4);

    const confirm = ()=> { //확인 버튼을 눌렸을때 input 안에있는 값이 어떤지 판단해줌
        console.log(count)
        console.log(rand)
        setcount(count-1)
        if(count === 0 && value!=rand){ //모든 기회 소진후 실패 했을때
            alert("실패했습니다....좀 허.접 이시네용 ㅎㅎㅎㅎㅎ")
            const Ram = document.getElementById("Ram");
            Ram.style.display="block";
            const audio = document.getElementById('audio2');
            audio.play();
            setTimeout(()=>{Ram.style.display="none"}, 2500)
            reset()
        }
        else if(rand>value){ //인풋안에 있는 숫자가 목표숫자보다 작을때
            alert(`UP, 남은기회 ${count}`)
        }
        else if(rand<value){ //인풋안에 있는 숫자가 목표숫자보다 클때
            alert(`DOWN, 남은기회 ${count}`)
        }
        else if(value==rand){ //성공했을때
            alert("축하합니다 맞추셨군요!!")
            const Rem = document.getElementById("Rem");
            Rem.style.display="block";
            const audio = document.getElementById('audio');
            audio.play();
            setTimeout(()=>{Rem.style.display="none"}, 2500)
            reset()
        }
        setValue('')
    }
    const reset = ()=>{ //게임을 리셋시켜줌
        setcount(4)
        setrand(Math.floor(Math.random() * 101))
    }
    function Enter(event) { //엔터키를 눌러도 확인이 되게끔, 편리하게 설정
        if (event.key === 'Enter') {
            event.preventDefault(); //폼 제출 막아줌
            document.getElementById("myButton").click();
        }
    }
    return (
        <div className="containerBox">
            <img id={"Ram"} src={RamImage} className={"Ram"} alt={"Ram"}/>
            <audio id="audio" autoPlay>
                <source src={remaudio} type="audio/mp4"/>
            </audio>
            <audio id="audio2" autoPlay>
                <source src={ramaudio} type="audio/mp4"/>
            </audio>
            <img id={"Rem"} src={RemImage} className={"Rem"} alt={"Rem"}/>
            <input type={"button"} className={"btn btn-light"} value={"다시시작하기"} onClick={() => {
                alert("다시 시작되었습니다.");
                reset()
            }}/>

            <form className="whiteBox" >
                <h1>1~100까지 중의 숫자를 맞춰보거라</h1>
                <div className="input-group input-group-sm mb-3 inputBox">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="숫자를 입력해주세요"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onKeyDown={(event) => {
                            Enter(event)
                        }}
                    />
                </div>
                <input id={"myButton"} type={"button"} className="btn btn-primary inputButton" onClick={confirm}
                       value={"확인하기"}/>
            </form>
        </div>
    );
}

export default App;