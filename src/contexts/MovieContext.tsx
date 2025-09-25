import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

// provide state to any of the components wrapped inside it
export const MovieProvider = () => {};
