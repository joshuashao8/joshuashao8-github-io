// Joshua Shao

// Generates a random integer within a range
export function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random alien with attributes
export function generateAlien() {
  return {
    id: crypto.randomUUID(),
    speed: randomInRange(0, 1000),
    intelligence: randomInRange(0, 1000),
    mood: randomInRange(-100, 100),
  };
}

// Determine if alien escapes
export function doesAlienEscape(alien) {
  if (!alien || typeof alien !== "object") return false;

  const { speed, intelligence, mood } = alien;

  if (
    [speed, intelligence, mood].some(
      (val) => typeof val !== "number" || isNaN(val)
    )
  ) {
    return false;
  }

  const escapeScore = speed * 0.4 + intelligence * 0.5 + mood * 0.1; // the escape score formula (values intelligence more)
  return escapeScore > 300; // "process of elimination"
}

// Score logic
export function clevernessScore(alien) {
  return alien.intelligence * 2 + alien.speed;
}
