import React,{useState ,useEffect} from 'react';
import Countdown from 'react-countdown';

export default function CounterExample() {
  return (
    <>
      <Example/>
    </>
  )
}

// const Completionist = () => <span>You are good to go!</span>;

// const renderer = ({ hours, minutes, seconds, completed }) => {
//     if (completed) {
//       // Render a completed state
//       return <Completionist />;
//     } else {
//       // Render a countdown
//       return <span>{hours}:{minutes}:{seconds}</span>;
//     }
//   };

// function Example(){
//     return(
//         <>
//          <Countdown date={Date.now() + 5000} renderer={renderer}/>
//         </>
//     )
// }

function Example(){

    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        const difference = +new Date(`${year}-10-1`) - +new Date();
        let timeLeft = {};
    
        if (difference > 0) {
          timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          };
        }
    
        return timeLeft;
      };
    
      const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
      const [year] = useState(new Date().getFullYear());
    
      useEffect(() => {
        setTimeout(() => {
          setTimeLeft(calculateTimeLeft());
        }, 1000);
      });
    
      const timerComponents = [];
    
      Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
          return;
        }
    
        timerComponents.push(
          <span>
            {timeLeft[interval]} {interval}{" "}
          </span>
        );
      });

    return(
        <div>
            <h1>HacktoberFest {year} Countdown</h1>
            <h2>With React Hooks!</h2>
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </div>
    )
}