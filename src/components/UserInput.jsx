import { useState } from "react";

export default function UserInput({ userInput, handleUserInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Initial Investment</label>
          <input
            type="number"
            value={userInput.initialInvest}
            onChange={(e) => handleUserInput("initialInvest", e.target.value)}
            required
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            value={userInput.annualInvest}
            onChange={(e) => handleUserInput("annualInvest", e.target.value)}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(e) => handleUserInput("expectedReturn", e.target.value)}
            required
          />
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(e) => handleUserInput("duration", e.target.value)}
            required
          />
        </p>
      </div>
    </section>
  );
}
