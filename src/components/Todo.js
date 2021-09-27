import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { dbService } from "../firebase";

function Todo({ userObj, todoObj }) {
  const [editing, setEditing] = useState(false);
  const [newTodo, setNewTodo] = useState(todoObj.todo);
  const [error, setError] = useState(false);

  const onToggleFinish = async () => {
    await updateDoc(doc(dbService, userObj.uid, `${todoObj.id}`), {
      isFinish: !todoObj.isFinish,
    });
  };

  const onToggleEdit = () => {
    setEditing(!editing);
  };

  const onSubmit = async e => {
    e.preventDefault();
    if (newTodo === "") {
      setError(true);
    } else {
      await updateDoc(doc(dbService, userObj.uid, `${todoObj.id}`), {
        todo: newTodo,
      });
      setError(false);
      setEditing(!editing);
    }
  };

  const onCancleClick = () => {
    setNewTodo(todoObj.todo);
    setError(false);
    setEditing(!editing);
  };

  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure to delete this todo?");
    if (ok) {
      await deleteDoc(doc(dbService, userObj.uid, `${todoObj.id}`));
    }
  };

  const onChange = e => {
    setNewTodo(e.target.value);
  };

  return editing ? (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" value={newTodo} onChange={onChange} minLength={1} />
        <input type="submit" value="Update" style={{ marginLeft: "5px" }} />
        <input
          type="button"
          value="Cancle"
          style={{ marginLeft: "5px" }}
          onClick={onCancleClick}
        />
      </form>
      {error && <div>Please write more than 1 word</div>}
    </>
  ) : (
    <div style={{ display: "flex", alignItems: "center" }}>
      <h4
        onClick={onToggleFinish}
        style={
          todoObj.isFinish
            ? { color: "gray", textDecoration: "line-through" }
            : null
        }
      >
        {todoObj.todo}
      </h4>
      <button
        onClick={onToggleEdit}
        style={{ marginLeft: "5px", height: "50%" }}
      >
        Edit
      </button>
      <button
        onClick={onDeleteClick}
        style={{ marginLeft: "5px", height: "50%" }}
      >
        Delete
      </button>
    </div>
  );
}

export default Todo;
