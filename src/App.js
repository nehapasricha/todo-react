import "./styles.css";
import { useReducer, useRef, useState } from "react";
import data from "./data/data";
import { todoReducer } from "./reducers/toDoreducer";

export default function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const ref = useRef();

  const addTodo = (e) => {
    if (e.keyCode === 13) {
      const val = e.target.value;

      dispatch({
        type: "ADD",
        payload: val
      });

      ref.current.value = "";
    }
  };

  const removeItem = (item) => {
    dispatch({
      type: "REMOVE",
      payload: item
    });
  };

  return (
    <>
      <div className="App">
        <input ref={ref} type="text" onKeyUp={(e) => addTodo(e)} />
        <ul>
          {todos.map((item) => {
            return (
              <li key={item}>
                <span>{item}</span>
                <span>
                  <button onClick={() => removeItem(item)}>x</button>
                </span>
              </li>
            );
          })}
        </ul>
      </div>

      {data.map((item) => {
        return (
          <>
            <div>{item.label}</div>
            <ul>
              {item.items.map((d) => {
                return <li>{d}</li>;
              })}
            </ul>
          </>
        );
      })}
    </>
  );
}
