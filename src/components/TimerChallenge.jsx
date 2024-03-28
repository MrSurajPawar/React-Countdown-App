import { useState,useRef } from "react";

//let <timer></timer>
export default function TimerChallenge({title , targetTime}) {
    const timer = useRef();
    const [timerStarted , setTimerStarted] = useState(false);
    const [timerExpired , setTimerExpired] = useState(false);
    
    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
        } , targetTime * 1000);
        setTimerStarted(true);
    }

    function handleStop() {
        clearTimeout(timer.current);
    }

    return(
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You lose!</p>}
            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? 's': ''}
            </p>
            <p>
                <button onClick={timerStarted ? handleStop : handleStart}> 
                    {timerStarted ? 'Stop' : 'Start'} challenge
                </button>
            </p> 
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Time is running' : 'Time is inactive'}
            </p>
        </section>
    );
}