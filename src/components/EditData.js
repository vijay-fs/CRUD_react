import { useEffect, useState } from "react";

export default function EditData(list) {
  const [name, setName] = useState("");
  const [tech, setTech] = useState("");
  const [li, setLi] = useState("");

  useEffect(() => {
    setLi(list.list._id);
  }, [list.list._id, list.list.name, list.list.tech]);
  async function updatePost() {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        tech: tech,
      }),
    };
    const url = `http://localhost:9000/aliens/${li}`;
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    console.log(data);
  }
  const inputChangeHandler = (setFunction, event) => {
    setFunction(event.target.value);
  };
  return (
    <tr>
      <td></td>
      <td key={list.name}>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => inputChangeHandler(setName, e)}
        />
      </td>
      <td key={list.tech}>
        <input
          type="text"
          value={tech}
          className="form-control"
          onChange={(e) => inputChangeHandler(setTech, e)}
        />
      </td>
      <td>
        <button type="submit" onClick={() => updatePost()}>
          update
        </button>
      </td>
    </tr>
  );
}
