import './style/button.css';

const Button = ({ onClick, children, classEx = '' }) => {
   return (
      <button className={`button ${classEx}`} onClick={onClick}>
         {children}
      </button>
   );
};

export default Button;
