import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvest: 10000,
    annualInvest: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const inputIsValid = userInput.duration >= 1;
  function handleUserInput(inputIdentifier, newValue) {
    setUserInput((previousValues) => {
      return { ...previousValues, [inputIdentifier]: Number(newValue) };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleUserInput={handleUserInput} />
      {inputIsValid && <Results userInput={userInput} />}
    </>
  );
}

export default App;
