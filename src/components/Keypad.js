import React from "react";

function Keypad() {
  function handleChange() {
    console.log("Entering password...");
  }

  return (
    <div>
      <label>
        Password:
        <input type="password" onChange={handleChange} />
      </label>
    </div>
  );
}

export default Keypad;
