export const Button = ({
  type = 'button',
  className = 'btn btn-info',
  text,
  onClick,
  disabled,
}) => {
  return (
    <button className={className} type={type} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};
