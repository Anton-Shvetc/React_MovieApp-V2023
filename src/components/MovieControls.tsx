// import React, { useContext } from "react";
// import { GlobalContext } from "../GlobalContext/GlobalState";
// import useAuth from "../hooks/useAuth";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AiOutlineEye } from "react-icons/ai";
import { TbEyePlus } from "react-icons/tb";
import { BsTrash } from "react-icons/bs";

// import {AiFillEyeInvisible} from "react-icons/fa";



export const MovieControls = ({ type, movieId } : {type: string, movieId: number}) => {
  // const {
  //   removeMovieFromWatchlist,
  //   addMovieToWatched,
  //   moveToWatchlist,
  //   removeFromWatched,
  // } = useContext(GlobalContext);
  // const auth = useAuth();

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button
            className="ctrl-btn" /* onClick={() => addMovieToWatched(movie)} */
          >
            <AiOutlineEye />
          </button>

          <button
            className="ctrl-btn"
            /*onClick={() => removeMovieFromWatchlist(movie.id) */
          >
            <BsTrash />
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button
            className="ctrl-btn" /* onClick={() => moveToWatchlist(movie)} */
          >
            <TbEyePlus />
          </button>

          <button
            className="ctrl-btn"
            /*  onClick={() => removeFromWatched(movie.id)}*/
          >
            <BsTrash />
          </button>
        </>
      )}

      {/* {auth.isLoaded &&
        (auth.user ? ( */}
      <>
        {type === "topfilms" && (
          <>
            <button
              className="ctrl-btn"
              // onClick={() => moveToWatchlist(movie)}
            >
              {/* <i className="fa-fw far fa-eye-slash"></i> */}
              <TbEyePlus />
            </button>

            <button
              className="ctrl-btn"
              // onClick={() => addMovieToWatched(movie)}
            >
              {/* <i className="fa-fw far fa-eye"></i> */}
              <AiOutlineEye />
            </button>
          </>
        )}
        {type === "watched2" && (
          <>
            <button
              className="ctrl-btn"
              // onClick={() => moveToWatchlist(movie)}
            >
              <i className="fa-fw far fa-eye-slash"></i>
            </button>

            <button
              className="ctrl-btn"
              // onClick={() => addMovieToWatched(movie)}
            >
              <i className="fa-fw far fa-eye"></i>
            </button>
          </>
        )}
      </>
      {/* ) : (
          <></>
        ))} */}
    </div>
  );
};
