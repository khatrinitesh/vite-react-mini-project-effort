import React, { useState } from 'react';

export default function ToDoExample() {
    const initialValue = [
        "Star Wars", "Return of the Jedi", "Empire Strikes Back",
      ]

      const [movies,setMovies]  = useState(initialValue);
  return (
    <div>
      {movies.map((movie) => {
        return(
            <div key={movie}>{movie}</div>
        )
      })}
    </div>
  )
}
