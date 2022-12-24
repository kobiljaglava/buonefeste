import "./App.css";

import Locomotive from "./components/Locomotive";
import ChristmasTreeWagon from "./components/ChristmasTreeWagon";
import WoodWagon from "./components/WoodWagon";
import BefanaWagon from "./components/BefanaWagon";
import NewYearWagon from "./components/NewYearWagon";
import Wagon from "./components/Wagon";
import Connector from "./components/Connector";
import React, {useEffect} from "react";
import {formatDay, getCurrentDate} from "./utils/utils";

function App() {
    let {day, month} = getCurrentDate();

    const loadDataOnlyOnce = () => {
        let cat = localStorage.getItem("kgtchutchu");

        let formattedDay = formatDay(day);

        if (cat !== formattedDay) {
            document.querySelector("#locomotive").scrollIntoView({
                behavior: "smooth",
            });
        } else {
            document
                .querySelector("#Window-" + formattedDay)
                .scrollIntoView({
                    behavior: "smooth",
                });
        }

        localStorage.setItem("kgtchutchu", day);
    };

    useEffect(() => {
        loadDataOnlyOnce();
    }, []);

    return (
        <>
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
