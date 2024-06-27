import Modal from 'react-modal';
import { Photo } from '../../types';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
  },
};

Modal.setAppElement('#root');

interface ImageModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  image: Photo;
}

const ImageModal: React.FC<ImageModalProps> = ({
  modalIsOpen,
  closeModal,
  image,
}) => {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        contentLabel="Image modal"
      >
        {image && <img src={image.urls.regular} alt="image" />}
      </Modal>
    </div>
  );
};

export default ImageModal;
