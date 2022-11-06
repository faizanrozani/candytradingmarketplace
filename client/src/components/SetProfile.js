import React from 'react';

export default function SetProfile() {
    return (
        <div>
          <h1>Set Child's Profile</h1>
          <p>Quantity</p>
          <input id="userInput" type="text" placeholder="Text"></input>
          <button onclick="returnText()">Submit</button>
          <script>
          let input = document.getElementById("userInput").value;
          alert(input) </script>
          </div>
    );
  }