import { useState, memo, useEffect, useRef } from "react";
import { useTodo } from "../../context/TodoContext";

const TodoItem = memo(({ todo }) => {
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const [todoMsgDes, setTodoMsgDes] = useState(todo.todoDescription);

  const textareaRef = useRef(null);
  const [textareaHeight, setTextareaHeight] = useState("auto");

  const editTodo = () => {
    //now based on the todo  id we will set the old todo with the new
    //todo using spread operator as update todo takes id and newTodo
    updateTodo(todo.id, {
      ...todo,
      todo: todoMsg,
      todoDescription: todoMsgDes,
    }); //writing newTodo with spread operator and changing the vales of todo: and todoDesc..
    setIsTodoEditable(false);
  };

 //auto adjusting height
 //through measuring scroll height
    useEffect(() => {
      const textarea = textareaRef.current;
      if (textarea) {
        // Set the height to 'auto' to allow the textarea to expand based on content
        textarea.style.height = "auto";
        // Set the height of the textarea to its scroll height (content height)
        textarea.style.height = `${textarea.scrollHeight + 2}px`;
        // Update the state with the new height
        setTextareaHeight('textarea.scrollHeight'+'px');
      }
    }, [todoMsgDes]);
  

  // const removeThisTodo = () => deleteTodo(todo.id)
  return (
    <div
      className={`text-lg flex border border-black/10 rounded-xl px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black dark:text-white h-auto ${
        todo.completed
          ? "bg-emerald-200/80 dark:bg-emerald-600/55"
          : "bg-white dark:bg-black/45"
      } ${
        isTodoEditable
          ? "bg-orange-200 dark:bg-amber-500/70"
          : "bg-white dark:bg-black/45 "
      }`}
    >
      <input
        aria-label="Check/Uncheck Task"
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <div className="w-full">
        <input
        aria-label="Task Title"
          type="text"
          className={`border outline-none w-full bg-transparent rounded-t-lg ${
            isTodoEditable ? "border-black/15 px-2" : "border-transparent"
          } ${todo.completed ? "line-through" : ""}`}
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
        />
        <textarea
        aria-label="Task Description"
          ref={textareaRef}
          style={{ height: textareaHeight }}
          className={`border outline-none w-full bg-transparent rounded-b-lg ${
            isTodoEditable
              ? "bg-black/15 border-black/15 px-2 "
              : "border-transparent"
          } ${todo.completed ? "line-through" : ""} resize-none max-h-[250px]`}
          value={todoMsgDes}
          onChange={(e) => setTodoMsgDes(e.target.value)}
          readOnly={!isTodoEditable}
        />
      </div>
      {/* Edit, Save Button */}
      <button
        aria-label="Edit/Save button"
        className="inline-flex w-7 h-7 rounded-lg  border border-black/10 justify-center items-center bg-transparent hover:bg-orange-200/70 hover:text-slate-800 px-0.5 "
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-[1.35rem] h-[1.35rem] text-white"
          >
            <path
              fillRule="evenodd"
              d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-[1.35rem] h-[1.35rem] ${
              !todo.completed ? "opacity-80" : "opacity-20"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        )}
      </button>
      {/* Delete Todo Button */}
      <button
        aria-label="Delete task"
        className="inline-flex w-7 h-7 rounded-lg text-sm border border-black/10 justify-center items-center bg-transparent hover:bg-red-300/80 shrink-0  hover:text-slate-800"
        onClick={() => deleteTodo(todo.id)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-[1.35rem] h-[1.35rem] opacity-90"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </button>
    </div>
  );
});

export default TodoItem;
