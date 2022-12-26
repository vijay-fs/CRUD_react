import { useEffect, useState } from "react";

export default function EditData(list) {
  const [name, setName] = useState("");
  const [tech, setTech] = useState("");
  const [li, setLi] = useState("");
  console.log(name);
  console.log(tech);
  useEffect(() => {
    setLi(list.list._id);
  }, [list.list._id]);
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
    <tr key={list._id}>
      <td></td>
      <td>
        <input
          type="text"
          name="name"
          value={list.name}
          onChange={(e) => inputChangeHandler(setName, e)}
        />
      </td>
      <td>
        <input
          type="text"
          name="tech"
          value={list.tech}
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
