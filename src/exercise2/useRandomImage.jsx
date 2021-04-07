import { useState, useEffect } from 'react';

const useRandomImage = () => {
  const [imageUrl, setImageUrl] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [mounted, setMounted] = useState(true);

  const toggle = () => setMounted(!mounted);

  const refreshImage = () => {
    setLoading(true);

    setTimeout(() => {
      toggle();
    }, 1000);
  };

  useEffect(() => {
    const fetchRandomImage = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          'https://rickandmortyapi.com/api/character',
        );
        const data = await response.json();
        const characters = data.results;
        const character =
          characters[Math.floor(Math.random() * characters.length)];
        setImageUrl(character.image);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    fetchRandomImage();
  }, [mounted]);

  return { imageUrl, loading, error, toggle, refreshImage };
};

// render props for use in class component
const UseRandomImage = ({ children }) => {
  const randomImageProps = useRandomImage();

  return children(randomImageProps);
};

// HOC for use in class component
const withuseRandomImage = Component => {
  const WrapperComponent = props => {
    const randomImageProps = useRandomImage();

    return <Component {...props} {...randomImageProps} />;
  };

  return WrapperComponent;
};

// Tasks for this file:
// 1. Add a refresh function to useRandomImage and return it along with the other values

export { useRandomImage as default, UseRandomImage, withuseRandomImage };
