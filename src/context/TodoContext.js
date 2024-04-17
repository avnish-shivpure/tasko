import { createContext, useContext } from "react";

export const TodoContext = createContext({
  //we will make an sobject which will look like our required todo list
  todos: [
    {
      id: 1,
      todo: "Todo title",
      todoDescription: "Todo Description",
      completed: false,
    },
  ],
  //we would also add function which the todos have to execute
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
