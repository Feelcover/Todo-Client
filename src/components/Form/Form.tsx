import { useSelector } from "react-redux";
import styles from "./Form.module.css";

const Form = () => {
  const state = useSelector((state: any) => state.todoReducer);

  return (
    <form className={styles.form}>
      <div className={styles.container}>
        <label className="form-label" htmlFor="">
          Введите название задачи
        </label>
        <input type="text" className="form-control" />
      </div>
      <button className={`${styles.button} btn btn-success`}>Создать</button>
    </form>
  );
};

export default Form;
