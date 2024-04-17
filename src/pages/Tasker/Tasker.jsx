import React, { useState, useEffect } from "react";
import { TodoContext, TodoProvider, useTodo } from "../../context/TodoContext";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import Navbar from "../HomePage/NavBar";
import { Helmet } from "react-helmet";

function Tasker() {
  const [todos, setTodos] = useState([]); //this state will hold all the todos of the app
  //now we wll make all the functions which were taken by TodoContext

  const addTodo = (todo) => {
    //we will add todo list items in the state "toods"
    //so in setTodos what we need is add a new id and the submitted todo to the previously existing todos
    setTodos((prev) => [{ ...todo }, ...prev]);
  };

  const updateTodo = (id, newTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) => (prevTodo.id === id ? newTodo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos(
      (prev) =>
        //we should use filter to filter all required todos
        prev.filter((reqTodo) => reqTodo.id !== id) //### to check reqTodo. //here we cant use slice as we dont know the actual position of that todo
    );
  };
  const toggleComplete = (id) => {
   
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("localTodos")); //the get Item array name is important
    //and needs to be same in setItem as well
    //Now to prevent any crashes we need conditional check
    if (localData && localData.length > 0) {
      //now we will add data to the state
      setTodos(localData);
    }
  }, []); //here we are getting the data ONLY at the start

  //we use another useEffect to add data to local storage
  useEffect(() => {
    localStorage.setItem("localTodos", JSON.stringify(todos)); //the key of get and set local storage should be same
    //and the data provided in .setItem("key","data string") should be a string
  }, [todos]);
  //the local storage dosent affect any other files

  return (
    <>
      <Helmet>
        <title>Tasker - Todo list maker by tasko</title>
        <meta
          name="description"
          content="Tasker is a to-do list maker app which help you stay organized and efficient with it clean and intuitive design."
        />
      </Helmet>
      <TodoProvider
        value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
      >
        <div>
          <div>
            <Navbar className={""} />
          </div>
          <div className="pt-52  text-center  ">
            <h2 className=" text-6xl hover:font-semibold text-sky-600/85 dark:text-sky-300 mb-4 sm:hover:-translate-y-3 duration-700">
              Tasker
            </h2>
            <h2 className=" text-[1.4rem] mb-12 mx-[10px] text-center dark:text-white">
              'Organise your chaos, Boost productivity'
            </h2>
          </div>
          <div className="flex justify-center pb-24">
            <div className="hover:-translate-y-3 duration-500 w-full max-w-3xl 2xl:max-w-4xl mx-3 bg-sky-500 dark:bg-sky-300  rounded-lg px-4 py-3 text-white shadow-2xl shadow-slate-700/60 dark:shadow-slate-400/60 ">
              <h1 className="text-3xl text-white dark:text-black font-semibold text-center mb-7 mt-2">
                Manage Your Tasks
              </h1>
              <div className="mb-4">
                <TodoForm />
              </div>
              <div className="flex flex-wrap gap-y-3">
                {todos.map((todo) => (
                  <div key={todo.id} className="w-full">
                    <TodoItem todo={todo} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </TodoProvider>
    </>
  );
}

export default Tasker;
