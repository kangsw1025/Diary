import React from "react";
import Calendar from "../components/Calendar";
import Header from "../components/Header";
import TodoList from "../components/TodoList";

function Home() {
  return (
    <>
      <Header />
      <div>
        <Calendar />
        <TodoList />
      </div>
    </>
  );
}

export default Home;
