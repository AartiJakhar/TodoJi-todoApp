import { useContext, useState } from 'react';
import mainContext from '../../context/MainContext';
import styles from '../../styles/basicpage/AddNotes.module.css'
export default function AddTodo() {
  const context = useContext(mainContext)
  const {todos}=context
  const [credentials, setCredentials] = useState({note:"",title:""});
  const ChangeCredentials=(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }
  
  const SubmitNote=async(e)=>{
    e.preventDefault() 
    let data={
      "title": credentials.title,
   "description":credentials.note

    }
   const addtodo=await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/todos/addTodo`,{
    method: "POST",
    headers:{
      "Content-Type": "application/json",
      'auth-token':localStorage.getItem("token")
    },
    body: JSON.stringify(data),
   })
   console.log(addtodo);
   
   const response= await addtodo.json()
   if(response.success){
    todos.refetch()
setCredentials({title:"",note:""})  
   }else{
alert(`${response.error}`)
   }
   
  }

  return <>
<form action="post" onSubmit={SubmitNote} className={styles.NoteForm}>
  <div>
    <label htmlFor="title">Title</label>
    <input type="text" name="title" onChange={ChangeCredentials} value={credentials.title} id="title" required minLength={5} />
  </div>
  <div>
    <label htmlFor="note">Note</label>
    <textarea type="text" name="note" onChange={ChangeCredentials} value={credentials.note}  id="note" required minLength={5} />
  </div>
  <button type='submit' className={styles.btn}>Add Note</button>
</form>
  </>;
}
