import css from './ErrorMessage.module.css';

const ErrorMessage: React.FC = () => {
  return <p className={css.text}>Oops! There was an error! Try again!</p>;
};

export default ErrorMessage;
