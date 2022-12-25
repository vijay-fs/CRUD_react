import { useEffect, useState } from "react";
import React from "react";
function CRUD(props) {
  const [lists, setLists] = useState([]);
  const fetchalien = () => {
    fetch("http://localhost:9000/aliens").then((response) =>
      response
        .json()
        .then((data) => {
          console.log(data);
          setLists(data);
        })
        .catch((err) => {
          console.log(err);
        })
    );
  };
  useEffect(() => {
    fetchalien();
  }, []);
  return (
    <div>
      <table>
        <>
          <tbody>
            {lists.map((list) => (
              <tr key={list._id}>
                <td>{list._id}</td>
                <td>{list.name}</td>
                <td>{list.tech}</td>
              </tr>
            ))}
          </tbody>
        </>
      </table>
    </div>
  );
}
export default CRUD;
