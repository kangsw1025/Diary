import React, { useState } from "react";
import Header from "../components/Header";
import TodoList from "../components/TodoList";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";

function Home({ userObj }) {
  const [startDate, setStartDate] = useState(new Date());
  const onChangeDate = date => {
    setStartDate(date);
  };

  return (
    <>
      <Header userObj={userObj} />
      <div>
        <DatePicker // 달력
          selected={startDate}
          locale={ko}
          dateFormat="yyyy년 MM월 dd일"
          onChange={onChangeDate}
        />
        <TodoList date={startDate} />
      </div>
    </>
  );
}

export default Home;
