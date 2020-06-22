import React, { Component } from "react";
// if you want to export functional components you have to a traditional function not an arrow function
export default function CounterDisplay(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.count}</h1>

      <button onClick={props.decrement}>Decrement</button>
      <button onClick={props.increment}>Increment</button>
    </div>
  );
}
