import React, { useCallback, useState } from "react";
import { dbService } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function TodoFactory({ userObj, todoDate }) {
  const [todo, setTodo] = useState("");

  const onChange = e => {
    setTodo(e.target.value);
  };

  const onSubmit = useCallback(
    async e => {
      e.preventDefault();
      if (todo === "") return;

      const todoObj = {
        todo,
        Date: todoDate,
        createdAt: Date.now(),
        isFinish: false,
      };

      try {
        const docRef = await addDoc(
          collection(dbService, userObj.uid),
          todoObj
        );
        setTodo("");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    [todo, todoDate, userObj]
  );

  return (
    <form className="todo-Input-form" onSubmit={onSubmit}>
      <input
        className="todo-Input"
        type="text"
        placeholder=" Write what will you do"
        onChange={onChange}
        value={todo}
      />
      <button className="todo-InputBtn">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </form>
  );
}

export default React.memo(TodoFactory);
