const fetchGet = async (page)=>{
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?page=${page}`, {
        headers:{
            "Authorization":`Bearer ${process.env.REACT_APP_API_KEY}`
        }
    })
    return response.json();
}