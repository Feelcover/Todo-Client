import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../../redux/actions";
import styles from "./Form.module.css";

const Form = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!input.trim()) {
      return;
    }
    dispatch(createTodo(input));
    setInput("");
  };

  const handleChangeInput = (evt: ChangeEvent<HTMLInputElement>) => {
    setInput(evt.target.value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.container}>
        <label className="form-label" htmlFor="">
          Введите название задачи
        </label>
        <input
          value={input}
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
