import React from 'react';

export default function SetProfile() {
    return (
        <div class="profile bg-light">
          <div class="inner-profile">
          <h1 class="title-style">Set Candy Quantities</h1>
          <form>
            <div class="form-Lollipops">
            <label class="form-Lollipops"for="userInput-Lollipops">
              Number of Lollipops: 
            </label>
            <input id="userInput-Lollipops" type="number"></input>
            </div>
            <br></br>
            <div class="form-Choclate">
            <label for="userInput-Chocalate">
              Number of Chocalates: 
            </label>
            <input id="userInput-Choclate" type="number"></input>
            </div>
            <br></br>
            <div class="form-GumDrops">
            <label class="form-GumDrops" for="userInput-GunDrops">
              Number of Gum Drops: 
            </label>
            <input id="userInput-GumDrops" type="number"></input>
            </div>
            <br></br>
            <button onclick="returnText()" class="btn btn-warning">Submit</button>
          </form>
          </div>
          <script>
          let input = document.getElementById("userInput").value;
          alert(input) </script>
          </div>
    );
  }