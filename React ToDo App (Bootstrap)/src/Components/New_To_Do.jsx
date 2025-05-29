import React, { useEffect } from "react";
import { useState } from "react";

export default function New_To_Do() {
  const [data, setdata] = useState({ title: "", des: "" });
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    let todos = JSON.parse(localStorage.getItem("todo")) || [];
    setTodo(todos);
  }, []);

  const update = (e) => {
    const { name, value } = e.target;
    setdata({
      ...data,
      [name]: value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (data.title && data.des) {
      let new_to_do_obj = {
        title: data.title,
        des: data.des,
      };
      console.log(new_to_do_obj);

      let updated_todo_arr = [...todo, new_to_do_obj];
      localStorage.setItem("todo", JSON.stringify(updated_todo_arr));
      setTodo(updated_todo_arr);
      setdata({ title: "", des: "" });
    }
  };

  const removeNote = (id) => {
    let updated_todo = todo.filter((element, index) => {
      return id !== index;
    });
    setTodo(updated_todo);
    localStorage.setItem("todo", JSON.stringify(updated_todo));
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form action="" className="my-5">
              <div>
                <label htmlFor="Title">Title</label>
                <input
                  type="text"
                  value={data.title}
                  className="form-control"
                  id="Title"
                  name="title"
                  onChange={update}
                  placeholder="Title"
                />
              </div>
              <div>
                <label htmlFor="Des">Description</label>
                <input
                  type="text"
                  value={data.des}
                  className="form-control"
                  id="Des"
                  name="des"
                  onChange={update}
                  placeholder="Des"
                />
              </div>
              <button className="btn btn-secondary my-1" onClick={handleClick}>
                Add Note
              </button>
            </form>
          </div>
        </div>
        <div className="row">
          <h2 className="text-center">To Do List</h2>
          {todo.map((item, index) => (
            <div className=" card col-md-3 m-1" key={index}>
              <h3>Title : {item.title}</h3>
              <p>Description : {item.des}</p>
              <button className="btn btn-danger mb-1" onClick={()=>removeNote(index)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
