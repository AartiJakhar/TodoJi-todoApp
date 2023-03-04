import styles from './styles/todoItem.module.css'
export default function Todoitem({list}) {
  console.log(list);
  
  return <>
{list&&  <div className={`${styles.todoItem}`}>
    <h3>
 {list.title}
    </h3>
    <p>
       {list.description}
    </p>
  </div>}
  
  </>;
}
