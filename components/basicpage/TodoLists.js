import { SortableItem, SortableList } from '@thaddeusjiang/react-sortable-list';
import React, { useEffect, useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import styles from '../../styles/basicpage/AddNotes.module.css'
import AddTodo from '../cards/AddTodo'
import Todoitem from '../cards/Todoitem'
export default function TodoLists() {
  const [todoList, setTodoList] = useState([]);
  const [items, setItems] = useState([
    { _id: '1', name: 'Item 1' },
    { _id: '2', name: 'Item 2' },
    { _id: '3', name: 'Item 3' },
  ]);
  const getmytodo=async()=>{
    const myTodo=await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/todos/getTodos`,{
      method: "GET",
      headers:{
        "Content-Type": "application/json",
        'auth-token':localStorage.getItem('token')
      }
  })
 const response=await myTodo.json()
 console.log(response);
 
 if(response.success){
   setTodoList(response.todos)
   console.log(response.todos);
   
   console.log('first');
   
 }else{
  // setTodoList({title:"no list available"})
 }
 console.log(response);
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

{/* <div className={`${styles.todoList}`} > */}




{todoList.length!==0&&
  <SortableList  items={todoList} setItems={setTodoList}>
      {({ items }) => (
        <>
          {items.map((item) => (
            <SortableItem key={item.id} id={item.id}>
              <Todoitem key={item._doc._id} list={item} />
            </SortableItem>
          ))}
        </>
      )}
    </SortableList>

}
</section>
  )
}
