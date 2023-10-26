import React, { useState } from "react";

function Signup() {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue === "") return;
    // Send a POST request to the /api/generate endpoint with the user input
    fetch("/api/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value: inputValue }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the component state with the response message
        setMessage(data.message);

        // Clear the input field
        setInputValue("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="bg-black absolute flex items-center justify-center h-screen top-0 left-0 w-full text-white flex-col gap-5 p-5">
      <input
        type="text"
        className="text-nav-blue p-4 w-full rounded"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter Text"
      />
      <button
        className="bg-blue  p-2 w-full rounded cursor-pointer hover:bg-opacity-90"
        onClick={handleButtonClick}
      >
        Send POST Request
      </button>
      <div className="bg-orange border w-full h-20 text-white">
        {/* Display the response message */}
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default Signup;
