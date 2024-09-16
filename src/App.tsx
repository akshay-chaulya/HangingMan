import { useCallback, useEffect, useMemo, useState } from "react"
import words from "./wordList.json"
import HangmanDrawing from "./HangmanDrawing";
import Keyboard from "./Keyboard";
import HangmanWord from "./HangmanWord";

const getWordToGuess = () => {
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWordToGuess())
  const [guessedLetters, setGuessdLetters] = useState<string[]>([]);

  const incorrectLetters = useMemo(() => {
    return guessedLetters.filter(letter => !wordToGuess.includes(letter))
  }, [guessedLetters, wordToGuess])

  const isLoser = incorrectLetters.length >= 6;
  const isWiner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isLoser || isWiner) return;

    setGuessdLetters(currentLetters => [...currentLetters, letter])
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (!key.match(/^[a-z]$/)) return

      e.preventDefault();
      addGuessedLetter(key);
    }

    document.addEventListener("keypress", handler);
    return () => document.removeEventListener("keypress", handler);
  }, [guessedLetters])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;

      if (key !== "Enter") return

      e.preventDefault();
      setGuessdLetters([]);
      setWordToGuess(getWordToGuess());
    }

    document.addEventListener("keypress", handler);
    return () => document.removeEventListener("keypress", handler);
  }, [])

  return (
    <div className="max-w-[800px] flex flex-col gap-8 mx-auto my-0 items-center">
      <div className="text-[2rem] text-center">
        {isWiner && "Winner! - Refresh to try again"}
        {isLoser && "Nice Try! - Refresh to try again"}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord
        reveal={isLoser} wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
      <div className="self-stretch p-4">
        <Keyboard
          activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
          disabled={isLoser || isWiner}
        />
      </div>
    </div>
  )
}

export default App
