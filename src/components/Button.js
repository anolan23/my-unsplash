function Button({ type = 'button', onClick, children }) {
  return (
    <button className="button" onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default Button;
