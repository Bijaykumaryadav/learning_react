function TodoItem({ todoName, todoDate, onDeleteClick }) {
  const handleDeleteClick = () => {
    console.log(todoName);
    onDeleteClick(todoName);
  };

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={handleDeleteClick}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
