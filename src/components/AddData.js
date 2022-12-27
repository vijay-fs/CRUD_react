import axios from "axios";
import { useRef, useState } from "react";
export default function AddList({ setLists }) {
  const nameref = useRef();
  const techref = useRef();
  const [name, setName] = useState("");
  const [tech, setTech] = useState("");

  const onSubmitHandler = (event) => {
    axios
      .post("http://localhost:9000/aliens", {
        name: name,
        tech: tech,
      })
      .then(function (response) {
        let data = response.data;
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
    nameref.current.value = "";
    techref.current.value = "";
  };
  const inputChangeHandler = (setFunction, event) => {
    setFunction(event.target.value);
  };
  return (
    <div className="input-group mb-3">
      <input
        id="name"
        ref={nameref}
        onChange={(e) => inputChangeHandler(setName, e)}
        type="text"
        className="form-control"
        placeholder=""
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
      />
      <input
        id="tech"
        ref={techref}
        onChange={(e) => inputChangeHandler(setTech, e)}
        type="text"
        className="form-control"
        placeholder=""
        aria-label="Example text with button addon"
        aria-describedby="button-addon1"
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon1"
        onClick={() => onSubmitHandler()}
      >
        ADD NAME
      </button>
    </div>
  );
}
