import React from "react";
import WheelSet from "./WheelSet";
import ChristmasLights from "./ChristmasLight";
import useSound from "use-sound";

import whistleSound from "../assets/sounds/TRNHorn_Whistle.wav";
import bellSound from "../assets/sounds/mixkit-bell.wav";

import "./Locomotive.css"

const BoilerChristmasLights = [
    "red",
    "yellow",
    "green",
    "red",
    "blue",
    "red",
    "purple",
    "green",
    "yellow",
    "orange",
    "red",
];

export default function Locomotive() {
    return (
        <div className="flex flex-col " id="locomotive">
            <div className="flex flex-row items-end bg-transparent">
                <div className="z-50">
                    <div className="-ml-12 h-2 rounded-t-lg bg-red-700 lg:-ml-24 lg:h-4"/>
                    <div
                        className="flex bg-[#243c5a] border-yellow-600 border-b-4 lg:border-b-8 rounded-b-lg z-50 pt-2 lg:pt-4 flex-row">
                        <div className="flex flex-col">
                            <div className="flex w-32 flex-row justify-around lg:w-64">
                                <LocomotiveWindow conductor={true}/>
                                <LocomotiveWindow/>
                            </div>
                            <div
                                className="m-2 flex h-8 items-center justify-center rounded-lg text-xl text-white shadow-inner  font-podkova lg:m-4 lg:h-16 lg:text-3xl">
                                Drenchia
                            </div>
                        </div>
                    </div>
                </div>
                <div className="-mb-2 flex flex-col lg:-mb-4">
                    <div
                        className="z-50 bg-gray-600 h-0.5 lg:h-1 justify-between w-[13.5rem] lg:w-[27rem] -mb-16 lg:-mb-28 flex flex-row pl-2 lg:pl-4 pr-2 lg:pr-4">
                        <ChristmasLights lights={BoilerChristmasLights}/>
                    </div>

                    <div className="flex flex-row items-end">
                        <SafetyValveWithSmoke/>
                        <SafetyValve/>
                        <Pump/>
                        <Bell/>
                        <Smokestack/>
                    </div>

                    <div className="flex flex-row">
                        <Boiler/>
                    </div>
                </div>
            </div>

            <div className="-mt-4 flex flex-col lg:-mt-8">
                <div className="flex flex-row items-end">
                    <div
                        className="bg-zinc-600  w-[20.75rem] lg:w-[41.5rem] h-14 lg:h-28 -mt-8 lg:-mt-16 rounded-tr-xl
                        border-l-[0.5rem] lg:border-l-[1rem] border-t-[0.5rem] lg:border-t-[1rem] border-zinc-900"
                    />
                    <div className="flex h-16 w-36 flex-row lg:h-32 lg:w-72">
                        <div>
                            <div className="flex flex-row">
                                <div className="flex flex-col items-center">
                                    <div className="h-4 w-4 bg-transparent lg:h-8 lg:w-8"/>
                                    <div className="bg-red-700 w-[2.25rem] lg:w-[4.5rem] h-3 lg:h-6"/>
                                    <div className="h-12 lg:h-24 w-[2.75rem] lg:w-[5.5rem] bg-zinc-700"/>
                                    <div
                                        className="bg-yellow-700 w-[2.25rem] lg:w-[4.5rem] h-4 lg:h-8 -mt-8 lg:-mt-16"/>
                                </div>
                                <div className="flex flex-col">
                                    <div className="h-10 w-10 bg-transparent lg:h-20 lg:w-20"/>
                                    <div
                                        className="h-4 lg:h-8 w-10 lg:w-20 bg-transparent border-t-[0.5rem] lg:border-t-[1rem] border-t-zinc-700"/>
                                </div>
                                <div className="flex flex-col">
                                    <div className="bg-transparent  w-[2.25rem] lg:w-[4.5rem] h-10 lg:h-20"/>
                                    <div
                                        className="h-12 lg:h-24 w-[2.75rem] lg:w-[5.5rem] border-8 border-zinc-700"
                                        style={{
                                            clipPath: "polygon(0 0, 100% 100%, 0 100%)",
                                            backgroundImage:
                                                "repeating-linear-gradient(45deg, transparent, transparent 0.469rem, rgb(185 28 28) 0.469rem, rgb(185 28 28) 0.781rem)",
                                            backgroundColor: "rgba(71, 212, 255, 0)",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="-mt-8 flex flex-row items-end lg:-mt-16">
                    <WheelSet kind={{type: "Locomotive", size: "big"}}/>
                    <WheelSet kind={{type: "Locomotive", size: "small"}}/>
                </div>
            </div>
        </div>
    );
}

function LocomotiveWindow({conductor}) {
    return (
        <div
            className="flex h-14 w-12 justify-center rounded-t-3xl border-2 border-yellow-600 bg-cyan-200 lg:h-28 lg:w-24 lg:border-4">
            {conductor && (
                <div className="flex items-end">
                    <div className="flex flex-col place-items-center">
                        <div className="flex flex-col z-50 -mb-[0.3125rem] lg:-mb-2.5 ml-0.5 lg:ml-1 place-items-start">
                            <div
                                className="h-1 w-3 rounded-t-lg bg-gradient-to-r from-blue-800 to-blue-600 lg:h-2 lg:w-6 -mb-[0.02rem] mr-[0.047rem]"/>
                            <div
                                className="h-1 w-4 rounded-tr-lg border-b border-yellow-600 bg-gradient-to-r from-blue-800 to-blue-600 lg:h-2 lg:w-8 lg:border-b-2"/>
                        </div>
                        <div
                            className="bg-rose-200 border-gray-500 border-t-[0.5rem] lg:border-t-[1rem] border-l-[0.375rem] lg:border-l-[0.75rem] flex flex-row w-3 lg:w-6 h-4 lg:h-8 gap-1 lg:gap-2 rounded-full">
                            <div className="bg-rose-100 h-1 lg:h-2 rounded-full mt-0.5 lg:mt-1 w-3 lg:w-6 "/>
                            <div className="flex flex-col h-1.5 lg:h-3 w-0.5 lg:w-1 ">
                                <div className="bg-green-700 w-0.5 lg:w-1 h-0.5 lg:h-1 rounded-full mt-0.5 lg:mt-1  "/>
                                <div
                                    className="bg-red-300 w-0.5 lg:w-1 h-[0.0625rem] lg:h-0.5 rounded-full mt-0.5 lg:mt-1 -ml-0.5 lg:-ml-1"/>
                            </div>
                        </div>
                        <div className="-mt-px -mb-px h-1 w-1 bg-rose-200 lg:h-2 lg:w-2"/>
                        <div
                            className="h-4 w-3 rounded-t-lg border-t-2 border-red-600 bg-gradient-to-r from-blue-800 to-blue-600 lg:h-8 lg:w-6 lg:border-t-4"/>
                    </div>
                    <div
                        className="-ml-2 flex h-1 w-4 flex-col rounded-r-lg border-r-4 border-rose-200 bg-gradient-to-r from-blue-800 to-blue-600 lg:-ml-4 lg:h-2 lg:w-8"/>
                </div>
            )}
        </div>
    );
}

function SafetyValveWithSmoke() {
    return (
        <div className="flex flex-col w-[3.25rem] lg:w-[6.5rem]">
            <div className="flex flex-row items-end">
                <div className="flex flex-col place-items-center pl-1 lg:pl-2">
                    <Whistle/>
                    <div className="flex flex-col place-items-center ">
                        <div className="w-1 lg:w-2 h-0.5 lg:h-1 bg-gray-700 rounded-t-lg"/>
                        <div className="w-2 lg:w-4 h-0.5 lg:h-1 bg-gray-700 rounded-t-lg"/>
                        <div className="w-1.5 lg:w-3 h-0.5 lg:h-1 bg-gray-700"/>
                        <div className="flex flex-row items-end w-1.5 lg:w-3 h-2 lg:h-4 bg-gray-700">
                            <div className="h-2 w-1 bg-gray-700 lg:h-4 lg:w-2"/>
                            <div
                                className="w-1 lg:w-2 h-[0.35rem] lg:h-[0.7rem] rounded-tl-lg bg-gray-600 border-t-2 lg:border-t-4
                                border-l-2 lg:border-l-4 animate-bounce border-yellow-600"
                            />
                        </div>
                        <div className="w-2 lg:w-4 h-0.5 lg:h-1 bg-gray-700 rounded-b-lg"/>
                        <div className="w-1 lg:w-2 h-0.5 lg:h-1 bg-green-700 rounded-b-3xl"/>
                    </div>
                    <div className="w-0.5 lg:w-1 h-0.5lg:h-1 bg-gray-700"/>
                    <div className="w-3 lg:w-6 h-0.5 lg:h-1 bg-yellow-700 border-b-2 border-yellow-800"/>
                    <div className="w-5 lg:w-10 h-0.5 lg:h-1 bg-yellow-700 border-b-2 border-yellow-800"/>
                    <div className="h-1 w-4 bg-yellow-700 lg:h-2 lg:w-8"/>
                    <div className="h-8 w-6 rounded-t-lg bg-yellow-700 lg:h-16 lg:w-12"/>
                    <div className="h-1 w-8 rounded-full border-b-2 border-green-800 bg-green-700 lg:h-2 lg:w-16"/>
                    <div className="h-2 w-7 bg-green-700 lg:h-4 lg:w-14"/>
                </div>
            </div>
            <div
                className="flex rounded-tr-full border-t-4  lg:border-t-8 border-r-4 lg:border-r-8 h-2 lg:h-4 w-[3.25rem] lg:w-[6.5rem] bg-green-700 border-yellow-600"/>

        </div>
    );
}

function SafetyValve() {
    return (
        <div className="flex flex-col w-[3.25rem] lg:w-[6.5rem]">
            <div className="flex flex-row items-end justify-around">
                <div className="flex flex-col place-items-center"/>
            </div>
        </div>
    );
}

function Pump() {
    return (
        <div className="flex flex-col w-[3.25rem] lg:w-[6.5rem]">
            <div className="flex flex-row items-end justify-around">
                <div className="flex flex-col place-items-center">
                    <div className="h-1 w-2 rounded-t-lg bg-green-700 lg:h-2 lg:w-4"/>
                    <div className="h-1 w-5 rounded-t-lg border-t-2 border-yellow-800 bg-yellow-600 lg:h-2 lg:w-10"/>
                    <div className="w-8 lg:w-16 h-1.5 lg:h-3 bg-yellow-600 rounded-t-xl border-t-2 border-yellow-800"/>
                    <div
                        className="w-[2.375em] lg:w-[4.75em] h-1 lg:h-2 rounded-full bg-blue-700 border-b-2 border-t-2 border-blue-800"/>
                    <div className="h-4 w-8 bg-yellow-600 lg:h-8 lg:w-16"/>
                    <div
                        className="w-[2.375em] lg:w-[4.75em] h-1 lg:h-2 rounded-t-lg bg-blue-700 border-b-2 border-t-2 border-blue-800"/>
                </div>
            </div>
        </div>
    );
}

class Bell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => ({isToggleOn: !prevState.isToggleOn}));
    }

    render() {
        return (
            <div className="flex flex-col  w-[3.25rem] lg:w-[6.5rem]">
                <div className="flex flex-row items-end justify-around">
                    <div className="flex h-8 w-10 flex-col place-items-center lg:h-16 lg:w-20">
                        <div
                            className="h-8 lg:h-16 w-1 lg:w-2 bg-slate-700 rounded-tl-lg rounded-tr-lg z-40 -mb-[2.375rem] lg:-mb-[4.75rem]"/>
                        <div
                            className="flex flex-col place-items-center animate-ring"
                            onClick={this.handleClick}
                        >
                            <div
                                className="z-40 h-1 w-1 rounded-full border-2 border-yellow-600 lg:h-2 lg:w-2 lg:border-4"/>
                            <div
                                className="z-30 h-4 w-4 rounded-tl-lg rounded-tr-lg border-2 border-yellow-800 bg-yellow-700 lg:h-8 lg:w-8">
                                <RingBell/>
                            </div>
                            <div
                                className="z-30 h-[0.375rem] lg:h-[0.75rem] w-5 lg:w-10 bg-yellow-700  border-t-2 border-yellow-800 rounded-tl-lg rounded-tr-lg -mt-1 lg:-mt-2"/>
                            <div className="h-2 w-2 rounded-full border-4 border-yellow-600 lg:h-4 lg:w-4 lg:border-8"/>
                        </div>
                        <div className="mt-1 h-1 w-4 rounded-t-full bg-slate-700 lg:mt-2 lg:h-2 lg:w-8"/>
                    </div>
                </div>
            </div>
        );
    }
}

