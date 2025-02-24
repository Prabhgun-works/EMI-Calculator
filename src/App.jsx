import { useState } from "react"

import Header from "./components/Header";
import Table from "./components/Table";
import VisualResult from "./components/pieChart";
import UserInput from "./components/UserInput";

function App() {
  const [userInput , setUserInput] = useState({
    principal : 10000, durationInMonths : 12, annualInterestRate : 6 ,
  })
  function handleChange(identifier , newValue){
    setUserInput(prevUserInput => {
      return{
        ...prevUserInput , 
        [identifier] : +newValue
      };
    });
  }
  return (
    <div className="app">
        <Header />
        <UserInput  onChange={handleChange} userInput={userInput} />
        <Table Input={userInput}/>
        <VisualResult input={userInput}/>

    </div>
  )
}

export default App
