import React from "react";
import WheelSet from "./WheelSet";
import {range} from "../utils/utils";

export default function NewYearWagon() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col">
                <div className="flex flex-row items-end justify-center gap-4 lg:gap-8">
                    <PartyHat/>
                    <Balloon type={ "bg-gradient-to-r from-emerald-400 to-cyan-400"}/>
                    <Bottle/>
                </div>
            </div>
            <div
                className="flex bg-sky-700 border-b-4 lg:border-b-8 border-t-4 lg:border-t-8  border-yellow-600 rounded-b-lg z-50  h-20 lg:h-40 w-[17rem] lg:w-[34rem] items-center justify-center shadow-inner">
                <div
                    className="m-2 flex h-16 w-full flex-col items-center justify-center rounded-lg text-xl text-white shadow-inner text-silver-500 font-podkova lg:m-4 lg:h-32 lg:text-3xl">
                    <p>Felice Anno Nuovo</p> <p>Srečno novo leto</p>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="mr-2 ml-2 h-4 rounded-b-3xl bg-black lg:mr-4 lg:ml-4 lg:h-8"/>
                <WheelSet kind={{type: "WoodWagon", size: "small"}}/>
            </div>
        </div>
    );
}

function PartyHat() {
    return (
        <div className="flex flex-col items-center">
            <div
                className="z-50 -mb-2 h-4 w-4 bg-lime-300 lg:-mb-4 lg:h-8 lg:w-8"
                style={{
                    clipPath:
                        "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                }}
            />
            <div
                className="w-10 lg:w-20 h-[4.5rem] lg:h-36"
                style={{
                    backgroundImage:
                        "linear-gradient(45deg, #dfe238 5.56%, #ff4b8e 5.56%, #ff4b8e 27.78%, #1ca1f3 27.78%, #1ca1f3 50%, #dfe238 50%, #dfe238 55.56%, #ff4b8e 55.56%, #ff4b8e 77.78%, #1ca1f3 77.78%, #1ca1f3 100%)",
                    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                }}
            />
        </div>
    );
}

function Bottle() {
    return (
        <div className="flex flex-col items-center">
            <Tap/>
            <div
                className="rounded-t-full   bg-green-700 	w-[4.875rem] lg:w-[9.75rem]	  z-50 	h-[2.5rem] lg:h-[8rem]"/>
            <div className="bg-green-700 w-[4.875rem] lg:w-[9.75rem] h-[2rem]	lg:h-[6rem] flex">
                <div
                    className="bg-blue-100 mb-1 lg:mb-2 w-[4.875rem] lg:w-[9.75rem] text-xl lg:text-4xl	 flex h-[2rem]	lg:h-[6rem] opacity-90 text-center text-yellow-600 font-permanentmarker align-center items-center justify-center">
                    2023
                </div>
            </div>
        </div>
    );
}

function Balloon({type}) {
    const [detached, setDetached] = React.useState(false);

    const handleChange = () => {
        if (!detached) {
            setDetached(true);
        }
    };

    return (
        <>
            {detached && (
                <div
                    className="-mb-4 flex flex-col items-center justify-center animate-popcap lg:-mb-8"
                    style={{transform: `translateY(-64rem)`}}
                >
                    <div
                        className={`w-[4rem] h-[5rem] lg:w-[8rem] lg:h-[10rem] ${type} shadow-inner`}
                        style={{borderRadius: "50% 50% 50% 50% / 32% 32% 68% 68% "}}
                    />
                    <div
                        className={`lg:h-4 lg:w-4 h-2 w-2 ${type} border-b-1  border-t-2 lg:border-t-4 border-gray-500`}
                        style={{clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)"}}
                    />
                    <div className="bg-gray-500 h-[5rem] w-[0.0625rem] lg:h-[10rem] lg:w-[0.125rem]"/>
                </div>
            )}
            {!detached && (
                <div
                    className="-mb-4 flex flex-col items-center justify-center animate-balloon lg:-mb-8"
                    style={{
                        transition: "transform 0.5s ease",
                    }}
                    onClick={handleChange}
                >
                    <div
                        className={`w-[4rem] h-[5rem] lg:w-[8rem] lg:h-[10rem] ${type} shadow-inner`}
                        style={{borderRadius: "50% 50% 50% 50% / 32% 32% 68% 68% "}}
                    />
                    <div
                        className={`lg:h-4 lg:w-4 h-2 w-2 ${type} border-b-1  border-t-2 lg:border-t-4 border-gray-500`}
                        style={{clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)"}}
                    />
                    <div className="bg-gray-500 h-[5rem] w-[0.0625rem] lg:h-[10rem] lg:w-[0.125rem]"/>
                </div>
            )}
        </>
    );
}

function Tap() {
    const [openBottle, setOpenBottle] = React.useState(false);

    const handleChange = () => {
        if (!openBottle) {
            setOpenBottle(true);
        }
    };

    return (
        <>
            {openBottle && (
                <>
                    <div
                        className="mr-1 ml-1 h-4 w-3 bg-yellow-500 opacity-0 animate-popcap lg:h-8 lg:w-6"
                        style={{transform: `translateY(-64rem)`}}
                    />
                    <div className="relative">
                        <Confetti/>
                    </div>
                </>
            )}
            {!openBottle && (
                <div
                    className="mr-1 -mb-2 ml-1 h-4 w-3 animate-bounce bg-yellow-500 lg:-mb-4 lg:h-8 lg:w-6"
                    onClick={handleChange}
                />
            )}

            <div className="z-40 h-1 w-4 border-yellow-700 bg-yellow-600 border-t-1 lg:h-2 lg:w-8 lg:border-t-2"/>
            <div
                className="z-40 h-1 w-6 border-yellow-700 bg-yellow-600 border-t-1 border-b-1 lg:h-2 lg:w-12 lg:border-t-2 lg:border-b-2"/>
            <div className="z-40 -mb-1 h-5 w-4 bg-yellow-600 lg:h-10 lg:w-8"/>
        </>
    );
}

const colors = [
    "bg-gradient-to-b from-violet-600 to-indigo-600",
    "bg-gradient-to-b from-cyan-500 to-blue-500",
    "bg-gradient-to-b from-amber-500 to-pink-500",
    "bg-gradient-to-b from-rose-400 to-red-500",
    "bg-gradient-to-r from-fuchsia-500 to-pink-500",
    "bg-gradient-to-r from-lime-400 to-lime-500",
];

const sizes = ["h-2 w-2 rounded-full", "h-4 w-2", "h-2 w-2", "w-2 h-4"];

function Confetto() {
    let color = Math.floor(Math.random() * colors.length - 1) + 1;
    let size = Math.floor(Math.random() * sizes.length - 1) + 1;

    let a = Math.floor(Math.random() * 190) - 100;
    let b = Math.floor(Math.random() * 50) - 100;
    let c = Math.floor(Math.random() * 360);

    let d = "translate3d(" + a + "px," + b + "px, 0) rotate(" + c + "deg)";

    return (
        <div
            className={`animate-bang absolute opacity-0 ${colors[color]} ${sizes[size]} `}
            style={{transform: `${d}`}}
        />
    );
}

function Confetti() {
    return range(0, 23).map((index) => <Confetto key={index}/>);
}

