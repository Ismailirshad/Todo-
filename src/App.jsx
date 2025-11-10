import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) setTodos(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    if (todo.trim().length < 3) return;
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
  };

  const handleEdit = (id) => {
    const selected = todos.find((t) => t.id === id);
    setTodo(selected.todo);

    const updated = todos.filter((t) => t.id !== id);
    setTodos(updated);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleCheckbox = (id) => {
    const updated = todos.map((t) =>
      t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
    );
    setTodos(updated);
  };

  return (
    <>
      <Navbar />

      <div className="container mx-auto bg-violet-100 my-5 rounded-xl min-h-[80vh] w-full md:w-1/2 p-6 shadow-lg">
        <h1 className="font-bold text-2xl text-center">iTask – Manage Your Todos</h1>

        <div className="addTodo my-5 text-center">
          <h2 className="text-xl mb-2 text-indigo-900 font-bold">Add a Todo</h2>

          <div className="flex gap-3 justify-center">
            <input
              type="text"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              className="border-2 border-emerald-700 rounded-lg px-3 py-1 w-3/4 focus:outline-none focus:border-emerald-900"
              placeholder="Enter your task..."
            />
            <button
              onClick={handleAdd}
              disabled={todo.trim().length < 3}
              className="bg-violet-800 hover:bg-violet-900 disabled:bg-gray-400 px-4 py-1 text-white rounded-md font-semibold transition"
            >
              Save
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-3 justify-center">
          <input
            type="checkbox"
            checked={showFinished}
            onChange={() => setShowFinished(!showFinished)}
          />
          <span className="font-medium">Show Completed</span>
        </div>

        <h2 className="text-xl font-semibold text-center">Your Todos</h2>

        <div className="todos p-3">
          {todos.length === 0 && (
            <p className="text-center mt-5 text-gray-600">No todos to display</p>
          )}

          {todos
            .filter((item) => showFinished || !item.isCompleted)
            .map((item) => (
              <div
                key={item.id}
                className="todo flex justify-between items-center bg-white shadow-md rounded-lg p-3 my-2"
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={item.isCompleted}
                    onChange={() => handleCheckbox(item.id)}
                  />
                  <span
                    className={`text-lg ${
                      item.isCompleted ? "line-through text-gray-500" : ""
                    }`}
                  >
                    {item.todo}
                  </span>
                </div>

                <div className="buttons flex gap-2">
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="bg-blue-600 hover:bg-blue-800 px-3 py-1 text-white rounded-md text-sm font-semibold"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-600 hover:bg-red-800 px-3 py-1 text-white rounded-md text-sm font-semibold"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
