import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImegeGallery({ items, openModal }) {
  return (
    <ul className={css.list}>
      {items.map(item => (
        <li className={css.item} key={item.id}>
          <ImageCard onClick={() => openModal(item)} item={item} />
        </li>
      ))}
    </ul>
  );
}
