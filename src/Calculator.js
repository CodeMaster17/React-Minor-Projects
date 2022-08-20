import "./css/Calculator.css"
function Sum(a,b){
    return a + b;

}
function prod(a,b){
    return a * b;

}
function Div(a,b){
    return a / b;

}
function Subtract(a,b){
    return a - b;

}
function Calculator() {
    return (
      <div className="Calci">
        <ul>
            <li> <h1>The sum of the two numbers is {Sum(2,3)}</h1> </li>
            <li> <h1>The Product of the two numbers is {prod(2,3)}</h1> </li>
            <li> <h1>The Divison of the two numbers is {Div(2,3)}</h1> </li>
            <li> <h1>The Subtraction of the two numbers is {Subtract(2,3)}</h1> </li>
        </ul>
      </div>
    );
  }
  
  export default Calculator;
  