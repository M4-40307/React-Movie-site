import axios from 'axios';
import React, { useEffect, useState, } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ItemInfoPage() {
    const [item, setItem] = useState(null);
    const [error, setError] = useState("");
    const { id } = useParams();
    const nav = useNavigate();

    useEffect(() => {
        doApi();
    }, [id]);

    const doApi = async () => {
        const url = `https://www.omdbapi.com/?apikey=90781f94&i=${id}`;

        try {
            const { data } = await axios.get(url);

            if (data.Response === "True") {
                setItem(data);
            } else {
                setError("Item with that id was not found");
            }
        } catch (err) {
            console.log(err);
            setError("error in loading the movie");
        }
    };

    if (error)
        return <h3 className="text-danger">{error}</h3>;

    if (!item)
        return <h3>Loading...</h3>;

    return (
        <div className="container text-center">


            <h2>{item.Title}</h2>

            {item.Poster && item.Poster !== "N/A" && (
                <img src={item.Poster} alt={item.Title} className="img-fluid mb-3" style={{ maxWidth: "300px" }}/>

            )}

            <p>Title: {item.Title}</p>
            <p>Actors: {item.Actors}</p>
            <p>Rated: {item.imdbRating}</p>
            <p>Plot: {item.Plot}</p>

            <button
                className="btn btn-purp shadow-sm mb-3"
                onClick={() => nav(-1)}>
                Back
            </button>
        </div>
    );
}

  
  
  
  
   
