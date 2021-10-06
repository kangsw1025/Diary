import React, { useState } from "react";
import Header from "../components/Header";
import TodoList from "../components/TodoList";
import moment from "moment";
import Calendar from "../components/Calendar";
import "../css/Home.css";

function Home({ userObj }) {
  const [todoDate, setTodoDate] = useState(moment());

  return (
    <div className="wrap">
      <div className="container">
        <Header todoDate={todoDate} />
        <div className="body">
          <Calendar clickDate={todoDate} setClickDate={setTodoDate} />
          <TodoList
            userObj={userObj}
            todoDate={JSON.stringify(todoDate).slice(1, 11)}
          />
        </div>
      </div>
    </div>
  );
}

export default React.memo(Home);
