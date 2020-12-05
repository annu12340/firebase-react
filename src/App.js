import React, { useState, useEffect } from "react";
import db from "./firebase-config-config";
import firebase from "firebase";

function App() {
   const [todos, setTodos] = useState([]);
   const [input, setInput] = useState("");

   const addTodo = (event) => {
      event.preventDefault();
      db.collection("todos").add({
         todo: input,
         datetime: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setTodos([...todos, input]);
      setInput("");
   };

   useEffect(() => {
      console.log("useEffect Hook!!!");
      db.collection("todos")
         .orderBy("datetime", "desc")
         .onSnapshot((snapshot) => {
            console.log("Firebase Snap!");
            setTodos(snapshot.docs.map((doc) => doc.data().todo));
         });
   }, []);

   return (
      <div className='container  p-10'>
         <form noValidate class='form-group  m-10'>
            <br />
            <input type='text' class='form-control' id='todo' label='Enter ToDo' name='todo' value={input} onChange={(event) => setInput(event.target.value)} />
            <input type='button' class='form-control btn btn-primary' onClick={addTodo} disabled={!input} value=' Add Todo' />
         </form>

         <ul class='list-group row'>
            {todos.map((todo) => (
               <div key={todo.id}>
                  <li class='list-group-item'>{todo}</li>
               </div>
            ))}
         </ul>
      </div>
   );
}

export default App;
