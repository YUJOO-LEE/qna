import { Box, Button, Flex, Spacer } from '@chakra-ui/react';
import { useAuth } from '@/contexts/auth_user.context';

const GNB = function () {
  const { loading, authUser, signOut, signInWithGoogle } = useAuth();

  const loginBtn = (
    <Button
      fontSize="sm"
      fontWeight={600}
      color="white"
      bg="pink.400"
      _hover={{ bg: 'pink.300' }}
      onClick={signInWithGoogle}
    >
      Login
    </Button>
  );
  const logOutBtn = (
    <Button as="a" fontSize="sm" fontWeight={400} variant="link" onClick={signOut}>
      Logout
    </Button>
  );

  const authInitialized = loading || authUser === null;

  return (
    <Box>
      <Flex minH="60px" py={{ base: 2 }} px={{ base: 4 }} align="center" maxW="md" mx="auto">
        <Spacer />
        <Box flex="1">
          <img style={{ height: '40px' }} src="/logo.svg" alt="logo" />
        </Box>
        <Box justifyContent="flex-end">{authInitialized ? loginBtn : logOutBtn}</Box>
      </Flex>
    </Box>
  );
};

export default GNB;