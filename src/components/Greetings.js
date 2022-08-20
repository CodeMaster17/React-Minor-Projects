
import '../css/greetings.css';
// import React from

let greeting = "Good Morning";
let day = new Date();
let hours = day.getHours();
let minutes = day.getMinutes();

if(hours > 1 && hours < 12)
{
  greeting = "Good Morning";
}

else if(hours >= 12 && hours < 19)
{
  greeting = "Evening";
}

else
{
  greeting = "Good Night";
}

function Greetings() {
    return (
        <div className="Greetings">
            <div>

                <h1> {greeting} Sir.</h1>
                <h1> Current time is {hours}:{minutes}:{day.getSeconds()}  </h1>
            </div>
        </div>
    );
}

export default Greetings;
