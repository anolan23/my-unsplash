function Form({ onSubmit, children }) {
  const onFormSubmit = function (e) {
    e.preventDefault();
    onSubmit();
  };
  return (
    <form onSubmit={onFormSubmit} className="form">
      {children}
    </form>
  );
}

export default Form;
