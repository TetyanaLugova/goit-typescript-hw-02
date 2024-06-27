import css from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  handleLoadMore: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ handleLoadMore }) => {
  return (
    <button className={css.btn} onClick={handleLoadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
