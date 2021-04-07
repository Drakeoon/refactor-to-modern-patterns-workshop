import React, { useState, useEffect } from 'react';
import { Image } from '@chakra-ui/react';

const fetchRandomImage = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data = await response.json();
  const characters = data.results;
  const character = characters[Math.floor(Math.random() * characters.length)];

  return character.image;
};

const useRandomImage = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    async function fetchImage() {
      const randomImageUrl = await fetchRandomImage();

      setImageUrl(randomImageUrl);
    }

    fetchImage();
  }, []);

  return imageUrl;
};

const UseRandomImage = ({ children }) => {
  const randomImage = useRandomImage();

  return children(randomImage);
};

const withUseRandomImage = Component => {
  const WrappedComponent = props => {
    const imageUrl = useRandomImage();

    return <Component {...props} imageUrl={imageUrl} />;
  };

  return WrappedComponent;
};

class RandomImage extends React.Component {
  render() {
    return (
      <UseRandomImage>{imageUrl => <Image src={imageUrl} />}</UseRandomImage>
    );
  }
}

class RandomImageWithHoc extends React.Component {
  render() {
    const { imageUrl } = this.props;

    return <Image src={imageUrl} />;
  }
}

export default withUseRandomImage(RandomImageWithHoc);

// export default RandomImage;
