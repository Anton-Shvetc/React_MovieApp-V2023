import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Movie {
  id: number;
  title: string;
}

interface InitialState {
  watchlist: Movie[];
  watched: Movie[];
  watched2: Movie[];
}


const initialState: InitialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist") || "")
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched") || "")
    : [],
  watched2: localStorage.getItem("watched2")
    ? JSON.parse(localStorage.getItem("watched2") || "")
    : [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovieToWatchlist: (state, action: PayloadAction<Movie>) => {
      state.watchlist = [action.payload, ...state.watchlist];
    },
    removeMovieFromWatchlist: () => {},

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