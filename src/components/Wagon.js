import React from "react";

import WheelSet from "./WheelSet";
import {countdown, formatDay, getCurrentDate, getTodaySaint, range} from "../utils/utils";
import trainData from "../data/trainData.js";
import shortid from "shortid";

export default function Wagon(props) {
    const list = range(props.days.startId, props.days.endId).reverse();

    return (
        <div className="flex flex-col">
            <div className="flex flex-row items-center justify-between border-t-4 border-yellow-600 lg:border-t-8">
                <div className="h-6 w-1 bg-transparent lg:h-12 lg:w-2"/>
                <div
                    className="flex h-6 w-full items-center justify-center bg-red-800 text-center align-center lg:h-12">
                    <div className="text-xl text-white opacity-40 font-podkova lg:text-3xl">
                        Drenchia
                    </div>
                </div>
                <div className="h-6 w-1 bg-transparent lg:h-12 lg:w-2"/>
            </div>
            <div className="h-2 rounded-t-lg bg-red-700 lg:h-4"/>

            <div
                className="flex h-36 justify-between gap-x-4 rounded-b-lg border-b-4 border-yellow-600 bg-gradient-to-b from-emerald-900 to-emerald-900 bg-green-00 lg:h-72 lg:gap-x-8 lg:border-b-8">
                {props.doors.left && <Door type="left"/>}
                <div className="flex justify-end gap-4 lg:gap-8">
                    {getWindows(list)}
                </div>
                {props.doors.right && <Door type="right"/>}
            </div>
            <WagonBottom numberOfWindows={props.days.endId - props.days.startId}/>
        </div>
    );
}

function Door(props) {
    let generalStyle, bottomStyle, topStyle;

    if (props.type === "center") {
        generalStyle = "mr-2 lg:mr-4 w-16 lg:w-32 ml-2 lg:ml-4";
        bottomStyle =
            "w-16 lg:w-32 border-b-2 lg:border-b-4  border-l-2 border-r-2 border-yellow-600";
        topStyle =
            "w-16 lg:w-32 rounded-t-3xl border-t-2 lg:border-t-4  border-l-2 border-r-2 bg-green-900  ";
    } else if (props.type === "left") {
        generalStyle = "mr-2 lg:mr-4 w-8 lg:w-16";
        bottomStyle = "w-8 lg:w-16 rounded-br-lg";
        topStyle =
            "w-8 lg:w-16 rounded-tr-3xl border-t-2 lg:border-t-4 border-l-2  lg:border-l-4   bg-gray-100";
    } else if (props.type === "right") {
        generalStyle = "ml-2 lg:ml-4 w-8 lg:w-16";
        bottomStyle = "w-8 lg:w-16 rounded-bl-lg";
        topStyle =
            "w-8 lg:w-16 rounded-tl-3xl border-t-2 lg:border-t-4 border-r-2 lg:border-r-4 bg-gray-100";
    }

    return (
        <div
            className={`flex-none flex-col mb-2 lg:mb-4 mt-2 lg:mt-4 flex items-center justify-center ${generalStyle}`}
        >
            <div
                className={`flex h-[4.5rem] lg:h-36  border-yellow-600 align-center justify-center items-center ${topStyle}`}
            >
                {props.type === "center" && (
                    <div className="h-16 w-16 rounded-full bg-cyan-200"/>
                )}
            </div>
            <div
                className={`bg-yellow-600 flex h-[4.5rem] lg:h-36 ${bottomStyle}`}
                style={{
                    backgroundImage:
                        "linear-gradient(90deg, transparent 50%, rgba(255, 255, 255, .5) 50%)",
                    backgroundSize: "0.625rem",
                }}
            />
        </div>
    );
}

function WagonBottom(props) {
    return (
        <div className="flex flex-col">
            <div className="mr-2 ml-2 h-4 rounded-b-3xl bg-black lg:mr-4 lg:ml-4 lg:h-8"/>
            <div className="flex flex-row justify-between">
                <WheelSet kind={{size: "small", type: "Wagon"}}/>
                {props.numberOfWindows > 4 && (
                    <WheelSet kind={{size: "small", type: "Wagon"}}/>
                )}
                <WheelSet kind={{size: "small", type: "Wagon"}}/>
            </div>
        </div>
    );
}


export const getWindows = (list) => list.map((item) => <Window key={shortid.generate()} index={item}/>);

