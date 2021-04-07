import { Children, Component } from 'react';
import {
  Box,
  Heading,
  Image,
  Text,
  Code,
  Spinner,
  Button,
} from '@chakra-ui/react';
import { UseRandomImage } from './useRandomImage';

class ClassComponentRenderProps extends Component {
  constructor(props) {
    super(props);
  }
  // Class stuff that you can't refactor would be here 😬

  render() {
    // We need access to the return values from our hook in the return by creating a funtion that takes them as params

    return (
      <Box m={2}>
        <Heading as='h3' mb={2}>
          Part 2 (RenderProps)
        </Heading>
        <Text mb={2}>
          Create and export a new component in <Code>useRandomImage.jsx</Code>`
          that implements the render props pattern.
        </Text>
        <Text mb={2}>
          Refactor this component{' '}
          <Code colorScheme='yellow'>
            src/exercise2/ClassComponentRenderProps.jsx
          </Code>{' '}
          to implement the <Code>useRandomImage hook</Code> making use of your
          render props component export that work in a class
        </Text>
        <Text>
          Tip: Check out how we did this in the example in{' '}
          <Code>useDocumentTitle.jsx</Code>
        </Text>
        <Box>
          <UseRandomImage>
            {({ imageUrl, refreshImage, loading }) => (
              <>
                {loading ? (
                  <Spinner />
                ) : (
                  <Image boxSize='100px' src={imageUrl} />
                )}

                <Button onClick={() => refreshImage()}>Reload</Button>
              </>
            )}
          </UseRandomImage>
        </Box>
      </Box>
    );
  }
}

export default ClassComponentRenderProps;
