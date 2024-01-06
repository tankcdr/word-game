import React from "react";
import Guess from "../Guess";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ submittedGuesses }) {
  return (
    <div className="guest-results-wrapper">
      {range(NUM_OF_GUESSES_ALLOWED).map((row) => {
        return (
          <Guess
            key={row}
            value={submittedGuesses[row] ? submittedGuesses[row] : ""}
          />
        );
      })}
    </div>
  );
}

export default GuessResults;
