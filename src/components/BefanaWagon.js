import React from "react";
import WheelSet from "./WheelSet";
import "./BefanaWagon.css";

export default function BefanaWagon() {
    return (
        <div className="flex flex-col">
            <div className="-mb-2 flex flex-col lg:-mb-4">
                <div className="h-80 w-full scale-50">
                    <div className="befana animate-befana">
                        <div className="befana__head">
                            <div className="befana__hat"/>
                            <div className="befana__face"/>
                            <div className="befana__eyes"/>
                            <div className="befana__nose"/>
                        </div>
                        <div className="befana__body">
                            <div className="befana__hair"/>
                            <div className="befana__broom"/>
                            <div className="befana__bodyLower">
                                <div className="befana__shoes"/>
                            </div>
                            <div className="befana__bag"/>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row justify-center -mb-[0.48rem] lg:-mb-[0.96rem]">
                    <div className="flex items-end justify-end h-26 lg:h-48">
                        <div className="flex flex-col items-center pr-1 pl-1">
                                <div className="flex flex-col">
                                    <div className="flex flex-row">
                                        <div
                                            className="ml-12 w-20  h-0 bg-transparent rounded-t-full border-8  border-yellow-500"
                                        />
                                        <div
                                            className="mr-12 w-20 h-0 bg-transparent rounded-t-full border-8   border-yellow-500"
                                        />
                                    </div>
                                    <div className="flex flex-row">
                                        <div
                                            className="w-[8.25rem] h-5 lg:h-10 bg-gradient-to-l  from-emerald-500 to-emerald-700 border-r-8 lg:border-r-16 border-yellow-500"
                                        />
                                        <div
                                            className="w-[8.25rem]  h-5 lg:h-10 bg-gradient-to-r shadow-2xl from-emerald-500 to-emerald-700 border-l-8 lg:border-l-16 border-yellow-500"
                                        />
                                    </div>
                                </div>
                            <div className="flex flex-row">
                                <div
                                    className="w-32 h-16 lg:h-32 bg-gradient-to-l  from-red-500 to-red-700 border-r-8 lg:border-r-16 border-yellow-500"
                                />
                                <div
                                    className="w-32 h-16 lg:h-32 bg-gradient-to-r from-red-500 to-red-700 border-l-8 lg:border-l-16 border-yellow-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="flex bg-sky-700 border-b-4  border-t-4 lg:border-t-8 lg:border-b-8 border-yellow-600 rounded-b-lg z-50
                  h-12 lg:h-24 w-[17rem] lg:w-[34rem] items-center justify-center shadow-inner">
                <div
                    className="m-2 flex h-8 w-full items-center justify-center rounded-lg text-xl text-white shadow-inner font-podkova lg:m-4 lg:h-16 lg:text-3xl">
                    Buona Befana!
                </div>
            </div>

            <div className="flex flex-col">
                <div className="mr-2 ml-2 h-4 bg-black lg:mr-4 lg:ml-4 lg:h-8"/>
                <WheelSet kind={{type: "WoodWagon", size: "small"}}/>
            </div>
        </div>
    );
}
