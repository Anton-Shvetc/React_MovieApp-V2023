import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Movie {
  id: number;
  type: string;
}

interface InitialState {
  watchlist: Movie[];
  watched: Movie[];

}


const initialState: InitialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist") || "")
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched") || "")
    : [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    
    addMovieToWatchlist: (state, action: PayloadAction<Movie>) => {
      const isOnWatchlist = state.watchlist.some(
        (movie) => movie.id === action.payload.id
      );
      const isWatched = state.watched.some(
        (movie) => movie.id === action.payload.id
      );

        if (isOnWatchlist || isWatched) {
          alert("The movie is already on your watchlist or has been watched.");
          return;
        }
      state.watchlist = [action.payload, ...state.watchlist];
      localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    },
    removeMovieFromWatchlist: (state, action: PayloadAction<Movie>) => {
        state.watchlist = state.watchlist.filter((movie) => movie.id !== action.payload.id);
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    },

    addMovieToWatched: () => {},
    removeFromWatched: () => {},
    showMoreInfo: () => {},
    clear: () => {}
  },
});


export const {
  addMovieToWatchlist,
  removeMovieFromWatchlist,
  addMovieToWatched,
  removeFromWatched,
  showMoreInfo,
  clear,
} = movieSlice.actions;

export default movieSlice.reducer;