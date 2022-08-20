import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './Calculator.js';
import reportWebVitals from './reportWebVitals';
// import Greetings from './components/Greetings'
import Cards from './components/Cards'
import MovieInfos from './components/MovieInfos'
import Counter from './components/Counter'
import CurrentTime from './components/CurrentTime'
import DigitalClock from './components/DigitalClock'


console.log(MovieInfos[0])


// function ncard(val){
//   return(
//     <Cards 
//     imgsrc= {val.imgSrc} movieName={val.movieName}
//     MovieInfo={val.movieInfo} />
//   )
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="MovieCards">
     
      {/* {MovieInfos.map((val, index)=>{
        console.log(index);
          return(
            <Cards 
            key = {val.id}
            imgsrc= {val.imgSrc} movieName={val.movieName}
            MovieInfo={val.movieInfo} />
          )
      })} */}



      {/* <Cards 
      imgsrc= {MovieInfos[1].imgSrc} movieName={MovieInfos[1].movieName}
      MovieInfo={MovieInfos[1].movieInfo} />

      <Cards 
      imgsrc= {MovieInfos[2].imgSrc} movieName={MovieInfos[2].movieName}
      MovieInfo={MovieInfos[2].movieInfo} />

      <Cards 
      imgsrc= {MovieInfos[3].imgSrc} movieName={MovieInfos[3].movieName}
      MovieInfo={MovieInfos[3].movieInfo} /> */}

    </div>
    {/* <Greetings/> */}
    {/* <Calculator />  */}

    {/* <Counter/> */}
    {/* <CurrentTime/> */}
    <DigitalClock/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
