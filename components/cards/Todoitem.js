import styles from './styles/todoItem.module.css'
export default function Todoitem({list}) {

  
  return <>
{list&&  <div className={`${styles.todoItem}`}>
    <h3>
 {list._doc.title}
    </h3>
    <p>
       {list._doc.description}
    </p>
  </div>}
  
  </>;
}
