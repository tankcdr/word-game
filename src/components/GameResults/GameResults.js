import React from "react";

function GameResults({ answer, solved, submittedGuesses }) {
  const bannerClass = solved ? "happy banner" : "sad banner";
  return (
    <div className={bannerClass}>
      <p>
        {solved && (
          <>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{submittedGuesses.length} guesses</strong>.
          </>
        )}
        {!solved && (
          <>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </>
        )}
      </p>
    </div>
  );
}

export default GameResults;
