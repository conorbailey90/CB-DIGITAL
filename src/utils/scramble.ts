// utils/scrambleText.ts
const mixAnimChars = "▀▊▋▌▍▎▏▐▕▖▗▘▙▚▛▜▝▞▟";
// const mixAnimChars = "▌▍▎▏▐▕▖▗▘▚▝▞▟";

export interface ScrambleOptions {
  maxIterations?: number;
  scrambleInterval?: number;
  customChars?: string;
}

export const scrambleText = (
  text: string,
  onUpdate: (chars: string[]) => void,
  options: ScrambleOptions = {}
) => {
  const {
    maxIterations = 10,
    scrambleInterval = 30,
    customChars = mixAnimChars,
  } = options;

  const getChar = () =>
    customChars[Math.floor(Math.random() * customChars.length)];

  const originalChars = text.split('');
  let iteration = 0;

  const interval = setInterval(() => {
    const scrambledChars = originalChars.map((char, i) => {
      if (char === ' ') return ' '; // Preserve spaces
      if (iteration < maxIterations) {
        // Occasionally leave the correct character to create effect
        return Math.random() > iteration / maxIterations
          ? getChar()
          : originalChars[i];
      }
      return originalChars[i];
    });

    onUpdate(scrambledChars);

    iteration++;
    if (iteration > maxIterations) {
      clearInterval(interval);
      onUpdate(originalChars); // Ensure final state is correct
    }
  }, scrambleInterval);

  // Return cleanup function
  return () => clearInterval(interval);
};