function Window({index}) {
    let windowData = trainData.data.windows[index - 1];

    const windowId =
        "Window-" + formatDay(windowData.date.day);

    let windowState = localStorage.getItem(windowId);

    const [checked, setChecked] = React.useState(
        windowState === "open"
    );

    const [open, setOpen] = React.useState(false);

    const handleChange = () => {
        let {day, month} = getCurrentDate();
        let testDay = false;

        if (month === 11) {
            if (month === windowData.date.month - 1) {
                if (day >= 25 && day <= 31) {
                    testDay = day >= windowData.date.day;
                }
            }
        } else if (month === 0) {
            if (windowData.date.day >= 25 && windowData.date.day <= 31) {
                testDay = true;
            } else {
                testDay = day >= windowData.date.day;
            }
        }

        if (!checked && !open && testDay) {
            setChecked(!checked);
            setOpen(true);
            localStorage.setItem(windowId, "open");
        }
    };

    return (
        <>
            {open ? <Surprise data={windowData}/> : null}

            <div

                className="w-14 lg:w-28 h-[4.5rem] lg:h-36"
                id={windowId}
                onClick={handleChange}
            >
                <div className="mt-4 flex flex-none flex-col lg:mt-8">
                    <div
                        className="flex h-6 w-16 items-center justify-center rounded-t-3xl border-t-2 border-r-2 border-l-2 border-yellow-600 bg-red-700 lg:h-12 lg:w-32 lg:border-t-4 lg:border-r-4 lg:border-l-4">
                        <div
                            className="z-40 flex h-4 w-4 items-center justify-center rounded-full border-2 border-zinc-400 bg-zinc-300 text-xs font-cabin font-podkova lg:h-8 lg:w-8 lg:text-xl">
                            {windowData.date.day}
                        </div>
                    </div>

                    {checked ? (
                        <div className="window-opened">
                            <div className="z-10 h-12 w-16 bg-cyan-200 lg:h-24 lg:w-32"/>
                            <div className="z-20 -mt-12 h-12 w-16 lg:-mt-24 lg:h-24 lg:w-32">
                                <SeatsWithPeople day={windowData.date.day}/>
                            </div>

                            <div
                                className="z-30 -mt-12 h-12 w-16 border-2 border-yellow-600 bg-transparent lg:-mt-24 lg:h-24 lg:w-32 lg:border-4"/>
                            <div
                                className="z-40 -mt-12 h-12 w-16 border-2 border-yellow-600 bg-cyan-200 opacity-30 lg:-mt-24 lg:h-24 lg:w-32 lg:border-4"/>
                            <div className="z-50 -mt-12 h-12 w-16 bg-transparent lg:-mt-24 lg:h-24 lg:w-32"/>
                        </div>
                    ) : (
                        <div className="window-closed">
                            <div className="z-10 h-12 w-16 bg-red-700 lg:h-24 lg:w-32"/>
                            <div
                                className="z-30 -mt-12 h-12 w-16 lg:-mt-24 lg:h-24 lg:w-32"
                                style={{
                                    background:
                                        "repeating-linear-gradient(180deg, rgb(229 231 235), rgb(148 163 184) 0.99rem)",
                                }}
                            />
                            <div
                                className="z-40 -mt-12 h-12 w-16 border-2 border-yellow-600 bg-cyan-200 opacity-30 lg:-mt-24 lg:h-24 lg:w-32 lg:border-4"/>
                            <div
                                className="z-50 -mt-12 h-12 w-16 border-2 border-yellow-600 bg-transparent lg:-mt-24 lg:h-24 lg:w-32 lg:border-4"/>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}


function Surprise(props) {
    const [checked, setChecked] = React.useState(true);

    const handleChange = () => {
        setChecked(!checked);
    };

    let message = countdown();

    return (
        <>
            {checked ? (
                <div
                    className="overflow-x-hidden overflow-y-auto fixed top-2 lg:top-4 left-0 right-0 z-[200] justify-center items-center flex"
                    onClick={handleChange}
                >
                    <section className="flex items-center justify-center h-screen text-white gap-x-16  z-[200]">
                        <div
                            className={` ${props.data.style} bg-transparent cursor-pointer group perspective`}
                        >
                            <div
                                className="relative h-full w-full duration-1000 preserve-3d group-hover:my-rotate-y-180">
                                <div
                                    className="absolute h-full w-full border-t-4 border-r-4 border-b-8 border-l-4 backface-hidden">
                                    <img
                                        src={props.data.src}
                                        alt="Una foto di Drenchia"
                                        className="h-full w-full"
                                    />
                                </div>
                                <div
                                    className="absolute h-full w-full overflow-hidden bg-gray-100 my-rotate-y-180 backface-hidden surprise-border">
                                    <div
                                        className="flex h-full w-full flex-col items-center justify-center p-2 pb-4 text-center text-sm text-gray-800 font-gloria align-center lg:p-4 lg:text-lg">

                                        {
                                            props.data.date.day === 25 &&

                                            <span className="font-pacifico pb-2 lg:pb-4">
                                                    <p className="lg:pb-2 text-red-500">Tanti auguri di Buon Natale!</p>
                                                    <p className="lg:pb-2 text-green-500">Vesel božič!</p>
                                                </span>
                                        }

                                        {
                                            props.data.date.day !== 25 &&

                                            <span className="font-cabin pb-2 lg:pb-4">
                                                <p className="lg:pb-2">Oggi festeggiamo {getTodaySaint(props.data.date.day)}!</p>
                                                <p className="lg:pb-2">Danes praznujemo {getTodaySaint(props.data.date.day)}!</p>
                                            </span>
                                        }

                                        <span className="font-podkova">
                                           {
                                               message.it &&
                                               <p className="lg:pb-2">{message.it}</p>
                                           }
                                            {
                                                message.sl &&
                                                <p className="lg:pb-2">{message.sl}</p>
                                            }
                                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            ) : null}
        </>
    );
}


const hairs = [
    "border-yellow-900",
    "border-yellow-500",
    "border-yellow-400",
    "border-amber-900",
    "border-amber-700",
    "border-amber-500",
    "border-stone-900",
    "border-gray-400"
];

const eyes = [
    "bg-stone-600",
    "bg-amber-900",
    "bg-lime-700",
    "bg-green-600",
    "bg-cyan-600",
    "bg-sky-600"
];

const clothes = [
    "bg-gradient-to-b from-violet-600 to-indigo-600",
    "bg-gradient-to-b from-cyan-500 to-blue-500",
    "bg-gradient-to-b from-lime-400 to-lime-500",
    "bg-gradient-to-b from-amber-500 to-pink-500",
    "bg-gradient-to-b from-rose-400 to-red-500"
];

const skins = [
    "bg-[#d5a88b]",
    "bg-[#b8774f]",
    "bg-[#b86c3a]",
    "bg-[#854b37]",
    "bg-[#ecd0b8]",
    "bg-[#e7c4ae]",
    "bg-[#e3b0ad]"
];

const mouths = ["bg-pink", "bg-rose", "bg-red"];

function buildAPerson() {
    let indexSkin = Math.floor(Math.random() * skins.length - 1) + 1;
    let indexClothes = Math.floor(Math.random() * clothes.length - 1) + 1;
    let indexEyes = Math.floor(Math.random() * eyes.length - 1) + 1;
    let indexHairs = Math.floor(Math.random() * hairs.length - 1) + 1;
    let indexMouth = Math.floor(Math.random() * mouths.length - 1) + 1;

    return {
        hair: hairs[indexHairs],
        eyes: eyes[indexEyes],
        skin: skins[indexSkin],
        mouth: mouths[indexMouth],
        clothes: clothes[indexClothes]
    };
}

function SeatsWithPeople({day}) {
    let people = getPeople();
    let christmas = day === 25;

    return (
        <div className="flex h-12 flex-row justify-between lg:h-24">
            <div className="flex items-end pl-2 lg:pl-4 pb-0.5 lg:pb-1">
                <div className="h-5 w-2 rounded-tr-lg bg-red-700 lg:h-10 lg:w-4"/>
                {
                    christmas &&
                    (
                        <>
                            <div className="flex flex-col place-items-center">
                                <div className="flex flex-col place-items-center"
                                >
                                    <div className="h-1 w-1 rounded-full bg-white lg:h-2 lg:w-2"/>
                                    <div
                                        className="h-2 w-3 bg-red-500 lg:h-4 lg:w-6"
                                        style={{
                                            borderRadius:
                                                "51% 49% 10% 44% / 100% 100% 0% 0%"
                                        }}
                                    />
                                </div>
                                <div
                                    className={`border-gray-100 bg-pink-200 border-t-4 border-l-4 border-b-4 lg:border-b-8  lg:border-t-8   lg:border-l-8 flex flex-row w-3 lg:w-6 h-3 lg:h-6 gap-1 lg:gap-2  rounded-b-full`}
                                >
                                    <div
                                        className={`bg-pink-200 w-0.5 lg:w-1 h-1 lg:h-2 rounded-full mt-0.5 lg:mt-1 mr-px lg:mr-0.5`}
                                    />

                                    <div className="flex flex-col h-1.5 lg:h-3 w-0.5 lg:w-1">
                                        <div
                                            className={`bg-green-600 w-0.5 lg:w-1 h-0.5 lg:h-1 rounded-full mt-0.5 lg:mt-1`}
                                        />
                                        <div
                                            className={`bg-pink-300 w-0.5 lg:w-1 h-0.5 lg:h-1 rounded-full -ml-px lg:-ml-0.5  mt-0.5 lg:mt-1`}
                                        />
                                    </div>
                                </div>
                                <div
                                    className={` bg-pink-200 w-1 lg:w-2 h-1 lg:h-2 -mt-px -mb-px`}
                                />
                                <div
                                    className={`bg-red-500 rounded-t-lg w-3 lg:w-6 h-2 lg:h-4 `}
                                />
                            </div>
                        </>
                    )
                }
                {!christmas && people.left && (
                    <>
                        <div className="flex flex-col place-items-center">
                            <div
                                className={`${people.left.hair} ${people.left.skin} border-t-4 border-l-4 lg:border-t-8 lg:border-l-8 flex flex-row w-3 lg:w-6 h-3 lg:h-6 gap-1 lg:gap-2 rounded-full`}
                            >
                                <div
                                    className={`${people.left.skin} opacity-25  w-0.5 lg:w-1 h-1 lg:h-2 rounded-full mt-0.5 lg:mt-1 mr-px lg:mr-0.5`}
                                />

                                <div className="flex flex-col h-1.5 lg:h-3 w-0.5 lg:w-1">
                                    <div
                                        className={`${people.left.eyes} w-0.5 lg:w-1 h-0.5 lg:h-1 rounded-full mt-0.5 lg:mt-1`}
                                    />
                                    <div
                                        className={`${people.left.mouth} w-0.5 lg:w-1 h-0.5 lg:h-1 rounded-full -ml-px lg:-ml-0.5  mt-0.5 lg:mt-1`}
                                    />
                                </div>
                            </div>
                            <div
                                className={` ${people.left.skin} w-1 lg:w-2 h-1 lg:h-2 -mt-px -mb-px`}
                            />
                            <div
                                className={`${people.left.clothes} rounded-t-lg w-3 lg:w-6 h-2 lg:h-4 `}
                            />
                        </div>
                    </>
                )}
            </div>
            <div className="flex items-end pr-2 lg:pr-4 pb-0.5 lg:pb-1">
                {!christmas && people.right && (
                    <>
                        <div className="flex flex-col place-items-center">
                            <div
                                className={`${people.right.hair} ${people.right.skin} border-t-4 border-r-4 lg:border-t-8 lg:border-r-8 flex flex-row w-3 lg:w-6 h-3 lg:h-6 gap-1 lg:gap-2 rounded-full`}
                            >
                                <div className="flex flex-col h-1.5 lg:h-3 w-0.5 lg:w-1">
                                    <div
                                        className={`${people.right.eyes} w-0.5 lg:w-1 h-0.5 lg:h-1 rounded-full mt-0.5 lg:mt-1`}
                                    />
                                    <div
                                        className={`${people.right.mouth} w-0.5 lg:w-1 h-0.5 lg:h-1 rounded-full -mr-px lg:-mr-0.5  mt-0.5 lg:mt-1`}
                                    />
                                </div>
                                <div
                                    className={`${people.right.skin} opacity-25 w-0.5 lg:w-1 h-1 lg:h-2 rounded-full mr-px lg:mr-0.5 mt-0.5 lg:mt-1`}
                                />
                            </div>
                            <div
                                className={`${people.right.skin}  w-1 lg:w-2 h-1 lg:h-2 -mt-px -mb-px`}
                            />
                            <div
                                className={`${people.right.clothes} rounded-t-lg w-3 lg:w-6 h-2 lg:h-4 `}
                            />
                        </div>
                    </>
                )}
                <div className="h-5 w-2 rounded-tl-lg bg-red-700 lg:h-10 lg:w-4"/>
            </div>
        </div>
    );
}

function getPeople() {
    let personLeft, personRight;

    let seatType = Math.floor(Math.random() * 3) + 1;
    if (seatType === 1) {
        personLeft = buildAPerson();
    } else if (seatType === 2) {
        personRight = buildAPerson();
    } else {
        personLeft = buildAPerson();
        personRight = buildAPerson();
    }

    return {left: personLeft, right: personRight};
}
