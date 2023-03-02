import styles from '../../styles/basicpage/AddNotes.module.css'
export default function AddTodo() {
  const SubmitNote=(e)=>{
   e.preventDefault() 
   console.log('first');
  }

  return <>
<form action="post" onSubmit={SubmitNote} className={styles.NoteForm}>
  <div>
    <label htmlFor="title">Title</label>
    <input type="text" name="title" id="title" required minLength={5} />
  </div>
  <div>
    <label htmlFor="note">Note</label>
    <textarea type="text" name="note" id="note" required minLength={5} />
  </div>
  <button type='submit' className={styles.btn}>Add Note</button>
</form>
  </>;
}
