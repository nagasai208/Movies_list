import SearchItem from "../searchItem";
import MoviesList from "../MoviesList";
import { MoviesDashBoardMainDiv } from "./styledComponents";
const MoviesDashboard = () => {
  return (
    <MoviesDashBoardMainDiv>
      <SearchItem />
      <MoviesList />
    </MoviesDashBoardMainDiv>
  );
};
export default MoviesDashboard;
