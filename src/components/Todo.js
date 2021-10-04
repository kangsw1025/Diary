import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { dbService } from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrashAlt,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";

function Todo({ userObj, todoObj, index }) {
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
        <input
          type="text"
          className="todo-Input"
          value={newTodo}
          onChange={onChange}
          minLength={1}
        />
        <button className="todo-EventBtn" onClick={onSubmit}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button className="todo-EventBtn" onClick={onCancleClick}>
          <FontAwesomeIcon icon={faWindowClose} />
        </button>
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
        {`${index + 1}. ${todoObj.todo}`}
      </h4>
      <button
        className="todo-EventBtn"
        onClick={onToggleEdit}
        style={{ marginLeft: "5px", height: "50%" }}
      >
        <FontAwesomeIcon icon={faEdit} />
      </button>
      <button
        className="todo-EventBtn"
        onClick={onDeleteClick}
        style={{ marginLeft: "5px", height: "50%" }}
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </div>
  );
}

export default Todo;
