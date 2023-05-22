import React, { ChangeEvent, useState } from "react";
import { IItemProps } from "../../types/types";
import styles from "./Item.module.css";

const Item = ({ todo, removeTodo, doneTodo, changeTodo }: IItemProps) => {
  const [activeEdit, setActiveEdit] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  const handleSubmit = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === "Enter") {
      changeTodo(todo.id, todo.done, newTitle);
      setActiveEdit(!activeEdit);
    }
  };
  const handleClickSubmit = () => {
    if (newTitle) {
      changeTodo(todo.id, todo.done, newTitle);
      setActiveEdit(!activeEdit);
    }
    setActiveEdit(!activeEdit);
  };
  const handleActiveEdit = () => {
    setActiveEdit(!activeEdit);
  };
  const handleTitleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(evt.target.value);
  };
  const handleDeleteTodo = () => {
    removeTodo(todo.id);
  };
  const handleCompleteTodo = () => {
    doneTodo(todo.id, !todo.done);
  };
  return (
    <li className={`${styles.item} ${todo.done && "list-group-item-success"}`}>
      <div onKeyDown={handleSubmit}>
        {activeEdit ? (
          <input onChange={handleTitleChange} type="text" />
        ) : (
          <span className={`${styles.task} ${todo.done && styles.itemDone}`}>
            {todo.title}
          </span>
        )}
      </div>
      <div>
        <button
          onClick={activeEdit ? handleClickSubmit : handleActiveEdit}
          disabled={todo.done}
          className="btn btn-primary mr-2"
        >
          {activeEdit ? "Подтвердить" : "Изменить"}
        </button>
        <button onClick={handleCompleteTodo} className="btn btn-success mr-2">
          {todo.done ? "Возобновить" : "Завершить"}
        </button>
        <button onClick={handleDeleteTodo} className="btn btn-danger">
          Удалить
        </button>
      </div>
    </li>
  );
};

export default Item;
