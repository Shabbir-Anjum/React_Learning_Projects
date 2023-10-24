import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DeleteAll, addTodo } from "../Features/Todo/TodoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    console.log('shabbir')
    setInput("");
  };
  const Delete = (e)=>{
    dispatch(DeleteAll())
  }

  return (
    <>
      <div className="flex justify-center">
        <div>
          <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <input
              type="text"
              className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Enter a Todo..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Add Todo
            </button>
          </form>
        </div>
        <div>
          <button
            onClick={Delete}
            className="text-white mt-12 mx-3 bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Delete All
          </button>
        </div>
      </div>
    </>
  );
}

export default AddTodo;
