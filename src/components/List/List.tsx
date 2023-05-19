import { useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ITodoReducer } from "../../types/types";
import Item from "../Item/Item";
import styles from "./List.module.css";

const List = () => {
  const state = useSelector((state: ITodoReducer) => state.todoReducer);

  return (
    <TransitionGroup component="ul" className="list-group">
      {state.todos.map((todo) => (
        <CSSTransition timeout={800} classNames={"post"} key={todo.id}>
          <Item todo={todo} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default List;
