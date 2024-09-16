import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
function Movie(props){
    console.log(props.id)
    return(
        <div>
            <div>
                <Link to={`/${props.id}`}><h2>{props.title}</h2></Link>
                <img src={props.img} alt={props.title}/>
                <p>{props.summary}</p>
                <ul>
                    {props.genres.map((event) => (
                        <li>{event}</li>
                    ))}
                </ul>
            </div>
        </div>

    );
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    img : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;