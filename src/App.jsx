import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import { getImeges } from './components/ImegeGallery-Api';
import ImegeGallery from './components/ImageGallery/ImageGallery';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Loader from './components/Loader/Loader';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

function App() {
  const [imeges, setImeges] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      return;
    }

    async function fetchImages() {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await getImeges(searchQuery, page);
        setImeges(prevState => [...prevState, ...data]);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, [page, searchQuery]);

  const handleSubmit = async topic => {
    setSearchQuery(topic);
    setPage(1);
    setImeges([]);
  };
  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  function openModal(image) {
    setSelectedImage(image);
    setIsOpen(true);
  }

  function closeModal() {
    setSelectedImage(null);
    setIsOpen(false);
  }

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {isError && <ErrorMessage />}
      {imeges.length > 0 && (
        <ImegeGallery items={imeges} openModal={openModal} />
      )}
      {isLoading && <Loader />}
      {imeges.length > 0 && !isLoading && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}
      {selectedImage && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          image={selectedImage}
        />
      )}
    </>
  );
}

export default App;
