import './App.css';
import Btn from './test'
import {useState} from "react";
import PropTypes from "prop-types";

Btn.propTypes = {
    value : PropTypes.string,
    fruits : PropTypes.array,
    people : PropTypes.object
}
function App() {
    const [s, ss] = useState({
        name:'ddd',
        kim:'sumin'
    })
  return (
    <>
      <Btn value = "confirm" fruits = {["apple", "banana"]} people = {s}></Btn>
    </>
  );
}

export default App;
