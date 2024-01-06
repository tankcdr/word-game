import React from "react";

function GuessInput({ gameFinished, setSubmittedGuess }) {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const upperGuess = guess.toUpperCase();
    console.log({ upperGuess });
    setSubmittedGuess(upperGuess);
    setGuess("");
  }

  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => handleSubmit(event)}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          disabled={gameFinished}
          type="text"
          minLength="5"
          maxLength="5"
          value={guess}
          onChange={(event) => {
            setGuess(event.target.value);
          }}
        />
      </form>
    </>
  );
}

export default GuessInput;
