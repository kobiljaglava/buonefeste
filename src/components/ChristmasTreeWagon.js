import React from "react";

import WheelSet from "./WheelSet";

export default function ChristmasTreeWagon() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col items-center">
                <div
                    className="animate-loco-light-anim overflow-hidden relative w-16 h-16 lg:h-32 lg:w-32 bg-gradient-to-b from-amber-200 to-yellow-400 border-yellow-500 lg:-mb-[3rem] -mb-[1.5rem]"
                    style={{
                        clipPath:
                            "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                    }}
                />

                <div className="flex flex-row">
                    <TreePart
                        kind={{
                            tree: "border-b-[10rem] lg:border-b-[20rem] border-b-green-900",
                        }}
                    />
                    <TreePart
                        kind={{
                            tree: "border-b-[8rem] lg:border-b-[16rem] border-b-green-800 -ml-32 lg:-ml-64",
                        }}
                    />
                    <TreePart
                        kind={{
                            tree: "border-b-[6rem] lg:border-b-[12rem] border-b-green-700 -ml-32 lg:-ml-64",
                        }}
                    />
                    <TreePart
                        kind={{
                            tree: "border-b-[4rem] lg:border-b-[8rem] border-b-green-600 -ml-32 lg:-ml-64",
                        }}
                    />
                </div>
            </div>

            <div
                className="flex bg-sky-700 border-b-4  border-t-4 lg:border-t-8 lg:border-b-8 border-yellow-600 rounded-b-lg z-50 h-[4rem] lg:h-[8rem] w-[17rem] lg:w-[34rem] items-center justify-center">
                <div
                    className="shadow-inner font-podkova flex flex-col rounded-lg  items-center justify-center text-white m-2 lg:m-4 text-lg lg:text-3xl h-12 lg:h-24 w-[16rem] lg:w-[32rem]">
                    <p>Buon Natale</p>
                    <p>Vesel Božič</p>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="mr-2 ml-2 h-4 rounded-b-3xl bg-black lg:mr-4 lg:ml-4 lg:h-8"/>
                <WheelSet kind={{type: "WoodWagon", size: "small"}}/>
            </div>
        </div>
    );
}

function TreePart(props) {
    return (
        <div className="flex flex-row">
            <div
                className={`w-0 h-0 border-l-[4rem] lg:border-l-[8rem] border-r-[4rem] lg:border-r-[8rem] border-l-transparent border-r-transparent ${props.kind.tree}`}
            />
        </div>
    );
}
