import "./App.css";

import Locomotive from "./components/Locomotive";
import ChristmasTreeWagon from "./components/ChristmasTreeWagon";
import WoodWagon from "./components/WoodWagon";
import BefanaWagon from "./components/BefanaWagon";
import NewYearWagon from "./components/NewYearWagon";
import Wagon from "./components/Wagon";
import Connector from "./components/Connector";
import React from "react";
import {formatDay, getCurrentDate, useOnceCall} from "./utils/utils";

function App() {
    let {day, month} = getCurrentDate();

    useOnceCall(() => {
        let cat = localStorage.getItem("kgtchutchu");
        let formattedDay = formatDay(day);
        if (cat !== formattedDay) {
            document.querySelector("#locomotive").scrollIntoView({
                behavior: "smooth",
            });
        } else {
            if (document.getElementById("#Window-" + formattedDay) !== null) {
                document
                    .querySelector("#Window-" + formattedDay)
                    .scrollIntoView({behavior: "smooth",});
            }
        }
        localStorage.setItem("kgtchutchu", formattedDay);
        localStorage.setItem("showHelp", "false");
    })

    const [help, setHelp] = React.useState(localStorage.getItem("showHelp") === null);

    const handleChange = () => {
        setHelp(false);
    };

    return (
        <>
            {help ? (
                <div
                    className="overflow-x-hidden overflow-y-auto fixed h-screen z-[200] justify-center items-center flex"
                    onClick={handleChange}
                >
                    <div className="flex items-center surprise-border justify-center h-screen w-screen bg-white gap-x-16  z-[200]">
                        <div className="flex flex-col p-12 font-podkova text-lg lg:text-xl">
                            <p className="pb-2">Per concludere l'anno 2022 e iniziare il 2023, unisciti a noi ogni giorno sul nostro treno.</p>
                            <p className="pt-4 pb-2">Il treno va da sinistra a destra.</p>
                            <p className="pb-2">
                                Ogni giorno è possibile fare clic su una finestra per scoprire una sorpresa. È anche possibile fare clic su altre animazioni per scoprire altre sorprese.</p>

                            <p className="pt-4 pb-2">Vi auguriamo un sereno Natale e un Felice Anno Nuovo!</p>
                            <p className="pt-4 pb-2">Kobilja Glava</p>
                            <p className="pt-4 pb-2 text-sm lg:text-lg">PS: Per scoprire il treno, fare clic in un punto qualsiasi di questo messaggio.</p>
                        </div>
                    </div>
                </div>) : null}
            }

            <div
                className="fixed bottom-0 left-0 h-full w-full overflow-hidden bg-gradient-to-t from-blue-700 to-indigo-800">
                <div className="flex flex-col">
                    <main className="fixed bottom-8 left-0 w-screen overflow-x-auto overflow-y-hidden bg-transparent ">
                        <div className="train">
                            <div className="flex h-screen flex-row items-end">
                                {month === 0 && day >= 6 && (
                                    <>
                                        <BefanaWagon/>
                                        <Connector/>
                                    </>
                                )}
                                {month === 0 && day >= 1 && (
                                    <>
                                        <Wagon
                                            days={{startId: 8, endId: 12}}
                                            doors={{right: true, left: true, center: false}}
                                        />
                                        <Connector/>
                                        <NewYearWagon/>
                                        <Connector/>
                                    </>
                                )}
                                {((month === 11 && day >= 25) || month === 0) && (
                                    <>
                                        <Wagon
                                            days={{startId: 1, endId: 7}}
                                            doors={{right: true, left: true, center: false}}
                                        />
                                        <Connector/>
                                        <ChristmasTreeWagon/>
                                        <Connector/>
                                    </>
                                )}
                                <WoodWagon/>
                                <Connector/>
                                <Locomotive/>
                            </div>
                        </div>
                    </main>
                    <div className="fixed bottom-0 left-0 h-8 w-screen overflow-auto bg-white"/>
                </div>
            </div>
        </>
    );
}

export default App;
