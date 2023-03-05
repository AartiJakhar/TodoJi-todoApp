import React, { useEffect, useState } from "react";
import MainContext from "./MainContext.js";
import { useQuery } from "react-query";
const MainStates = (props) => {
  //get todos
  const getmytodo = async () => {
    const myTodo = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/todos/getTodos`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    return myTodo.json();
  };
  const [todoList, setTodoList] = useState([]);

  const todos= useQuery(
    "todos",
    getmytodo
  );
  useEffect(() => {
    if (todos.data) {
      setTodoList(todos.data.todos);
    }
  }, [todos.data]);

  return (
    <MainContext.Provider
      value={{
        //todos 
        todos,todoList,setTodoList
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainStates;
