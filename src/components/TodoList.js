import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { dbService } from "../firebase";
import Todo from "./Todo";
import TodoFactory from "./TodoFactory";
import "../css/TodoList.css";

function TodoList({ userObj, todoDate }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const q = query(
      collection(dbService, userObj.uid),
      where("Date", "==", todoDate)
    );
    const unsubscribe = onSnapshot(q, querySnapshot => {
      const newArray = querySnapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setTodos(newArray);
    });

    return () => {
      unsubscribe();
    };
  }, [userObj, todoDate]);

  return (
    <div className="todoList-Container">
      <TodoFactory userObj={userObj} todoDate={todoDate} />
      <div className="todo-Container">
        {todos.map((todo, index) => (
          <Todo key={todo.id} userObj={userObj} todoObj={todo} index={index} />
        ))}
      </div>
    </div>
  );
}

export default React.memo(TodoList);
