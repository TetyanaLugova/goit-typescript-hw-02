import { Photo } from '../../types';
import css from './ImageCard.module.css';

interface ImageCardProps {
  item: Photo;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ item, onClick }) => {
  return (
    <div onClick={onClick}>
      <img className={css.img} src={item.urls.small} alt={item.title} />
    </div>
  );
};

export default ImageCard;
