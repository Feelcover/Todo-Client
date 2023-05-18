import React from "react";
import styles from "./Item.module.css";

const Item = () => {
  return (
    <li className={styles.item}>
      <div>
        <span className={styles.task}>Задача</span>
      </div>
      <div>
        <button className="btn btn-primary mr-2">Изменить</button>
        <button className="btn btn-success mr-2">Завершить</button>
        <button className="btn btn-danger">Удалить</button>
      </div>
    </li>
  );
};

export default Item;
