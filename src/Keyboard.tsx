import style from "./Keyboard.module.css"

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
]

type KeyboardProps = {
  addGuessedLetter: (latter: string) => void;
  activeLetters: string[];
  inactiveLetters: string[];
  disabled?: boolean;
}

export default function Keyboard({ disabled, activeLetters, inactiveLetters, addGuessedLetter }: KeyboardProps) {
  return (
    <div className="grid gap-2" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))" }}>
      {KEYS.map(key => {
        const isActive = activeLetters.includes(key);
        const isInactive = inactiveLetters.includes(key);

        return <button
          onClick={() => addGuessedLetter(key)}
          className={`
            ${style.btn} 
          ${isActive ? style.active : ""}
          ${isInactive ? style.inactive : ""}
          `}
          disabled={isInactive || isActive || disabled}
          key={key}
        >{key}</button>
      })}
    </div>
  )
}
