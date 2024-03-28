import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef(); //new hook
  const [enteredPlayerName, setEnterPlayerName] = useState(null);

  function handleClick() {
    setEnterPlayerName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        {/* created the reference for the input element */}
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
