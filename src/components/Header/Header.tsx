import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container pt-3 pb-3">
        <h1>Todo App</h1>
      </div>
    </header>
  );
};

export default Header;
