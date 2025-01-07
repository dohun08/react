import { useRecoilState } from "recoil";
import { countAtom } from "./recoil/atom/countAtom";

function App() {
    const [count, setCount] = useRecoilState(countAtom);
    return (
        <div>
            <p>{count}</p>
             <button onClick={() => setCount(count + 1)}>클릭</button>
        </div>
    );
}

export default App;



