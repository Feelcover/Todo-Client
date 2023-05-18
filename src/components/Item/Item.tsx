import React from "react";
import styles from "./Item.module.css";

const Item = () => {
  return (
    <li>
      <div>
        <span></span>
      </div>
      <div>
        <button className="btn btn-primary">Изменить</button>
        <button className="btn btn-success">Завершить</button>
        <button className="btn btn-danger">Удалить</button>
      </div>
    </li>
  );
};

export default Item;
