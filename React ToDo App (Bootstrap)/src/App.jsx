import React from "react";
import Navbar from "./Components/Navbar";
import Todo from "./Components/Todo";
import New_To_Do from "./Components/New_To_Do";

export default function App() {
  return (
    <>
      <Navbar />
      {/* <Todo/> */}
      <New_To_Do />
    </>
  );
}
