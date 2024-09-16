const HEAD = (
    <div key="head" className="w-[50px] h-[50px] border-[10px] border-solid border-black rounded-[100%] absolute top-[50px] right-[-20px]"></div>
)

const BODY = (
    <div key="body" className="w-[10px] h-[100px] bg-black absolute top-[100px] right-0"></div>
)

const RIGHT_ARM = (
    <div key="right_arm" className="w-[100px] h-[10px] bg-black absolute top-[130px] right-[-100px] rotate-[-30deg] origin-bottom-left"></div>
)
const LEFT_ARM = (
    <div key="left_arm" className="w-[100px] h-[10px] bg-black absolute top-[130px] right-[10px] rotate-[30deg] origin-bottom-right"></div>
)

const RIGHT_LEG = (
    <div key="right_leg" className="w-[100px] h-[10px] bg-black absolute top-[190px] right-[-90px] rotate-[60deg] origin-bottom-left"></div>
)

const LEFT_LEG = (
    <div key="left_leg" className="w-[100px] h-[10px] bg-black absolute top-[190px] right-0 rotate-[-60deg] origin-bottom-right"></div>
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
    numberOfGuesses: number;
}

export default function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
    return (
        <div className="relative">
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div className="absolute top-0 right-0 h-[50px] w-[10px] bg-black"></div>
            <div className="h-[10px] w-[200px] bg-black ml-[120px]"></div>
            <div className="h-[400px] w-[10px] bg-black ml-[120px]"></div>
            <div className="h-[10px] w-[250px] bg-black"></div>
        </div>
    )
}
