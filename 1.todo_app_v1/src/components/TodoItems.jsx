import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((item, i) => (
          <TodoItem todoDate={item.dueDate} todoName={item.name} key={i} />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
