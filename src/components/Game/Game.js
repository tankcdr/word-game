import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import GameResults from "../GameResults";
import { checkGuess } from "../../game-helpers";
import { WORLD_LENGTH } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [submittedGuesses, setSubmittedGuesses] = React.useState([]);
  const [gameFinished, setGameFinished] = React.useState(false);
  const [gameSolved, setGameSolved] = React.useState(false);

  function handleSubmittedGuess(guess) {
    const { solved, result } = checkGuess(guess, answer);
    setSubmittedGuesses([...submittedGuesses, result]);
    setGameSolved(solved);
    setGameFinished(solved || submittedGuesses.length >= WORLD_LENGTH);
  }

  return (
    <>
      <GuessResults submittedGuesses={submittedGuesses} />
      <GuessInput
        gameFinished={gameFinished}
        setSubmittedGuess={handleSubmittedGuess}
      />
      {/* Slight deviation to test component mounting */}
      {gameFinished && (
        <GameResults
          answer={answer}
          solved={gameSolved}
          submittedGuesses={submittedGuesses}
        />
      )}
    </>
  );
}

export default Game;
