import { useState, useEffect } from "react";
import axios from "axios";
import { MovieCard } from "./MovieCard";

export const TopFilmsPage = () => {
  const api_key = process.env.REACT_APP_API_KEY;

  const [filmsData, setFilmData] = useState<any>();

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
console.log(api_key);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Фильмы</h1>
        </div>
        <div></div>
        <div className="movie-grid">
          {filmsData &&
            filmsData.map((filmItem : any) => {
              return (
                <MovieCard
                  key={filmItem.kinopoiskId}
                  {...filmItem}
                  // key={items.id}
                  // type="topseries"
                  // name={items.name}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
