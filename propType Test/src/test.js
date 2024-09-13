
function  Btn(props){
    console.log(props.people.name)
    return(
        <button>
            {props.value}
        </button>
    )
}
export default Btn;