import Header from "./Components/Header.jsx";
import UserInput from "./Components/UserInput.jsx";
import { useState } from "react";
import Results from "./Components/Results.jsx";
function App() {
  const [UserInput1,setUserInput]=useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn: 6,
    duration: 10,
 });
 function handleChange(inputIdentifier,newValue){
  setUserInput(prevUserInput => {
      return {
       ...prevUserInput, //copying all old values
          [inputIdentifier]:+newValue //here adding new value for one input i.e here input identifier is strings i.e initialInvestment, expectedReturn like this and newvalue is value assigned to old value and bydfault we entered value is string even though we give type=number so we need add + before to change it into int
      }
  })
}
const inputIsValid = UserInput1.duration >= 1 && UserInput1.initialInvestment > 0 && UserInput1.annualInvestment > 0 && UserInput1.expectedReturn > 0;
 //duration should not be 0 we are checking user given input is valid or not 
  return (
    <>
    <Header/>    
    <UserInput UserInpt={UserInput1} onChangeInput={handleChange}/>
    {!inputIsValid && <p className="center">please enter a valid data</p>}
    {inputIsValid && <Results input={UserInput1}/>} {/* && it is also kind of ternary expression in js  i.e if inputisvalid then only go for results component*/ }
</>
  );
}

export default App
