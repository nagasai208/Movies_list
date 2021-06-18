import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Loading from "../Loading";
import { Image, SingleMovieMainDiv, SingleMovieDiv, MovieTitle, DataDiv, Goback } from "./styledComponents";

const imageUrl = "https://image.tmdb.org/t/p/w500";
const SingleMovie = () => {
  const { id } = useParams();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [singleMovie, setSingleMovie] = useState(null);
  const getMovie = async () => {
    setLoading(true);
    try {
      console.log(id, 'id')
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${parseInt(
          id.slice(0),
          10
        )}?api_key=2796089069f7e1ab4a272ee08e4d6561`
      );
      const data = await response.json();
      console.log(data, 'dhfg')
      if (data) {
        const {
          budget,
          genres,
          id,
          original_language: language,
          original_title,
          overview: desc,
          popularity,
          poster_path,
          release_date: releaseDate,
          revenue,
          runtime,
          spoken_languages: english,
          status,
          vote_average: voteAverage,
          vote_count: voteCount
        } = data;

        const newMovie = {
          budget,
          genres,
          id,
          language,
          original_title,
          desc,
          popularity,
          poster_path,
          releaseDate,
          revenue,
          runtime,
          english,
          status,
          voteAverage,
          voteCount
        };
        setSingleMovie(newMovie);
      } else {
        setSingleMovie(null);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!singleMovie) {
    return <div>No movies displayed</div>
  }
  else {

    return (
      <SingleMovieMainDiv>
        <Goback onClick={() => history.goBack()}>Back</Goback>
        <MovieTitle>{singleMovie.original_title}</MovieTitle>
        <SingleMovieDiv>
          <Image src={`${imageUrl}${singleMovie.poster_path}`} alt={singleMovie.id} />
          <DataDiv>
            <p>Description:{singleMovie.desc}</p>
            <p>Status:{singleMovie.status}</p>
            <p>Rating:{singleMovie.voteAverage}</p>
            <p>Genres:
              {
                singleMovie.genres !== null &&
                singleMovie.genres.length !== 0 &&
                singleMovie.genres.map((eachGenrs) => {
                  return <label>{eachGenrs.name},</label>;
                })}
            </p>
            <p>Budget:{singleMovie.budget}</p>
            <p>Popularity:{singleMovie.popularity}</p>
            <p>RunTime:{singleMovie.runtime}</p>
            <p>VoteCount:{singleMovie.voteCount}</p>
          </DataDiv>
        </SingleMovieDiv>
      </SingleMovieMainDiv>
    );
  }
};

export default SingleMovie;