function Smokestack() {
    return (
        <div className="flex flex-col">
            <div className="smoke smoke-3"></div>
            <div className="smoke smoke-4"></div>

            <div className="flex w-8 flex-col place-items-center lg:w-16">
                <div className="h-2 w-8 rounded-t-lg bg-gray-700 lg:h-4 lg:w-16 "/>
                <div className="h-1 w-7 rounded-b-lg border-t-2 border-b-2 border-gray-800 bg-gray-700 lg:h-2 lg:w-14"/>
                <div className="w-5 lg:w-10 bg-gray-700 h-[4rem] lg:h-32"/>
                <div className="h-2 w-7 rounded-t-lg border-2 border-gray-800 bg-gray-700 lg:h-4 lg:w-14"/>
            </div>
        </div>
    );
}

function Boiler() {
    return (
        <>
            <div
                className="flex h-16 lg:h-32 bg-green-700 w-[3.25rem] lg:w-[6.5rem] border-yellow-600 border-r-4 lg:border-r-8"/>
            <div className="flex h-16 lg:h-32 bg-green-700 w-[6.5rem] lg:w-[13rem]"/>
            <div
                className="flex h-16 lg:h-32 bg-green-700 w-[3.25rem] lg:w-[6.5rem]  border-yellow-600 border-r-4 lg:border-r-8"/>
            <div className="flex h-16 w-8 bg-slate-500 lg:h-32 lg:w-16"/>
            <Light/>
        </>
    );
}

