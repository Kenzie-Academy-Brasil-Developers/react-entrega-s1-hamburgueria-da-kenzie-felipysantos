const Button = ({ className, type, children, onClick }) => (
  <button onClick={onClick} className={className} type={type}>
    {children}
  </button>
);
export default Button;
