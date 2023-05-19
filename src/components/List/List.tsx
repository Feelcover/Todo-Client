import { useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ITodoReducer } from "../../types/types";
import Item from "../Item/Item";
import "./styles.css";

const List = () => {
  const state = useSelector((state: ITodoReducer) => state.todoReducer);
  console.log(state.todos);

  return (
    <TransitionGroup component="ul" className="list-group">
      {state.todos.map((todo) => (
        <CSSTransition timeout={800} classNames={"todo"} key={todo.id}>
          <Item todo={todo} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default List;
