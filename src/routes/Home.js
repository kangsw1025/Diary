import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import TodoList from "../components/TodoList";

function Home({ userObj }) {
  const [clickDate, setClickDate] = useState(new Date());
  const [todoDate, setTodoDate] = useState("");

  const changeTodoDate = date => {
    const initDate = date.toLocaleString().split(".");
    const year = initDate[0];
    const month =
      parseInt(initDate[1].slice(1)) >= 10
        ? initDate[1].slice(1)
        : "0" + initDate[1].slice(1);
    const day =
      parseInt(initDate[2].slice(1)) >= 10
        ? initDate[2].slice(1)
        : "0" + initDate[2].slice(1);

    return year + month + day;
  };

  const onChangeDate = selectDate => {
    setClickDate(selectDate);
    setTodoDate(changeTodoDate(selectDate));
  };

  useEffect(() => {
    setTodoDate(changeTodoDate(new Date()));
  }, []);

  return (
    <>
      <Header userObj={userObj} />
      <div>
        <DatePicker // 달력
          selected={clickDate}
          locale={ko}
          dateFormat="yyyy년 MM월 dd일"
          onChange={onChangeDate}
        />
        {todoDate && <TodoList userObj={userObj} todoDate={todoDate} />}
      </div>
    </>
  );
}

export default Home;
