import React, { useEffect, useState } from "react";
import MainContext from "./MainContext.js";
import { useQuery } from "react-query";
import { useRouter } from "next/router.js";
const MainStates = (props) => {
    //check is user authenticated
    const [user, setUser] = useState(null);

    
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
    if (todos.data&&todos.data.todos) {
      setTodoList(todos.data.todos);
    }
  }, [todos.data]);
  useEffect(() => {
const token = localStorage.getItem('token')
if(token!==null){
    console.log(token);
    todos.refetch()
    setUser(token)
}
  }, [user]);

  

  return (
    <MainContext.Provider
      value={{
        //todos 
        todos,todoList,setTodoList,
        //user
        user,setUser
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainStates;
