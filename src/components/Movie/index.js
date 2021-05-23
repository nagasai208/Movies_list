import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../index.css";

import {EachMovieMainDiv} from './styledComponents'
const imageUrl = "https://image.tmdb.org/t/p/w500";

const Movie = ({ id, image, title, releaseDate, desc, voteAverage }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="movies">
      <EachMovieMainDiv>
      <div className="img-container">
        <Link to={`/movies/${id}`} className="btn btn-primary btn-details">
          <img src={`${imageUrl}${image}`} alt={id} />
        </Link>
      </div>
      <div className="movies-footer">
        <h4>MovieName: {title}</h4>

        <p>
          <span className="span-class">Description : </span>
          {readMore ? desc : `${desc.substring(0, 100)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "  read more"}
          </button>
        </p>
        <p>Release-Date : {releaseDate}</p>
        <p>Rating {voteAverage}</p>
        <p>
          
        </p>
        <Link to={`/movies/${id}`} className="btn btn-primary btn-details">
          View Details
        </Link>
        </div>
      </EachMovieMainDiv>
    </article>
  );
};

export default Movie;
