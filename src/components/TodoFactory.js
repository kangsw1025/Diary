import React, { useState } from "react";
import { dbService } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function TodoFactory({ userObj, todoDate }) {
  const [todo, setTodo] = useState("");

  const onChange = e => {
    setTodo(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (todo === "") return;

    const todoObj = {
      todo,
      Date: todoDate,
      createdAt: Date.now(),
      isFinish: false,
    };

    try {
      const docRef = await addDoc(collection(dbService, userObj.uid), todoObj);
      setTodo("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Write Todo"
        onChange={onChange}
        value={todo}
      />
      <input type="submit" value="Add" />
    </form>
  );
}

export default TodoFactory;
