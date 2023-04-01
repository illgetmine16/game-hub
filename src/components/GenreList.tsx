import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import { Game } from "../hooks/useGames";
import apiClient from "../services/api-client";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenres();

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
