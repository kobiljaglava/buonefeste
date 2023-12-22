import React from "react";

export function getCurrentDate() {
    let now = new Date();
    let month = now.getUTCMonth();
    let day = now.getUTCDate();
    return {day, month};
}

export function formatDay(day) {
    return (day < 10 ? "0" : "") + day;
}

export function countdown() {
    let {day, month} = getCurrentDate();

    let countdownDate;

    let isNewYear, isBefana = false;

    if (day >= 25 && day <= 31 && month === 11) {
        countdownDate = new Date("Jan 1, 2024 00:00:00").getTime();
        isNewYear = true;
    } else if (day >= 1 && day <= 6 && month === 0) {
        countdownDate = new Date("Jan 6, 2024 00:00:00").getTime();
        isBefana = true;
    } else {
        countdownDate = null;
    }

    let days = 0;

    if (countdownDate !== null) {
        const now = new Date().getTime();
        const timeout = countdownDate - now;
        days = Math.floor(timeout / (1000 * 60 * 60 * 24));
    }

    let message;

    if (isNewYear) {
        message =
            {
                it: "Mancano " + days + (days <= 1 ? " giorno" : " giorni") + " a Capodanno!",
                sl: days + (days <= 1 ? " dan" : " dni") + " do novega leta!"
            }
    } else if (isBefana) {
        message =
            {it: "Mancano " + days + (days <= 1 ? " giorno" : " giorni") + " alla Befana!"}
    }

    return message;
}

export function getTodaySaint(day) {
    const santi = [
        {giorno: 25, festa: 'Natale del Signore'},
        {giorno: 26, festa: 'S. Stefano'},
        {giorno: 27, festa: 'S. Giovanni, ap. ed ev.'},
        {giorno: 28, festa: 'S.s. Innocenti'},
        {giorno: 29, festa: 'S. Tommaso Becket'},
        {giorno: 30, festa: 'Santa famiglia di Gesù, Marie e Giuseppe'},
        {giorno: 31, festa: 'S. Silvestro'},
        {giorno: 1, festa: 'Maria ss. Madre di Dio'},
        {giorno: 2, festa: 'S.s. Basilio e Gregorio'},
        {giorno: 3, festa: 'SS. Nome di Gesù'},
        {giorno: 4, festa: 'S. Angela da Foligno'},
        {giorno: 5, festa: 'B. Diego G. da Cadice capp.'},
    ]
    return santi.find(x => x.giorno === day).festa;
}

export function range(start, end) {
    let foo = [];
    for (let i = start; i <= end; i++) {
        foo.push(i);
    }
    return foo;
}


export function useOnceCall(cb, condition = true) {
    const isCalledRef = React.useRef(false);

    React.useEffect(() => {
        if (condition && !isCalledRef.current) {
            isCalledRef.current = true;
            cb();
        }
    }, [cb, condition]);
}
