import WheelSet from "./WheelSet";
import React from "react";
import shortid from "shortid";

export default function WoodWagon() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-row">
                <div className="flex flex-col -mb-[0.725rem] lg:-mb-[1.45rem]">
                    <div className="flex flex-row -mb-[0.725rem] lg:-mb-[1.45rem] pl-2 lg:pl-4 pr-2 lg:pr-4">
                        {Woods([
                            true,
                            false,
                            true,
                            false,
                            true,
                            true,
                            false,
                            true,
                            false,
                            true,
                        ])}
                    </div>
                    <div className="flex flex-row -mb-[0.725rem] lg:-mb-[1.45rem] pl-2 lg:pl-4 pr-2 lg:pr-4">
                        {Woods([
                            false,
                            true,
                            false,
                            true,
                            true,
                            false,
                            true,
                            false,
                            true,
                            false,
                        ])}
                    </div>
                </div>
                <div className="w-6 lg:w-12 h-2 lg:h-4 -ml-0.5 lg:-ml-1 bg-yellow-700"/>
            </div>
            <div
                className="flex bg-red-700 border-b-4  border-t-4 lg:border-t-8 lg:border-b-8 border-yellow-600 rounded-b-lg z-50 h-[4rem] lg:h-[8rem] w-[17rem] lg:w-[34rem] items-center justify-center">
                <div
                    className="shadow-inner rounded-lg flex items-center justify-center text-white m-2 lg:m-4 text-xl lg:text-3xl h-12 lg:h-24 w-[16rem] lg:w-[32rem] font-podkova">
                    Kobilja Glava Express
                </div>
            </div>
            <div className="flex flex-col">
                <div className="mr-2 ml-2 h-4 rounded-b-3xl bg-black lg:mr-4 lg:ml-4 lg:h-8"/>
                <WheelSet kind={{type: "WoodWagon", size: "small"}}/>
            </div>
        </div>
    );
}

const Woods = (list) =>
    list.map((item) => (
        <div
            key={shortid.generate()}
            className={`w-6 lg:w-12 h-4 lg:h-8 -ml-0.5 lg:-ml-1 ${
                item ? "-rotate-45" : "rotate-45"
            } bg-gradient-to-b rounded-xl from-yellow-900 to-stone-700`}
        />
    ));
