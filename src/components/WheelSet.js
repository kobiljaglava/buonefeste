import React from "react";

export default function WheelSet({kind}) {
    let s, t;

    if (kind.type === "Locomotive") {
        if (kind.size === "small") {
            s =
                "ml-6 lg:ml-12 mr-4 lg:mr-8 -mt-3 lg:-mt-6 w-[7.25rem] lg:w-[14.5rem]";
            t =
                "mt-3 lg:mt-6 w-24 lg:w-48 h-2 lg:h-4 -ml-5 lg:-ml-10 -mr-5 lg:-mr-10";
        } else {
            s = "ml-8 lg:ml-16 mr-8 lg:mr-16 -mt-3 lg:-mt-6 w-w-[13rem] lg:w-[26rem]";
            t =
                "mt-6 lg:mt-12 w-40 lg:w-80 h-4 lg:h-8 -ml-10 lg:-ml-20 -mr-10 lg:-mr-20";
        }
    } else if (kind.type === "Wagon") {
        s = "ml-8 lg:ml-16 mr-8 lg:mr-16 -mt-3 lg:-mt-6 w-[8.5rem] lg:w-[17rem]";
        t = "mt-3 lg:mt-6 w-28 lg:w-56 h-2 lg:h-4 -ml-5 lg:-ml-10 -mr-5 lg:-mr-10";
    } else if (kind.type === "WoodWagon") {
        s = "ml-8 lg:ml-16 mr-8 lg:mr-16 -mt-3 lg:-mt-6 w-[13rem] lg:w-[26rem]";
        t =
            "mt-3 lg:mt-6 w-[11.5rem] lg:w-[23rem] h-2 lg:h-4 -ml-5 lg:-ml-10 -mr-5 lg:-mr-10";
    }

    return (
        <div className={`flex flex-row justify-between ${s}`}>
            <Wheel size={kind.size}/>
            <div className={`flex justify-between z-50 bg-gray-400 rounded-full ${t}`}>
                <InnerWheel size={kind.size}/>
                <InnerWheel size={kind.size}/>
            </div>
            <Wheel size={kind.size}/>
        </div>
    );
}

export function Wheel({size}) {
    return (
        <div
            className={`z-40 flex items-center justify-center border-4 rounded-full ring-1 ring-black border-zinc-100 animate-spin-wheel ${
                size === "big"
                    ? "w-16 lg:w-32 h-16 lg:h-32"
                    : "w-8 lg:w-16 h-8 lg:h-16"
            }`}
            style={{
                backgroundImage:
                    "repeating-conic-gradient(#26262600 10deg,        #ff002d 15deg,    #ffff0000 25deg, #ffff0000 30deg)",
            }}
        >
            <InnerWheel size={size}/>
        </div>
    );
}

export function InnerWheel({size}) {
    return (
        <div
            className={`rounded-full bg-white ${
                size === "big" ? "h-4 lg:h-8 w-4 lg:w-8" : "h-2 lg:h-4 w-2 lg:w-4"
            }`}
        />
    );
}
