/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import List from "./list/List";
import "./Todo.scss";

function Todo() {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    function handleinput() {
        if (inputValue && inputValue !== "") {
            const newTask = {
                id: Math.random().toString(36).substr(2, 9),
                name: inputValue,
            };
            setTodos([...todos, newTask]);

            setInputValue("");
        } else {
            alert("Please enter a task");
        }
    }

    function handleDelete(index) {
        // setTodos(todos.filter((task) => task.id !== index));
        const newTodos = [...todos];
        newTodos.splice(newTodos.length - 1, 1);
        setTodos(newTodos);
    }

    return (
        <>
            <section className="todo">
                <div className="todo-container">
                    <h1>To-Do List</h1>

                    <div className="add">
                        <input
                            type="text"
                            id="todo-input"
                            placeholder="Add a new task"
                            value={inputValue}
                            onChange={(e) => {
                                setInputValue(e.target.value);
                            }}
                        />

                        <button id="add-btn" onClick={handleinput}>
                            Add
                        </button>
                    </div>

                    <ul id="todo-list">
                        {todos?.map((task, index) => {
                            return (
                                <List
                                    tasks={task}
                                    handleDelete={handleDelete}
                                    key={task.id}
                                />
                            );
                        })}
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Todo;
