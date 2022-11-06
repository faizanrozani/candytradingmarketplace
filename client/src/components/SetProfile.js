import React from 'react';

export default function SetProfile() {
    return (
        <div class="profile bg-light text-center">
          <h1>Set Child's Profile</h1>
          <p>Quantity</p>
          <select>
            <option></option>
          </select>
          <input id="userInputs" type="number" placeholder="Text"></input>
          <input id="userInput" type="text" placeholder="Text"></input>
          <button onclick="returnText()" class="btn btn-warning">Submit</button>
          <script>
          let input = document.getElementById("userInput").value;
          alert(input) </script>
          </div>
    );
  }