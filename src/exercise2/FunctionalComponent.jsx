import useRandomImage from './useRandomImage';
import { Heading, Image, Text, Code, Button, Spinner } from '@chakra-ui/react';

const Exercise2FunctionalComponent = () => {
  const { imageUrl, loading, refreshImage } = useRandomImage();

  return (
    <>
      <Heading as='h3'>Part 1</Heading>
      <Text>
        1. Refactor this component{' '}
        <Code colorScheme='yellow'>src/exercise2/FunctionalComponent.jsx</Code>{' '}
        to implement the <Code>useRandomImage hook</Code> and display the image
        using the
        <Code>Image</Code> component bellow (it taks an src prop 😉)
      </Text>
      <Text>
        2. Update the useRandomImage hook so that it also returns a function we
        can call to refetch the image and pass that to the onClick of the Button
      </Text>

      {loading ? <Spinner /> : <Image boxSize='100px' src={imageUrl} />}

      <Button onClick={() => refreshImage()}>Reload</Button>
    </>
  );
};

export default Exercise2FunctionalComponent;
