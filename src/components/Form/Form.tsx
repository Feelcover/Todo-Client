import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, showAlert } from "../../redux/actions";
import { IAlertReducer } from "../../types/types";
import Alert from "../Alert/Alert";
import styles from "./Form.module.css";

const Form = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const alertState = useSelector((state: IAlertReducer) => state.alertReducer);
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!title.trim()) {
      dispatch(showAlert("Название задачи не может быть пустым", "warning"));
      return;
    }
    dispatch(createTodo(title));
    setTitle("");
  };

  const handleChangeInput = (evt: ChangeEvent<HTMLInputElement>) => {
    setTitle(evt.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      {alertState.alertText.length > 0 && <Alert props={alertState} />}
      <div className={styles.form}>
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
      </div>
    </form>
  );
};

export default Form;
