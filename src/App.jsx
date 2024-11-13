import { act, useState } from "react";
import InputForm from "./Components/InputForm/InputForm";
import TableHeader from "./Components/TableHeader/TableHeader";
import TableInnerContent from "./Components/TableContent/TableInnerContent.jsx";
import { calculateInvestmentResults } from './util/investment.js';

const INITIAL_FORM_STATE = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration:10
}

const LABELS_PER_STATE = {
  initialInvestment: "Initial Investment",
  annualInvestment: "Annual Investment",
  expectedReturn: "Expected Return",
  duration: "Duration"
}

const TABLE_COLUMN_HEADERS = [
  "Year",
  "Investment Value",
  "Interest (Year)",
  "Total Interest",
  "Invested Capital"
]

function App() {
    const [formStatus, setFormStatus] = useState(INITIAL_FORM_STATE);

    const isDataValid = formStatus.duration >=1;

    let actualInvestments =  calculateInvestmentResults(formStatus);
    function handleChangeValueInForm(identifier, newValue) {
        setFormStatus((actualStatus) => {
          return {
            ...actualStatus,
            [identifier]: +newValue // el + forza a usar números sobre strings!!!!
          }
        });
        updateInvestments();
    }

    function updateInvestments() {
      actualInvestments =  calculateInvestmentResults(formStatus);
      console.log(formStatus);
      console.log(actualInvestments);
    }


    return (
      <>
        <section id="user-input">
            <form className="input-group">
                {Object.keys(formStatus).slice(0,2).map( key => {
                  return (
                    <p>
                    <InputForm
                    labelName={LABELS_PER_STATE[key]}
                    identifier={key}
                    typeOf={"number"}
                    changingFunc={handleChangeValueInForm}
                    key={key}
                    defVal={formStatus[key]} />
                  </p>
                )
                })}
            </form>
            
            <form className="input-group">
            {Object.keys(formStatus).slice(2,4).map( key => {
                  return (
                  <p>
                    <InputForm
                    labelName={LABELS_PER_STATE[key]}
                    identifier={key}
                    typeOf={"number"}
                    changingFunc={handleChangeValueInForm} 
                    key={key}
                    defVal={formStatus[key]}
                  />
                  </p>
                )
                })}
            </form>
        </section>
        <section id="result" className="center input-group" >
          {!isDataValid && <p>Please use a positive greater than 0 in the Duration field.</p>}
          {isDataValid &&
            <table className="center">
              <TableHeader heads={TABLE_COLUMN_HEADERS}/>
              <TableInnerContent rows={actualInvestments}/>
            </table>
          }
        </section>
        </>
        

    )
}

export default App