class Light extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => ({isToggleOn: !prevState.isToggleOn}));
    }

    render() {
        return (
            <>
                <div className="flex h-16 w-2 border-r-4 border-yellow-600 bg-slate-500 lg:h-32 lg:w-4 lg:border-r-8"/>
                <div
                    className="z-50 flex flex-row items-center bg-transparent border-t-4 lg:border-t-8 border-yellow-600 h-[4.5rem] lg:h-36 align-center">
                    <div className="flex h-4 w-2 bg-black lg:h-8 lg:w-4"/>

                    <div className="-mt-28 flex flex-col place-items-center lg:-mt-56">
                        <div
                            className="flex h-2 w-2 flex-col items-center rounded-t-lg border-2 border-red-600 radius-full lg:h-4 lg:w-4 lg:border-4"/>

                        <div
                            className="-ml-2 flex h-8 w-6 place-items-end items-center justify-end rounded-tl-xl border-b-4 border-red-900 bg-red-600 lg:-ml-4 lg:h-14 lg:w-12">
                            <div
                                onClick={this.handleClick}
                                className={`w-1 lg:w-2 h-4 lg:h-8 bg-yellow-100 rounded-l-full  border-l-2 border-yellow-200
                              ${this.state.isToggleOn && "loco-light"}`}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const RingBell = () => {
    const [play] = useSound(bellSound);

    return <button id="launchSound" onClick={play} className="z-50 h-8 w-8"></button>;
};

const Whistle = () => {
    const [play] = useSound(whistleSound);

    return <button id="launchSound" onClick={play} className="z-50 h-8 w-8 -mb-8"></button>;
};