export const Button = ({ type = 'button', className = 'btn btn-info', text, onClick }) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {text}
    </button>
  );
};
