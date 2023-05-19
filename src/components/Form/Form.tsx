import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../../redux/actions";
import styles from "./Form.module.css";

const Form = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!title.trim()) {
      return;
    }
    const todoObject = {
      title,
      done: false,
    }

    //@ts-ignore
    dispatch(createTodo(todoObject));
    setTitle("");
  };

  const handleChangeInput = (evt: ChangeEvent<HTMLInputElement>) => {
    setTitle(evt.target.value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.container}>
        <label className="form-label" htmlFor="">
          Введите название задачи
        </label>
        <input
          value={title}
          type="text"
          className="form-control"
          onChange={handleChangeInput}
        />
      </div>
      <button className={`${styles.button} btn btn-success`}>Создать</button>
    </form>
  );
};

export default Form;
