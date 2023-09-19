import { useState, useEffect } from "react";
import axios from "axios";
import { MovieCard } from "./MovieCard";


interface filmsDataI {
  imdbId: string;
  kinopoiskId: number;
  nameEn: string | null;
  nameOriginal: string;
  nameRu: string;
  posterUrl: string;
  posterUrlPreview: string;
  ratingImdb: number;
  ratingKinopoisk: number;
  year: number;
}

export const TopFilmsPage = () => {
  const api_key = process.env.REACT_APP_API_KEY;

  const [filmsData, setFilmData] = useState<filmsDataI[]>([]);

  async function fetchData() {
    try {
      const response = await axios.get(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films`,
        {
          headers: {
            "X-API-KEY": api_key,
          },
        }
      );

      setFilmData(response.data.items);
    } catch {}
  }

  useEffect(() => {
    fetchData();
  }, []);
  console.log(filmsData)
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Фильмы</h1>
        </div>
        <div></div>
        <div className="movie-grid">
          {filmsData &&
            filmsData.map((filmItem : filmsDataI) => {
              return (
                <MovieCard
                  key={filmItem.kinopoiskId}
                  {...filmItem}
                  type="topfilms"
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
