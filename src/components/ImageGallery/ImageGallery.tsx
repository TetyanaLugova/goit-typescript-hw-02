import { Photo } from '../../types';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

interface ImageGalleryProps {
  items: Photo[];
  openModal: (item: Photo) => void;
}
const ImageGallery: React.FC<ImageGalleryProps> = ({ items, openModal }) => {
  return (
    <ul className={css.list}>
      {items.map(item => (
        <li className={css.item} key={item.id}>
          <ImageCard onClick={() => openModal(item)} item={item} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
