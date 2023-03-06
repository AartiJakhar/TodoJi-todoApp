import { SortableItem, SortableList } from "@thaddeusjiang/react-sortable-list";
import React, { useContext } from "react";
import mainContext from "../../context/MainContext";
import styles from "../../styles/basicpage/AddNotes.module.css";
import AddTodo from "../cards/AddTodo";
import Todoitem from "../cards/Todoitem";
export default function TodoLists() {
const context=useContext(mainContext)
const {todos,todoList,setTodoList}=context
  return (
    <section id="todoLists" className={styles.about}>
      <h1 className={`${styles.heading} heading`}>My To Do List</h1>

      <div className={styles.row}>
        <div className={styles.content}>
          <h3>Add New Note here</h3>
          <AddTodo />
        </div>

        <div className="image">
          <img src="aboutus.gif" alt="dddddddddd" width={510} />
        </div>
      </div>

      {/* <div className={`${styles.todoList}`} > */}

      {todos.isLoading ||todos.isFetching&& <div>loading...</div>}

      {!todos.error && todos.data && !todos.isLoading && todoList.length !== 0 && (
        <SortableList items={todoList} setItems={setTodoList}>
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
      )}
    </section>
  );
}
