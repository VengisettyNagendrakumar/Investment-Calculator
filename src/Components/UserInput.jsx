import { useState } from "react"

export default function UserInput({onChangeInput,UserInpt}){//here onchangeinput holds a func i.e handle change
//  const [UserInput,setUserInput]=useState({
//     initialInvestment:10000,
//     annualInvestment:1200,
//     expectedReturn: 6,
//     duration: 10,
//  });
//  function handleChange(inputIdentifier,newValue){
//         setUserInput(prevUserInput => {
//             return {
//              ...prevUserInput, //copying all old values
//                 [inputIdentifier]:newValue //here adding new value for one input i.e here input identifier is strings i.e initialInvestment, expectedReturn like this and newvalue is value assigned to ot
//             }
//         })
//  }

    return(
        <section id="user-input">
           <div className="input-group">
               <p>
                <label>Initial Investment</label>
                <input type="number" value={UserInpt.initialInvestment} required onChange={(event) => onChangeInput('initialInvestment',event.target.value)}/> {/* two way binding */}
               </p>
               <p>
                <label>Annual Investment</label>
                <input type="number" value={UserInpt.annualInvestment} required onChange={(event) => onChangeInput('annualInvestment',event.target.value)}/>
               </p>

           </div>
           <div className="input-group">
               <p>
                <label>Expected Return</label>
                <input type="number" value={UserInpt.expectedReturn} required onChange={(event) => onChangeInput('expectedReturn',event.target.value)}/>
               </p>
               <p>
                <label>Duration</label>
                <input type="number" value={UserInpt.duration} required onChange={(event) => onChangeInput('duration',event.target.value)}/>
               </p>

           </div>
        </section>
    )
}

{/* onChange={(event) => handleChange('initialInvestment', event.target.value)}:

onChange: This is a React event that triggers when the value of an input field changes.
(event) => ...: This is an arrow function that's called when the onChange event is triggered. It receives the event object as its argument, which contains information about the event.
handleChange('initialInvestment', event.target.value): This calls the handleChange function defined in your component. It passes two arguments: the inputIdentifier, which is a string ('initialInvestment'), and the newValue, which is the new value entered in the input field (event.target.value). The event.target.value represents the current value of the input field.

The event.target property represents the element that triggered the event. In this case, it represents the input element (<input>) that triggered the onChange event.

The value property of the input element (event.target.value) represents the current value of the input field at the time the onChange event is triggered. For input elements like text fields, textarea, and select boxes, the value property holds the current value entered by the user.


*/}