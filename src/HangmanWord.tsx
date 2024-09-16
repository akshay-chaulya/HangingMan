type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
}


export default function HangmanWord({ reveal = false, guessedLetters, wordToGuess }: HangmanWordProps) {

  return (
    <div className="flex gap-1 text-8xl font-bold uppercase font-mono">
      {wordToGuess.split("").map((latter, index) => (
        <span key={index} className="border-b-[.1em] border-solid border-black">
          <span
            className={`${!guessedLetters.includes(latter) && reveal ? "text-red-500" : "text-black"}`}
            style={{
              visibility: guessedLetters.includes(latter) || reveal
                ? "visible" : "hidden"
            }}>{latter}</span>
        </span>
      ))}
    </div>
  )
}
