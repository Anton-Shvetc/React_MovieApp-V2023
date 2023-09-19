// import { GlobalContext } from "../GlobalContext/GlobalState";
// import { Link } from "react-router-dom";
 import { MovieControls } from "../components/MovieControls";

interface MovieCardI {
  nameRu: string;
  posterUrl: string;
  ratingImdb: number;
  ratingKinopoisk: number;
  kinopoiskId: number;
  type: string;
}

export const MovieCard = ({
  nameRu,
  posterUrl,
  ratingImdb,
  ratingKinopoisk,
  kinopoiskId,
  type
}: MovieCardI) => {
  // const { ShowMoreInfo } = useContext(GlobalContext);

  return (
    <div>
      <div className="movie-card">
        {/* <Link to="/moreinfo" onClick={() => ShowMoreInfo(movie)}>
          <div className="movie-link"> </div>
        </Link> */}
        <div className="overlay"> </div>
        <div className="movie-card_title">{nameRu}</div>

        <img src={posterUrl} alt=""></img>

        <MovieControls type={type} movieId={kinopoiskId} />
        <div className="movie-card_average">
          <p>Рейтинг IMBD: {ratingImdb ? ratingImdb : "ND"}</p>
          <p>Рейтинг: {ratingKinopoisk}</p>
        </div>
      </div>
    </div>
  );
};
