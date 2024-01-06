import React from "react";
import { range } from "../../utils";
import { WORLD_LENGTH } from "../../constants";

function Guess({ value }) {
  function getClassForCell(col, modifier) {
    if (col === 0) {
      return `cell first-of-type ${modifier}`;
    } else if (col === WORLD_LENGTH - 1) {
      return `cell last-of-type ${modifier}`;
    }
    return `cell ${modifier}`;
  }

  return (
    <p className="guess">
      {range(0, WORLD_LENGTH).map((col) => {
        return (
          <span
            key={crypto.randomUUID()}
            className={getClassForCell(col, value ? value[col].status : "")}
          >
            {value ? value[col].letter : ""}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
