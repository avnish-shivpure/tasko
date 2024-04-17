import { useState } from "react";
import { useTodo } from "../../context/TodoContext";

function TodoForm() {
  //now we add the states for this component
  //which will store title/ description for a SINGLE todo
  const [header, setHeader] = useState("");
  const [description, setDescription] = useState("");
  //now we need to use the created context to connect with the functions in the
  //main page ---> we will use useTodo , which is the useContext in this case
  const { addTodo } = useTodo();
  const { todos } = useTodo();

  //now we need to connect this addTodo function with this components state
  const adder = (e) => {
    e.preventDefault(); //as we are not submitting the form but adding data to the state
    //but we dont want to add empty data
    //we will return the function if no data
    //else addTodo [the function in context] will be used
    if (!header && !description) return; //this prevents empty todo,with id in our local storage
    //now in addTodo we will not directly put header and description
    //because we need to match with the actual addTodo

    addTodo({
      id: Date.now(),
      todo: header,
      todoDescription: description,
      completed: false,
    }); 
    setHeader('');
    setDescription('');
  };
  return (
    <form
      onSubmit={adder}
      className="flex text-lg"
      id="todo input"
      name="Make your todo "
    >
      <input
        value={header}
        onChange={(e) => setHeader(e.target.value)}
        type="text"
        placeholder="Write Todo Title..."
        className="w-2/5 border text-black dark:text-white border-black/30 rounded-l-2xl px-3 outline-none  bg-white/90 dark:bg-black/45 py-1.5 dark:placeholder:text-slate-200"
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Write Todo Description..."
        className="w-3/5 border text-black dark:text-white border-black/30 rounded-r-2xl px-3 outline-none  bg-white/90 dark:bg-black/45 py-1.5 dark:placeholder:text-slate-200"
      />
      {/* // //here we are not adding onClick because the button is type="submit" */}
      <button
        aria-label="Add a Task"
        type="submit"
        className="rounded-2xl ml-1.5 px-3 py-[0.2rem] ring-[2px] ring-green-400 bg-white/90 dark:bg-black/45 font-semibold text-green-700 dark:text-green-100 active:bg-green-400  sm:hover:bg-green-400 sm:hover:text-black duration-150"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
