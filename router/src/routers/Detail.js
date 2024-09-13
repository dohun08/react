import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {wait} from "@testing-library/user-event/dist/utils";

function Detail(){
    const {id} = useParams()
    const getMovie = async ()=>{
        const response = await fetch(`https://yts.mx/api/v2/list_movies.json?movie_id=${id}`);
        const json = await response.json()
        console.log(json)
    }
    useEffect(async () => {
        getMovie();
    }, []);
    return(
        <h2>Detail</h2>
    )
}

export default Detail;