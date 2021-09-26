import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { dbService } from "../firebase";
import Todo from "./Todo";
import TodoFactory from "./TodoFactory";

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
  }, []);

  return (
    <>
      <TodoFactory userObj={userObj} todoDate={todoDate} />
      {todos.map(todo => (
        <Todo key={todo.id} todoObj={todo} />
      ))}
    </>
  );
}

export default TodoList;
