import Modal from 'react-modal';

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

export default function ImageModal({ modalIsOpen, closeModal, image }) {
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
}
