import React, { useEffect, useState } from "react";
import AddList from "./AddData";
import EditData from "./EditData";
function CRUD() {
  const [lists, setLists] = useState([]);
  const [updatestate, setUpdateState] = useState(-1);
  const fetchalien = () => {
    fetch("http://localhost:9000/aliens").then((response) =>
      response
        .json()
        .then((data) => {
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
  const handleedit = (_id) => {
    setUpdateState(_id);
  };
  return (
    <div>
      <AddList setLists={setLists} />
      <form>
        <table className="table">
          <>
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">NAME</th>
                <th scope="col">TECH</th>
              </tr>
            </thead>
            <tbody>
              {lists.map((list) =>
                updatestate === list._id ? (
                  <EditData list={list} />
                ) : (
                  <tr key={list._id}>
                    <td>{list._id}</td>
                    <td>{list.name}</td>
                    <td>{list.tech}</td>
                    <td>
                      <button onClick={() => handleedit(list._id)}>EDIT</button>
                      <button>DELETE</button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </>
        </table>
      </form>
    </div>
  );
}
export default CRUD;
