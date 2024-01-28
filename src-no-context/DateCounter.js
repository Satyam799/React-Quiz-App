import { useReducer } from "react";

const intialstate={count:0,step:1}


function reducer(state,action){
  console.log(state,action)
switch(action.type){
case 'dec':
      return {...state,count: state.count-state.step};
case 'inc':
      return {...state,count: state.count+state.step};

case 'setcount':
      return {...state,count:action.payload};
case 'setstep':
  return {...state,step:action.payload}
case 'reset':
  return intialstate
default:
  throw new Error("Unknown error");
}



/* if(action.type==='dec')return state-action.payload
 if(action.type==='inc')return state+action.payload
 if(action.type==='setcount')return action.payload*/

}
function DateCounter() {
  //const [count, setCount] = useState(0);
const [state,dispatch]=useReducer(reducer,intialstate)
const {count,step}=state
// This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({type:'dec',payload:1})
    // setCount((count) => count - 1);
   // setCount((count) => count - step);
  };

  const inc = function () {
    dispatch({type:'inc',payload:1})
    // setCount((count) => count + 1);
   // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    dispatch({type:'setcount',payload:+e.target.value})
   // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
   // setStep(Number(e.target.value));
   dispatch({type:'setstep',payload:+e.target.value})
  };

  const reset = function () {
   dispatch({type:'reset'})
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
