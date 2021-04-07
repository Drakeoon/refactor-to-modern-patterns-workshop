import { Component } from 'react';
import {
  Box,
  Heading,
  Image,
  Text,
  Code,
  Spinner,
  Button,
} from '@chakra-ui/react';
import { withuseRandomImage } from './useRandomImage';

class ClassComponentHOC extends Component {
  constructor(props) {
    super(props);
  }
  // Class stuff that you can't refactor would be here 😬

  render() {
    const { loading, imageUrl, refreshImage } = this.props;

    return (
      <Box m={2}>
        <Heading as='h3' mb={2}>
          Part 2 (HOC)
        </Heading>
        <Text mb={2}>
          Create and export a new function in <Code>useRandomImage.jsx</Code>{' '}
          that implements the HOC pattern.
        </Text>
        <Text mb={2}>
          Refactor this component{' '}
          <Code colorScheme='yellow'>src/exercise2/ClassComponentHOC.jsx</Code>{' '}
          to implement the <Code>useRandomImage hook</Code> making use of your
          HOC export that works in a class
        </Text>
        <Text>
          Tip: Check out how we did this in the example in{' '}
          <Code>useDocumentTitle.jsx</Code>
        </Text>

        {loading ? <Spinner /> : <Image boxSize='100px' src={imageUrl} />}

        <Button onClick={() => refreshImage()}>Reload</Button>
      </Box>
    );
  }
}

export default withuseRandomImage(ClassComponentHOC);
