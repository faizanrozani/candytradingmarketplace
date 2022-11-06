import React, { useEffect, useState } from "react";

const Stash = (props) => (
  <tr>
    <td>{props.email}</td>
    <td>{props.candy}</td>
  </tr>
);

export default function ViewTrades() {
  const [stashes, setStashes] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getStashes() {
      const response = await fetch(`http://localhost:8080/api/get/stashes`);

      if (!response.ok) {
        const message = `An error occured: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const stashes = await response.json();
      setStashes(stashes);
    }

    getStashes();

    return;
  }, [stashes.length]);

  // This method will delete a record


  // This method will map out the records on the table
  function stashList() {
    return stashes.map((stash) => {
      return (
        <Stash
          email={stash.email}
          candy={`Chocolate: ${stash.candy['Chocolate']} | Lollipops: ${stash.candy['Lollipops']} | Gum Drops: ${stash.candy['Gum Drops']}`}
        />
      );
    });
  }


  // This following section will display the table with the records of individuals.
  return (
    <div>
      <h3>Trade List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Account</th>
            <th>Candy</th>
          </tr>
        </thead>
        <tbody>{stashList()}</tbody>
      </table>
    </div>
  );
}