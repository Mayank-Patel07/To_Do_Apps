import React, { useState } from "react";
import "../app.css";

export default function Todo() {
  const [info, setinfo] = useState({ title: "", des: "" });
  const [additem, setadditem] = useState([]);

  const addNote = (e) => {
    e.preventDefault();

    if (info.title && info.des) {
      let newToDoObj = {
        title: info.title,
        des: info.des,
      };
      let updatedTodoArr = [...additem];
      updatedTodoArr.push(newToDoObj);
      setadditem(updatedTodoArr);
      setinfo({ title: "", des: "" });
    }
  };
  const deletebtn = (id) => {
    let delete_note = additem.filter((element, index) => {
      return id !== index;
    });
    setadditem(delete_note);
  };

  return (
    <>
      <div className="container">
        <form>
          <div className="mb-3 my-2">
            <label className="form-label">Title</label>
            <input
              type="text"
              // value={title}
              value={info.title}
              name="title"
              onChange={(e) => {
                // settitle(e.target.value);
                setinfo({ ...info, title: e.target.value });
              }}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input
              type="text"
              // value={des}
              value={info.des}
              name="des"
              onChange={(e) => {
                // setdes(e.target.value);
                setinfo({ ...info, des: e.target.value });
              }}
              className="form-control"
            />
          </div>
          <button className="btn button-29" onClick={addNote}>
            Add Note
          </button>
        </form>
      </div>
      <div className="container ">
        <div className="row">
          {additem.map((element, index) => {
            let { title, des } = element;
            return (
              <div
                className="card my-3 mx-3 "
                style={{ width: "18rem" }}
                key={index}
              >
                <img
                  src="https://cdn.dribbble.com/users/40016/screenshots/17624032/media/411778466056b9f80f544f107b6b8150.png?resize=400x0"
                  className="card-img-top my-2 rounded-3"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{des}</p>
                  <button
                    className="btn button-29"
                    onClick={() => {
                      deletebtn(index);
                    }}
                  >
                    Delete Note
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
