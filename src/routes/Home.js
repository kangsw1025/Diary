import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import TodoList from "../components/TodoList";
import moment from "moment";
import Calendar from "../components/Calendar";
import "../css/Home.css";

function Home({ userObj }) {
  const [todoDate, setTodoDate] = useState(moment());

  return (
    <>
      <Header userObj={userObj} />
      <div className="container">
        <Calendar clickDate={todoDate} setClickDate={setTodoDate} />
        <TodoList
          userObj={userObj}
          todoDate={JSON.stringify(todoDate).padEnd("h", 9).slice(1, 11)}
        />
      </div>
    </>
  );
}

export default Home;
