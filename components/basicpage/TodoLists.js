import React, { useEffect, useState } from 'react'
import styles from '../../styles/basicpage/AddNotes.module.css'
import AddTodo from '../cards/AddTodo'
import Todoitem from '../cards/Todoitem'
export default function TodoLists() {
  const [todoList, setTodoList] = useState([]);
  
  const getmytodo=async()=>{
    const myTodo=await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/todos/getTodos`,{
      method: "GET",
      headers:{
        "Content-Type": "application/json",
        'auth-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQwMjMwMWJlYWNmMjFiNmFmZDc0MTJiIn0sImlhdCI6MTY3NzkwMTI5Mn0.aS0VJqBLlp-QKmYa7DDREKQNR8Kh3XgjhVNwTxFI2TU"
      }
  })
 const response=await myTodo.json()
 console.log(response);
 setTodoList(response)
}
useEffect(() => {
  getmytodo()
}, []);

  return (
    <section id="todoLists" className={styles.about}>

<h1 className={`${styles.heading} heading`}>My To Do List</h1>

<div className={styles.row}>

  <div className={styles.content}>
    <h3>We build Logo Design that build your business</h3>
          <AddTodo/>
  </div>

  <div className="image">
    <img src="aboutus.gif" alt="dddddddddd" width={510}/>
  </div>

</div>

<div className={`${styles.todoList}`} >

  {
    todoList.length!==0&&
    todoList.map((list)=>{
      return(
        <Todoitem key={list._id} list={list} />

      )
    })
  }
</div>
</section>
  )
}
