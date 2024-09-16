import {Context} from "./Context/themContext";
import {useState} from "react";
import DarkMode from "./Components/DarkMode";
function useContext() {
  const [Dark, setDark] = useState(false)
  return (
    <>
      <Context.Provider value={{Dark, setDark}}>
        <DarkMode></DarkMode>
      </Context.Provider>
    </>
  );
}

export default useContext;
