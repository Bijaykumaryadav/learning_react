import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <>
      <div className={styles.itemsContainer}>
        {todoItems.map((item, i) => (
          <TodoItem
            todoDate={item.dueDate}
            todoName={item.name}
            onDeleteClick={onDeleteClick}
            key={i}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
