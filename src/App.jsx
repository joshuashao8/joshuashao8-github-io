import { useState } from "react";
import { generateAlien, doesAlienEscape, clevernessScore } from "./logic/alienLogic";

export default function App() {
  const [aliens, setAliens] = useState([]);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");

  const [speed, setSpeed] = useState(0);
  const [intelligence, setIntelligence] = useState(0);
  const [mood, setMood] = useState(0);

  function handleGenerate() {
    const newAlien = generateAlien();
    setAliens([...aliens, newAlien]);
  }

  function handleEscapeCheck() {
    if (aliens.length === 0) {
      setMessage("❗ No aliens to test!");
      return;
    }

    let escapeCount = 0;
    let totalScore = 0;

    aliens.forEach((alien) => {
      if (doesAlienEscape(alien)) {
        escapeCount++;
        totalScore += clevernessScore(alien);
      }
    });

    setScore(totalScore);
    setMessage(`${escapeCount} alien(s) escaped!`);
  }

  return (
    <>
      <div className="layout">

        <div id="left">
          <h1 className="title">Alien Zoo Escape 👾
          </h1>
          <h2>By: Joshua Shao (G9)</h2>
          <h4>2025-11-19, Hack the Net Club</h4>

          <button onClick={handleGenerate}>Generate Alien</button>
          <button onClick={handleEscapeCheck} style={{ marginLeft: "10px" }}>
            Check Escape
          </button>

          <p>{message}</p>



        </div>

        <div id="right">
          <h1>Total Cleverness Score: {score}</h1>
          <h2>Aliens:</h2>
          <ul>
            {aliens.map((alien) => (
              <li key={alien.id}>
                Speed: {alien.speed}, Intelligence: {alien.intelligence}, Mood: {alien.mood}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
