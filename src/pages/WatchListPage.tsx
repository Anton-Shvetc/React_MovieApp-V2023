// import movieSlice from "../slices/movieSlice";

import { useEffect, useState } from "react";
import store from "../store/store";
import { MovieCard } from "./MovieCard";
import { useSelector } from "react-redux";
import {
  TextField,
  Grid,
  Container,
  Button,
  Typography,
  Box
} from "@mui/material";

export const WatchListPage = () => {
  const currentState = store.getState();

  const watchlist = useSelector((state: any) => state.movie.watchlist);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const localStorageWatchlist = localStorage.getItem("watchlist");
    if (localStorageWatchlist) {
      setMovies(JSON.parse(localStorageWatchlist));
    } else {
      setMovies(watchlist);
    }
  }, [watchlist]);

  console.log(movies);

  return (
    <Container>
      {movies.length === 0 ? (
        <Box>
          <Typography> Нет фильмов в списке</Typography>
        </Box>
      ) : (
        //  <Grid container spacing={2}>
        //    {movies.map((movie) => (
        //      <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
        //        <MovieCard movie={movie} />
        //      </Grid>
        //    ))}
        //  </Grid>
        <Grid> Данные есть </Grid>
      )}
    </Container>
  );
};

//  <div className="movie-page">
//    <div className="container">
//      <div className="header">
//        <h1 className="heading">Список для просмотра</h1>

//        <span className="count-pill">
//          {movielist.length} {movielist.length === 1 ? "Movie" : "Movies"}
//        </span>
//      </div>

//      {movielist.length > 0 ? (
//        <div className="movie-grid">
//          {movielist.map((movie) => {
//            if (movie.title !== undefined) {
//              return (
//                <MovieCard
//                  movie={movie}
//                  key={movie.id}
//                  type="watchlist"
//                  name={movie.title}
//                />
//              );
//            } else {
//              return (
//                <MovieCard
//                  movie={movie}
//                  key={movie.id}
//                  type="watchlist"
//                  name={movie.name}
//                />
//              );
//            }
//          })}
//        </div>
//      ) : (
//        <h2 className="no-movies">Нет фильмов в списке </h2>
//      )}
//    </div>
//  </div>
